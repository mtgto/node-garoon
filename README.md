Node-Garoon
====

node library to access Garoon SOAP API.

## Installation

via npm:

```sh
$ npm install garoon
```

## Example

```javascript
const GaroonClient = require("garoon").Client;
const client = new GaroonClient({url: "http://example.com/grn.cgi?WSDL"});
// Use WSSecurity (Send username/password for each RPC method)
client.authenticate("username", "password");

client.UtilGetLoginUserId({}).then(response => {
    console.log("user id is " + response.user_id);
});
```

## Test
Before run test, create auth file.

```sh
$ > testAuth.json
{
    "url": "http://example.com/grn.cgi?WSDL",
    "username": "foo",
    "password": "bar"
}
```

Then, run all tests

```sh
$ yarn test
```

## License
MIT
