import test from "ava";
import { Client } from "../lib";
// tslint:disable-next-line:no-var-requires
const testAuth = require("../testAuth.json");

const client = new Client({ url: testAuth.url });

test("スケジュールを検索する", t => {
    client.authenticate(testAuth.username, testAuth.password);
    return client
        .ScheduleSearchEvents({
            attributes: {
                text: "会議",
                title_search: true,
                customer_search: false,
                memo_search: false,
                follow_search: false,
                all_repeat_events: false,
            },
        })
        .then(response => {
            t.truthy(response.schedule_event);
        })
        .catch(reason => {
            // tslint:disable-next-line:no-console
            console.log(reason);
            t.fail();
        });
});
