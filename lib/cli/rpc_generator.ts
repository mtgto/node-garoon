#!/usr/bin/env node

// NOTE: This script generate RPC definitions from Cybozu Garoon WSDL.
// It doesn't support for other WSDLs.

import * as fs from "fs";
import * as mustache from "mustache";
import { soap } from "strong-soap";

const wsdlUrl = process.env.URL;
if (!wsdlUrl) {
    // tslint:disable-next-line:no-console
    console.error("Usage: URL=<WSDL URL or Path> node generator.js");
    process.exit(1);
} else {
    soap.WSDL.open(wsdlUrl, (err: any, wsdl: soap.WSDL) => {
        const services = wsdl.definitions.services;
        const methods: Array<{ service: string; port: string; operations: string[] }> = [];
        for (const serviceName of Object.keys(services)) {
            const service = services[serviceName];
            for (const portName of Object.keys(service.ports)) {
                const binding = service.ports[portName].binding;
                const operations: string[] = [];
                for (const operationName of Object.keys(binding.operations)) {
                    const operation = binding.operations[operationName];
                    const methodName = operation.$name;
                    operations.push(methodName);
                }
                methods.push({ service: serviceName, port: portName, operations });
            }
        }
        const methodsTemplate: string = fs.readFileSync(__dirname + "/../../templates/rpc.ts.mustache", "utf8");
        fs.writeFileSync(__dirname + "/../rpc.ts", mustache.render(methodsTemplate, { services: methods }));
    });
}
