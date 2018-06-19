/* tslint:disable:comment-format no-console */

import * as fs from "fs";
import * as path from "path";
// tslint:disable-next-line:no-implicit-dependencies
import * as request from "request";
import * as url from "url";
import * as xmldom from "xmldom";

interface Wsdl {
    readonly url: string;
    readonly body: string;
}

/**
 * Download WSDL/XSD.
 *
 * Usage: (Download to "./garoon/garoon.wsdl")
 * node lib/cli/wsdl_downloader.js ./garoon "http://example.com?WSDL" garoon.wsdl
 */
class WsdlDownloader {
    private readonly wsdlUrl: url.Url;

    constructor(wsdlUrl: string) {
        this.wsdlUrl = url.parse(wsdlUrl);
    }

    public execute = (outputDirectory: string, baseFileName: string) => {
        const baseFilePath = path.join(outputDirectory, baseFileName);
        return new Promise((resolve, reject) => {
            fs.exists(outputDirectory, (exists: boolean) => {
                if (exists) {
                    resolve();
                } else {
                    fs.mkdir(outputDirectory, err => {
                        if (err) {
                            console.warn("Failed to create a directory: " + outputDirectory);
                            reject(err);
                        } else {
                            resolve();
                        }
                    });
                }
            });
        })
            .then(() => {
                return this.download(url.format(this.wsdlUrl), baseFilePath);
            })
            .then((wsdl: { url: string; body: string }) => {
                const doc: Document = new xmldom.DOMParser().parseFromString(wsdl.body);
                const imports: Element[] = Array.from(doc.getElementsByTagName("wsdl:import"));
                const locations: Array<Promise<{ url: string; body: string }>> = [];
                imports.forEach((wsdlImport: Element) => {
                    const location = wsdlImport.getAttribute("location");
                    if (location) {
                        wsdlImport.setAttribute("location", path.basename(location));
                        const filename = path.join(outputDirectory, path.basename(location));
                        console.log("url:" + url.resolve(wsdl.url, location));
                        locations.push(
                            this.download(url.resolve(wsdl.url, location), filename).then((downloaded: Wsdl) => {
                                const body = downloaded.body;
                                return this.save(filename, body).then(() => Promise.resolve(downloaded));
                            }),
                        );
                    }
                });
                return this.save(baseFilePath, new xmldom.XMLSerializer().serializeToString(doc)).then(() =>
                    Promise.all(locations),
                );
            })
            .then((wsdls: Wsdl[]) => {
                const locations: Array<Promise<{ url: string; body: string }>> = [];
                wsdls.forEach(wsdl => {
                    const doc: Document = new xmldom.DOMParser().parseFromString(wsdl.body);
                    const imports = Array.from(doc.getElementsByTagName("xsd:import"));
                    imports.forEach((wsdlImport: Element) => {
                        const location = wsdlImport.getAttribute("schemaLocation");
                        if (location) {
                            wsdlImport.setAttribute("schemaLocation", path.basename(location));
                            const filename = path.join(outputDirectory, path.basename(location));
                            console.log("url:" + url.resolve(wsdl.url, location));
                            locations.push(
                                this.download(url.resolve(wsdl.url, location), filename).then(
                                    (xsd: { url: string; body: string }) => {
                                        return this.save(filename, xsd.body);
                                    },
                                ),
                            );
                        }
                    });
                });
                return Promise.all(locations);
            })
            .catch(err => {
                console.warn(err);
            });
    };

    public download = (downloadUrl: string, filename: string): Promise<Wsdl> => {
        return new Promise((resolve, reject) => {
            fs.exists(filename, (exists: boolean) => {
                if (exists) {
                    fs.readFile(filename, "utf8", (err, data) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve({ url: downloadUrl, body: data });
                        }
                    });
                } else {
                    request(downloadUrl, (err, response, body) => {
                        if (err || response.statusCode !== 200) {
                            console.warn(`Error occurred while downloading from "${downloadUrl}": ${err}`);
                            reject(err);
                        } else {
                            resolve({ url: downloadUrl, body });
                        }
                    });
                }
            });
        });
    };

    public save(filename: string, body: string): Promise<any> {
        return new Promise((resolve, reject) => {
            fs.writeFile(filename, body, err => {
                if (err) {
                    console.warn("Failed to create a file: " + filename);
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }
}

const downloader = new WsdlDownloader(process.argv[3]);
downloader.execute(process.argv[2], process.argv[4]).then(() => {
    console.log("Done.");
});
