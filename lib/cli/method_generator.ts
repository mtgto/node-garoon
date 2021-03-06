#!/usr/bin/env node
/* tslint:disable:comment-format */

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
        const methods: Array<{
            service: string;
            port: string;
            method: string;
            inputType: string;
            outputType: string;
        }> = [];
        for (const serviceName of Object.keys(services)) {
            const service = services[serviceName];
            for (const portName of Object.keys(service.ports)) {
                const binding = service.ports[portName].binding;
                for (const operationName of Object.keys(binding.operations)) {
                    const operation = binding.operations[operationName];
                    const namespace = operation.targetNamespace.split("/")[3];
                    const methodName = operation.$name;
                    //if (methodName === "ScheduleGetEventVersions") console.log(operation.input.body.parts.parameters);
                    // ScheduleGetEventVersions の operation.input.body.parts.parameters.type が null になっている
                    //const inputType = operation.input.body.parts.parameters.type.$name;
                    const inputType =
                        namespace + "." + operation.input.body.parts.parameters.$type.replace(/^\w+:/, "");
                    //const outputType = operation.output.body.parts.returns.type.$name;
                    const outputType = operation.output.body.parts.returns
                        ? namespace + "." + operation.output.body.parts.returns.$type.replace(/^\w+:/, "")
                        : "void";
                    methods.push({
                        service: serviceName,
                        port: portName,
                        method: operationName,
                        inputType,
                        outputType,
                    });
                }
            }
        }
        const methodsTemplate: string = fs.readFileSync(__dirname + "/../../templates/methods.ts.mustache", "utf8");
        fs.writeFileSync(__dirname + "/../methods.ts", mustache.render(methodsTemplate, { methods }));
    });
}
