// Type definitions for strong-soap
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference types='node' />

declare module 'strong-soap' {
	import * as events from 'events';
	import * as stream from 'stream';
	
	export namespace soap {
		export namespace security {
			class Security {
				addOptions(options: any): void;
				addHttpHeaders(headers: any): void;
				addSoapHeaders(headerElement: any): void;
				postProcess(envelopeElement: any, headerElement: any, bodyElement: any): void;
			}

			export class BasicAuthSecurity extends Security {
				constructor(username: string, password: string, options?: any);
			}

			export class WSSecurity extends Security {
				constructor(username: string, password: string, options?: any);
			}

			export class WSSecurityCert extends Security {
				constructor(privatePEM: Buffer | string, publicP12PEM: Buffer | string, password: string, encoding: string);
			}

			export class ClientSSLSecurity extends Security {
				constructor(key: Buffer | string, cert: Buffer | string, ca: Buffer | string | Buffer[] | string[])
			}

			export class ClientSSLSecurityPFX extends Security {
				constructor(pfx: Buffer | string, passphrase: string);
			}

			export class BearerSecurity extends Security {
				constructor(token: string, options: any);
			}
		}

		export import BasicAuthSecurity = security.BasicAuthSecurity;
		export import WSSecurity = security.WSSecurity;
		export import WSSecurityCert = security.WSSecurityCert;
		export import ClientSSLSecurity = security.ClientSSLSecurity;
		export import ClientSSLSecurityPFX = security.ClientSSLSecurityPFX;
		export import BearerSecurity = security.BearerSecurity;
		export function createClient(url: string, options: Option, callback: Function, endpoint?: string): Client;
		export function createClient(url: string, callback: Function, endpoint?: string): Client;
		export function passwordDigest(nonce: string, created: string, password: string): string;
		export function listen(server: any, pathOrOptions: string | ServerOption, services: any, xml: string): Server;
		export import WSDL = parser.WSDL;
		export import XMLHandler = parser.XMLHandler;
		export import NamespaceContext = parser.NamespaceContext;
		export import QName = parser.QName;

		class SOAPElement {
			constructor(value: Object | string, qname: QName, options?: any);
		}

		class Base extends events.EventEmitter {
			constructor(wsdl: WSDL, options?: Option);
			addSoapHeader(value: Object | string, qname?: QName): number;
			changeSoapHeader(index: number, value: Object | string, qname: QName): void;
			getSoapHeaders(): SOAPElement[];
			clearSoapHeaders(): void;
			setHttpHeader(name: string, value: any): void;
			addHttpHeader(name: string, value: any): void;
			getHttpHeaders(): {[key: string]: string};
			clearHttpHeaders(): void;
			static createSOAPEnvelope(prefix?: string, nsURI?: string): any;
			findElement(nsURI: string, name: string): any | undefined;
			createNamespaceContext(soapNsPrefix: string, soapNsURI: string): NamespaceContext;
			addSoapHeadersToEnvelope(soapHeaderElement: any, xmlHandler: XMLHandler): void;
		}

		export class Server extends Base {
			constructor(server: any, path: string, services: any, wsdl: WSDL, options?: ServerOption);
		}

		type SoapMethod = (args: any, callback: (err: any, result: any) => void, options?: any, extraHeaders?: any) => void;

		export class Client extends Base {
			constructor(wsdl: WSDL, endpoint: string, options?: Option);
			setEndpoint(endpoint: string): void;
			describe(): {[serviceName: string]: {[portName: string]: {[operationName: string]: any}}};
			setSecurity(security: security.Security): void;
			setSOAPAction(soapAction: string): void;
			//[method: string]: SoapMethod;
		}

		export interface Option {
			attributesKey?: string;
			disableCache?: boolean;
			endpoint?: string;
			envelopeKey?: string;
			escapeXML?: boolean;
			forceSoap12Headers?: boolean;
			httpClient?: {request(rurl: string, data: any | string, callback: (err: any, res: any, body: any | string) => void, exheaders?: { [key: string]: any }, exoptions?: { [key: string]: any }): any};
			ignoreBaseNameSpaces?: boolean,
			ignoredNamespaces?: string[] | { namespaces: string[], override: boolean };
			overrideRootElement?: { namespace: string, xmlnsAttributes?: string[] };
			request?: (options: any, callback?: (error: any, res: any, body: any) => void) => void;
			stream?: boolean;
			valueKey?: string;
			wsdl_headers?: { [key: string]: any };
			wsdl_options?: { [key: string]: any };
			xmlKey?: string;
		}

		export interface ServerOption extends Option {
			path?: string;
			services?: any;
			xml?: string;
			uri?: string;
		}

		export class HttpClient {
			constructor(options?: Option);
			buildRequest(rurl: string, data: any | string, exheaders?: { [key: string]: any }, exoptions?: { [key: string]: any }): any;
			handleResponse(req: any, res: any, body: any | string): any | string;
			request(rurl: string, data: any | string, callback: (err: any, res: any, body: any | string) => void, exheaders?: { [key: string]: any }, exoptions?: { [key: string]: any }): any;
			requestStream(rurl: string, data: any | string, exheaders?: { [key: string]: any }, exoptions?: { [key: string]: any }): any;
		}
	} 

	export namespace parser {
		export class QName {
			constructor(nsURI: string, name: string, prefix: string);
			toString(): string;
			parse(qname: string, nsURI: string | NamespaceContext): QName;
		}

		interface Namespace {
			uri: string;
			prefix: string;
			declared: boolean;
		}

		class NamespaceScope {
			constructor(parent: NamespaceScope);
			getNamespaceURI(prefix: string, localOnly: boolean): string | null;
			getNamespaceMapping(prefix: string): Namespace | null;
			getPrefix(nsURI: string, localOnly: boolean): string | null;
			getPrefixMapping(nsURI: string, localOnly: boolean): string | null;
			generatePrefix(base?: string): string;
		}

		export class NamespaceContext {
			constructor();
			addNamespace(prefix: string, nsURI: string, localOnly: boolean): boolean;
			pushContext(): NamespaceScope;
			popContext(): NamespaceScope | undefined;
			getNamespaceURI(prefix: string, localOnly: boolean): string | undefined;
			getPrefix(nsURI: string, localOnly: boolean): string | undefined;
			getPrefixMapping(nsURI: string): string | undefined;
			generatePrefix(base: string): string | undefined;
			registerNamespace(prefix: string, nsURI: string): Namespace | null;
			declareNamespace(prefix: string, nsURI: string): Namespace | null;
		}

		export class WSDL {
			constructor(definition: string | Object, uri: string, options?: soap.Option);
			load(callback: (err: any, res: any) => void): void;
			processIncludes(callback: (err: any) => void): void;
			describeServices(): {[serviceName: string]: {[portName: string]: {[operationName: string]: any}}};
			toXML(): string;
			xmlToObject(xml: any): undefined;
			static load(uri: string, options: {WSDL_CACHE: {[key: string]: any}}, callback: (err: any | null, res?: any) => void): WSDL;
			static load(uri: string, callback: (err: any | null, res?: any) => void): WSDL;
			static open(uri: string, options: soap.Option, callback: (err: any | null, res?: any) => void): WSDL;
			static open(uri: string, callback: (err: any| null, res?: any) => void): WSDL;
			static loadSystemSchemas(callback: (err: any | null, res?: any) => void): void;
			ignoredNamespaces: string[];
			ignoreBaseNameSpaces: boolean;
			valueKey: string;
			xmlKey: string;
			definitions: Definitions;
		}

		interface Definitions {
			messages: any;
			portTypes: any;
			bindings: any;
			services: any;
			schemas: any;
		}

		export interface XMLHandlerOption {
			valueKey?: string;
			xmlKey?: string;
			attributesKey?: string;
			xsiTypeKey?: string;
		}

		export class XMLHandler {
			constructor(options?: XMLHandlerOption);
			jsonToXml(node: any | null, nsContext: NamespaceContext | null, descriptor: any, val: any): any;
			mapObject(node: any, nsContext: NamespaceContext, descriptor: any | null, val: any | null): any;
			addAttributes(node: any, nsContext: NamespaceContext, descriptor: any, val: any, attrs: any): void;
			static createSOAPEnvelope(prefix?: string, nsURL?: string): {body: any, header: any, doc: any};
			static createSOAPEnvelopeDescriptor(prefix?: string, nsURI?: string, parameterDescriptor?: any): any;
			static parseXml(root: any | null, xml: string | stream.Readable, cb: (err: any | null, res?: any) => void): any;
			xmlToJson(nsContext: null | NamespaceContext, xml: string, descriptor: any): any;
		}
	}
}
