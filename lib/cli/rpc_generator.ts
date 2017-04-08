#!/usr/bin/env node

// NOTE: This script generate RPC definitions from Cybozu Garoon WSDL.
// It doesn't support for other WSDLs.

import {soap} from "strong-soap";
import * as mustache from "mustache";
import * as fs from "fs";

const wsdlUrl = process.env["URL"];
if (!wsdlUrl) {
    console.warn("Usage: URL=<WSDL URL or Path> node generator.js");
    process.exit(1);
}

soap.WSDL.open(wsdlUrl, (err: any, wsdl: soap.WSDL) => {
    const services = wsdl.definitions.services;
    let methods: {service: string, port: string, operations: string[]}[] = [];
    for (const serviceName of Object.keys(services)) {
        const service = services[serviceName];
        for (const portName of Object.keys(service.ports)) {
            const binding = service.ports[portName].binding;
            let operations: string[] = [];
            for (const operationName of Object.keys(binding.operations)) {
                const operation = binding.operations[operationName];
                const methodName = operation.$name;
                operations.push(methodName);
            }
            methods.push({service: serviceName, port: portName, operations: operations});
        }
    }
    const methodsTemplate: string = fs.readFileSync(__dirname + "/../../templates/rpc.ts.mustache", "utf8");
    fs.writeFileSync(__dirname + "/../rpc.ts", mustache.render(methodsTemplate, {services: methods}));
});
