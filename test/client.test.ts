import test from "ava";
import * as cookie from "cookie";
import {Client, Option} from "../lib";
const testAuth = require("../testAuth.json");

const client = new Client({url: testAuth.url} as Option);

test("ログイン", t => {
    return client.UtilLogin({login_name: testAuth.username, password: testAuth.password}).then(response => {
        t.truthy(response.cookie);
    });
});

test("ログインセッションでログインユーザーID取得", t => {
    return client.UtilLogin({login_name: testAuth.username, password: testAuth.password}).then(response => {
        if (response.cookie) {
            const cookies = cookie.parse(response.cookie);
            for (const headerName of Object.keys(cookies)) {
                if (headerName === "CBSESSID" || headerName === "JSESSIONID") {
                    client.setSession(headerName, cookies[headerName]);
                }
            }
        }
        return client.UtilGetLoginUserId({});
    }).then(response => {
        t.truthy(response.user_id);
    });
});

// test("ログインユーザーID取得", t => {
//     client.authenticate(testAuth.username, testAuth.password);
//     return client.UtilGetLoginUserId({}).then(response => {
//         t.truthy(response.user_id);
//     });
// });
