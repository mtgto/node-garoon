"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const strong_soap_1 = require("strong-soap");
class Client {
    constructor(options) {
        this.client = new Promise((resolve, reject) => {
            strong_soap_1.soap.createClient(options.url, (err, client) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(client);
                }
            });
        });
    }
}
exports.Client = Client;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy91c2VyL3dvcmsvanMvbm9kZS1nYXJvb24vbGliLyIsInNvdXJjZXMiOlsiY2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQWlDO0FBR2pDO0lBR0ksWUFBWSxPQUFlO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxPQUFPLENBQ3JCLENBQUMsT0FBTyxFQUFFLE1BQU07WUFDWixrQkFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBUSxFQUFFLE1BQW1CO2dCQUN6RCxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUNOLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDaEIsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDSixPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3BCLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FDSixDQUFDO0lBQ04sQ0FBQztDQUNKO0FBaEJELHdCQWdCQyJ9