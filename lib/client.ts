import {soap} from "strong-soap";
import {Option} from "./option";

export class Client {
    private client: Promise<soap.Client>;

    constructor(options: Option) {
        this.client = new Promise<soap.Client>(
            (resolve, reject) => {
                soap.createClient(options.url, (err: any, client: soap.Client) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(client);
                    }
                });
            }
        );
    }
}
