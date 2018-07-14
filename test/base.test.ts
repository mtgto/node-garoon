import test from "ava";
import { Client } from "../lib";
// tslint:disable-next-line:no-var-requires
const testAuth = require("../testAuth.json");

const client = new Client({ url: testAuth.url });

// test("ユーザーの更新情報を取得する", t => {
//     client.authenticate(testAuth.username, testAuth.password);
//     return client.BaseGetUserVersions({}).then(response => {
//         console.log(response.user_item);
//         t.truthy(response.user_item);
//     });
// });

test("ユーザーIDからユーザー情報を取得する", t => {
    client.authenticate(testAuth.username, testAuth.password);
    return client.BaseGetUsersById({ user_id: "1" }).then(response => {
        // tslint:disable-next-line:no-console
        console.log(response.user);
        t.truthy(response.user);
    });
});
