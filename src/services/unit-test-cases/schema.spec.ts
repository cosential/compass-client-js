import 'jasmine';
import { ResponseData } from '../..';
import { ClientConfig } from '../../service-models/client-config';
import { Client } from '../client';
import { TestClientConfig as c } from '../test-client-config';
import { Schema } from './../../compass-models/schema';

describe("SchemaClient", () => {

  let client: Client = new Client(new ClientConfig(c.firmId, c.username, c.password, c.apiKey, c.compassUrl));

  beforeEach(async () => {
    client.config.firmId = c.firmId;
    client.config.username = c.username;
    client.config.password = c.password;
    client.config.apiKey = c.apiKey;
    client.config.compassUrl = c.compassUrl;

    jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;
  });

  it("Can read schema", async () => {
    let res: ResponseData < Schema[] > = await client.get < Schema[] > ('/contacts/schema');
    expect(res.success).toBeTruthy(res.message);
  });

  it("Cannot read call logs for incorrect url", async () => {
    let mistypedUrls: string[] = ['/schema', '/contacts/shcema'];
    mistypedUrls.forEach(async (index) => {
      let res: ResponseData < Schema[] > = await client.get < Schema[] > (index);
      expect(res.success).toBeFalsy(res.message);
    });
  });
});
