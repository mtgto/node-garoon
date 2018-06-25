Node-Garoon
====

[![npm](https://img.shields.io/npm/v/garoon.svg)](https://www.npmjs.com/package/garoon)

node library to access Cybozu Garoon SOAP API.

## Features

- All garoon's remote procedure calls (RPC) are defined by `TypeScript`.
    - You can check inputs and outputs by type definitions.
- TypeScript 2.2 / ES2015
    - All RPCs uses `Promise` for server response.

## Installation

via npm:

```sh
$ npm install --save garoon
```

For typescript project:

```sh
$ npm install --save garoon
$ npm install --save-dev @types/node
```

## Example

### JavaScript

```javascript
const GaroonClient = require("garoon").Client;
const client = new GaroonClient({url: "http://example.com/grn.cgi?WSDL"});
// Use WSSecurity (Send username/password for each RPC method)
client.authenticate("username", "password");

client.UtilGetLoginUserId({}).then(response => {
    console.log("user id is " + response.user_id);
});
```

### TypeScript
```typescript
import {Client as GaroonClient} from "garoon";
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
    "password": "bar",
    "proxy": {
        "host": "localhost",
        "port": 8888
    }
}
```

Then, run all tests

```sh
$ yarn test
```

Or run specified tests

```sh
$ yarn test test/client.test.js
```

## License
MIT
