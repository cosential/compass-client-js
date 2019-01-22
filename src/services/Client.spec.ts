import 'jasmine';
import { Client } from './Client';
import { User } from "../model/User";
import { TestClientConfig } from './TestClientConfig';

let client: Client = null;

describe("CompassClient", () => {

    beforeEach(() => {
        client = new Client(TestClientConfig);
    });

    it("Can connect to compass and read a user", async () => {

        let res = await client.get<User[]>('/user');
        expect(res.Success).toBeTruthy(res.Message);
    });

    it("Can be reconfigured", async () => {
        
        client.reconfigure({"Username": TestClientConfig.Username + 'FAIL'});

        let res = await client.get<User[]>('/user');
        expect(res.Success).toBeFalsy();
    });

    it("Can validate the CompassURL when reconfigured", async() => {
        try {
            client.reconfigure({"CompassURL": "This is not a valid URL"});
            fail("Call to reconfigure should have failed and didn't");
        } catch (e) {
            expect(e.Message).toBeTruthy;
        }
    });

    it("Can validate the ApiKey when reconfigured", async() => {
        try {
            client.reconfigure({"ApiKey": "This is not a valid ApiKey"});
            fail("Call to reconfigure should have failed and didn't");
        } catch (e) {
            expect(e.Message).toBeTruthy;
        }
    });
});