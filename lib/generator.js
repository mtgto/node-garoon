"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const strong_soap_1 = require("strong-soap");
const wsdlUrl = process.env["URL"];
if (!wsdlUrl) {
    console.warn("Usage: URL=<WSDL URL or Path> node generator.js");
    process.exit(1);
}
strong_soap_1.soap.WSDL.open(wsdlUrl, (err, wsdl) => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdG9yLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy91c2VyL3dvcmsvanMvbm9kZS1nYXJvb24vbGliLyIsInNvdXJjZXMiOlsiZ2VuZXJhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQWlDO0FBRWpDLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbkMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ1gsT0FBTyxDQUFDLElBQUksQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO0lBQ2hFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEIsQ0FBQztBQUVELGtCQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFRLEVBQUUsSUFBZTtJQUM5QyxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3JDLDBHQUEwRztJQUMxRyx3R0FBd0c7SUFDeEcsd0NBQXdDO0lBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFDeEMsQ0FBQyxDQUFDLENBQUM7QUFDSCxrRUFBa0U7QUFDbEUsMENBQTBDO0FBQzFDLDBDQUEwQztBQUMxQyxpREFBaUQ7QUFDakQsMENBQTBDO0FBQzFDLDhDQUE4QztBQUM5QyxnREFBZ0Q7QUFDaEQseURBQXlEO0FBQ3pELHFGQUFxRjtBQUNyRixrRUFBa0U7QUFDbEUsbUVBQW1FO0FBQ25FLHdFQUF3RTtBQUN4RSx1REFBdUQ7QUFDdkQsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWixRQUFRO0FBQ1IsK0NBQStDO0FBQy9DLHlDQUF5QztBQUN6QyxNQUFNIn0=