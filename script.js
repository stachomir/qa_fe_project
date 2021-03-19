import http from 'k6/http';
import { check, sleep } from 'k6';
export let options = {
    vus: 10,
    duration: '10s',
};
export default function () {
    var domain='http://test.k6.io';
    let response = http.get(domain);

    check(response, {
        'is status 200': (r) => r.status === 200,
    });

    sleep(1);
}