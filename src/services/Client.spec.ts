import 'jasmine';
import { Client } from './client';
import { User } from "../compassModels/user";
import { TestClientConfig } from './testClientConfig';
import { IGetResponse } from '..';

describe("CompassClient", () => {

    let client: Client = new Client(TestClientConfig);

    beforeEach(() => {
        
    });

    it("Can connect to compass and read a user", async () => {
        let res: IGetResponse<User[]> = await client.get<User[]>('/user');
        expect(res.success).toBeTruthy(res.message);
    });

    it("Can be reconfigured", async () => {
        client.config.username = TestClientConfig.username + 'FAIL';
        let res: IGetResponse<User[]> = await client.get<User[]>('/user');
        expect(res.success).toBeFalsy();
    });

    it("Can validate the CompassURL when reconfigured", async() => {
        try {
            client.config.compassUrl = "This is not a valid URL";
            fail("Call to reconfigure should have failed and didn't");
        } catch (e) {
            expect(e.message).toBeTruthy;
        }
    });

    it("Can validate the ApiKey when reconfigured", async() => {
        try {
            client.config.apiKey = "This is not a valid apiKey";
            fail("Call to reconfigure should have failed and didn't");
        } catch (e) {
            expect(e.message).toBeTruthy;
        }
    });
});