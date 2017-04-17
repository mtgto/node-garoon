import * as url from "url";
import * as request from "request";
import * as fs from "fs";
import * as xmldom from "xmldom";
import * as path from "path";

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

    execute(outputDirectory: string, baseFileName: string) {
        const self = this;
        const baseFilePath = path.join(outputDirectory, baseFileName);
        return new Promise((resolve, reject) => {
            fs.exists(outputDirectory, (exists: boolean) => {
                if (exists) {
                    resolve();
                } else {
                    fs.mkdir(outputDirectory, (err) => {
                        if (err) {
                            console.warn("Failed to create a directory: " + outputDirectory);
                            reject(err);
                        } else {
                            resolve();
                        }
                    });
                }
            });
        }).then(() => {
            return this.download(url.format(this.wsdlUrl), baseFilePath);
        }).then((wsdl: {url: string, body: string}) => {
            const doc: Document = new xmldom.DOMParser().parseFromString(wsdl.body);
            const imports: NodeListOf<Element> = doc.getElementsByTagName("wsdl:import");
            let locations: Promise<{url: string, body: string}>[] = [];
            for (let i = 0; i < imports.length; i++) {
                const wsdlImport = imports[i];
                const location = wsdlImport.getAttribute("location");
                if (location) {
                    const basename = path.basename(location);
                    wsdlImport.setAttribute("location", basename);
                    const filename = path.join(outputDirectory, basename);
                    console.log("url:" + url.resolve(wsdl.url, location));
                    locations.push(
                        self.download(url.resolve(wsdl.url, location), filename)
                            .then((wsdl: {url: string, body: string}) => {
                                let body = wsdl.body;
                                return self.save(filename, body).then(() => { return Promise.resolve(wsdl); })
                            })
                        );
                }
            }
            return self.save(baseFilePath, new xmldom.XMLSerializer().serializeToString(doc))
                .then(() => { return Promise.all(locations); });
        }).then((wsdls: {url: string, body: string}[]) => {
            let locations: Promise<{url: string, body: string}>[] = [];
            wsdls.forEach(wsdl => {
                const doc: Document = new xmldom.DOMParser().parseFromString(wsdl.body);
                const imports = doc.getElementsByTagName("xsd:import");
                for (let i = 0; i < imports.length; i++) {
                    const wsdlImport = imports[i];
                    const location = wsdlImport.getAttribute("schemaLocation");
                    if (location) {
                        const filename = path.join(outputDirectory, path.basename(location));
                        console.log("url:" + url.resolve(wsdl.url, location));
                        locations.push(
                            self.download(url.resolve(wsdl.url, location), filename)
                                .then((xsd: {url: string, body: string}) => {
                                    return self.save(filename, xsd.body);
                                }));
                    }
                }
            });
            return Promise.all(locations);
        }).catch(err => {
            console.warn(err);
        });
    }

    download(url: string, filename: string): Promise<{url: string, body: string}> {
        return new Promise((resolve, reject) => {
            fs.exists(filename, (exists: boolean) => {
                if (exists) {
                    fs.readFile(filename, "utf8", (err, data) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve({url: url, body: data});
                        }
                    });
                } else {
                    request(url, function(err, response, body) {
                        if (err || response.statusCode !== 200) {
                            console.warn("Error occurred while downloading: " + err);
                            reject(err);
                        } else {
                            resolve({url: url, body: body});
                        }
                    });
                }
            });
        });
    }

    save(filename: string, body: string): Promise<any> {
        return new Promise((resolve, reject) => {
            fs.writeFile(filename, body, (err) => {
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
downloader.execute(process.argv[2], process.argv[4])
.then(() => {
    console.log("Done.");
});
