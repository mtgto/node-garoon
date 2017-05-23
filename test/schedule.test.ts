import test from "ava";
import {soap} from "strong-soap";
import {Client, Option} from "../lib";
const testAuth = require("../testAuth.json");

const client = new Client({url: testAuth.url} as Option);

test("スケジュールを検索する", t => {
    client.authenticate(testAuth.username, testAuth.password);
    return client.ScheduleSearchEvents({
        $attributes: {
            text: "MTG",
            title_search: true,
            customer_search: false,
            memo_search: false,
            follow_search: false,
            all_repeat_events: false
        }
    }).then(response => {
        t.truthy(response.schedule_event);
    });
});
