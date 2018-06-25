import * as cookie from "cookie";
import { soap } from "strong-soap";
import { GaroonClient } from "./methods";
import { Option } from "./option";
import { RPC } from "./rpc";
const Agent = require("socks5-https-client/lib/Agent");

export class Client extends GaroonClient {
    private authentication?: { Username: string; Password: string };
    private session?: { headerName: string; sessionId: string };
    private httpClient: soap.HttpClient;

    constructor(options: Option) {
        super();
        this.httpClient = new soap.HttpClient({});
        this.client = new Promise<soap.Client & RPC>((resolve, reject) => {
            const clientOption: soap.Option = {
                attributesKey: "attributes",
                httpClient: {
                    request: (rurl, data, callback, exheaders, exoptions) => {
                        if (options.hasOwnProperty("proxy") && options.proxy) {
                            exoptions = {
                                agentClass: Agent,
                                agentOptions: {
                                    socksHost: options.proxy.host,
                                    socksPort: options.proxy.port,
                                },
                            };
                        }
                        return this.httpClient.request(
                            rurl,
                            data,
                            (err, res, body) => {
                                if (err) {
                                    callback(err, res, body);
                                } else {
                                    // Fix wrong response name for some Garoon RPC methods.
                                    const rewritedBody = body
                                        .replace(/admin:LoginResponse/g, "UtilLoginResponse")
                                        .replace(/admin:GetRequestTokenResponse/g, "UtilGetLoginUserIdResponse");
                                    callback(err, res, rewritedBody);
                                }
                            },
                            exheaders,
                            exoptions,
                        );
                    },
                },
            };
            soap.createClient(options.url, clientOption, (err: any, client: soap.Client & RPC) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(client);
                }
            });
        });
    }

    /**
     * Set authentication for WSSecurity.
     *
     * @see https://cybozudev.zendesk.com/hc/ja/articles/202228464#step2
     */
    public authenticate = (username: string, password: string): void => {
        this.authentication = { Username: username, Password: password };
    };

    /**
     * Set session id.
     *
     * You can acquire session id by using UtilLogin method or login with web browser.
     * @see https://cybozudev.zendesk.com/hc/ja/articles/202228464#step2
     */
    public setSession = (headerName: string, sessionId: string): void => {
        this.session = { headerName, sessionId };
    };

    protected callMethod = <I, O>(methodName: string, input: I, method: soap.SoapMethod): Promise<O> => {
        return this.client.then(client => {
            const current = new Date();
            const expires = new Date(current.getFullYear() + 1, current.getMonth(), current.getDate());
            client.clearHttpHeaders();
            client.clearSoapHeaders();
            let headers: any = {
                Action: methodName,
                Timestamp: { Created: current.toISOString(), Expires: expires.toISOString() },
            };
            // If client has been authenticated, add authentication to header by using WSSecurity.
            // NOTE: Garoon doesn't support WSSecurity in strong-soap.
            // See: https://cybozudev.zendesk.com/hc/ja/articles/202228464#step2
            if (this.authentication) {
                headers = { ...headers, Security: { UsernameToken: this.authentication } };
            }
            client.addSoapHeader(headers);
            if (this.session) {
                client.addHttpHeader("Cookie", cookie.serialize(this.session.headerName, this.session.sessionId));
            }
            return new Promise<O>((resolve, reject) => {
                method({ parameters: input }, (err, result) => {
                    if (err || !result.returns) {
                        reject(err);
                    } else {
                        resolve(result.returns as O);
                    }
                });
            });
        });
    };
}
