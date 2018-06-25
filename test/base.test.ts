import test from "ava";
import * as cookie from "cookie";
import {Client, Option} from "../lib";
const testAuth = require("../testAuth.json");

const client = new Client({
    url: testAuth.url,
    proxy: testAuth.proxy
} as Option);

// test("ユーザーの更新情報を取得する", t => {
//     client.authenticate(testAuth.username, testAuth.password);
//     return client.BaseGetUserVersions({}).then(response => {
//         console.log(response.user_item);
//         t.truthy(response.user_item);
//     });
// });

test("ユーザーIDからユーザー情報を取得する", t => {
    client.authenticate(testAuth.username, testAuth.password);
    return client.BaseGetUsersById({user_id: "1"}).then(response => {
        console.log(response.user);
        t.truthy(response.user);
    });
});
