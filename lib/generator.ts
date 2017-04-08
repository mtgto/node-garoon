import {soap} from "strong-soap";

const wsdlUrl = process.env["URL"];
if (!wsdlUrl) {
    console.warn("Usage: URL=<WSDL URL or Path> node generator.js");
    process.exit(1);
}

soap.WSDL.open(wsdlUrl, (err: any, wsdl: soap.WSDL) => {
    const definitions = wsdl.definitions;
    //console.log(Object.keys(definitions.bindings.services.ScheduleBinding.operations.ScheduleSearchEvents));
    //console.log((definitions.portTypes.SchedulePort.operations.ScheduleSearchEvents.input.message.parts));
    //console.log(Object.keys(definitions));
    console.log(definitions.toString());
});
// soap.createClient(wsdlUrl, (err: any, client: soap.Client) => {
//     const services = client.describe();
//     for (let serviceName in services) {
//         const service = services[serviceName];
//         for (let portName in service) {
//             const port = service[portName];
//             for (let operationName in port) {
//                 const operation = port[operationName];
//                 console.log(serviceName + ", " + portName + ", " + operationName);
//                 //console.log(JSON.stringify(operation.input));
//                 //console.log(JSON.stringify(operation.output));
//                 console.log(JSON.stringify(operation.inputEnvelope));
//                 console.log(Object.keys(operation));
//             }
//         }
//     }
//     //console.log(typeof client.describe());
//     ///console.log(client.describe());
// });
