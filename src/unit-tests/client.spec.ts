import 'jasmine';
import { User } from '../compass-models/user';
import { UserFeature } from '../compass-models/user-feature';
import { ResponseData } from '../interfaces/response-data';
import { ClientConfig } from '../service-models/client-config';
import { Client } from '../services/client';
import { TestClientConfig as c } from './test-client-config';

describe("CompassClient", () => {

  let client: Client = new Client(new ClientConfig(c.firmId, c.username, c.password, c.apiKey, c.compassUrl));

  beforeEach(() => {
    client.config.firmId = c.firmId;
    client.config.username = c.username;
    client.config.password = c.password;
    client.config.apiKey = c.apiKey;
    client.config.compassUrl = c.compassUrl;

    jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;
  });

  it("Can connect to compass and read a user", async () => {
    let res: ResponseData < User[] > = await client.get < User[] > ('/user');
    expect(res.success).toBeTruthy(res.message);
  });

  it("Can be reconfigured", async () => {
    client.config.username = c.username + 'FAIL';
    let res: ResponseData < User[] > = await client.get < User[] > ('/user');
    expect(res.success).toBeFalsy();
  });

  it("Can validate the CompassURL when reconfigured", async () => {
    try {
      client.config.compassUrl = "This is not a valid URL";
      fail("Call to reconfigure should have failed and didn't");
    } catch (e) {
      expect(e.message).toBeTruthy;
    }
  });

  it("Can validate the ApiKey when reconfigured", async () => {
    try {
      client.config.apiKey = "This is not a valid apiKey";
      fail("Call to reconfigure should have failed and didn't");
    } catch (e) {
      expect(e.message).toBeTruthy;
    }
  });

  it("Read user features", async () => {
    let res: ResponseData < UserFeature[] > = await client.get < UserFeature[] > ('/user/features');
    expect(res.success).toBeTruthy(res.message);
  });
});
