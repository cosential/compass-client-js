import 'jasmine';
import { ResponseData } from '../..';
import { CallLog } from '../../compass-models/call-log';
import { ClientConfig } from '../../service-models/client-config';
import { Client } from '../client';
import { TestClientConfig as c } from '../test-client-config';

describe("CallLogClient", () => {

  let client: Client = new Client(new ClientConfig(c.firmId, c.username, c.password, c.apiKey, c.compassUrl));
  let aValidCallLogId: number;

  beforeEach(async () => {
    client.config.firmId = c.firmId;
    client.config.username = c.username;
    client.config.password = c.password;
    client.config.apiKey = c.apiKey;
    client.config.compassUrl = c.compassUrl;

    jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;

    let res: ResponseData < CallLog[] > = await client.get < CallLog[] > ('/calllogs');
    if (res.success) aValidCallLogId = res.result[0].id;
  });

  it("Can read call logs", async () => {
    let res: ResponseData < CallLog[] > = await client.get < CallLog[] > ('/calllogs');
    expect(res.success).toBeTruthy(res.message);
  });

  it("Can read call logs for incorrect url", async () => {
    let mistypedUrls: string[] = ['/calllog', '/calllogss', '/callogs'];
    mistypedUrls.forEach(async (index) => {
      let res: ResponseData < CallLog[] > = await client.get < CallLog[] > (index);
      expect(res.success).toBeFalsy(res.message);
    });
  });

  it("Can read a call log", async () => {
    let url = '/calllogs/' + aValidCallLogId;
    let res: ResponseData < CallLog > = await client.get < CallLog > (url);
    expect(res.success).toBeTruthy(res.message);
  });

  it("Can read a call log for invalid id", async () => {
    let url: string = '/calllogs/5555444';
    let res: ResponseData < CallLog > = await client.get < CallLog > (url);
    expect(res.result).toBeNull(res.message);
  });

  it("Can add call log/s with valid data", async () => {
    let url = '/calllogs/' + aValidCallLogId;
    let resGet: ResponseData < CallLog > = await client.get < CallLog > (url);

    resGet.result.status = 'Completed';
    let exCallLog: CallLog[] = [resGet.result];

    let resPost: ResponseData < CallLog[] > = await client.post < CallLog[] > ('/calllogs', exCallLog);
    expect(resPost.success).toBeTruthy(resPost.message);
  });

  it("Can update call log with valid data", async () => {
    let urlGet = '/calllogs/' + aValidCallLogId;
    let resGet: ResponseData < CallLog > = await client.get < CallLog > (urlGet);

    resGet.result.subject = 'My new subject';

    let exCallLog: CallLog = resGet.result;
    let urlPut = '/calllogs/' + resGet.result.id;

    let resPut: ResponseData < CallLog > = await client.put < CallLog > (urlPut, exCallLog);
    expect(resPut.success).toBeTruthy(resPut.message);
  });

  it("Can delete a call log with valid id", async () => {
    let url = '/calllogs/' + aValidCallLogId;
    let res: ResponseData < CallLog > = await client.delete < CallLog > (url);
    expect(res.success).toBeTruthy(res.message);
  });

  it("Can delete a call log with invalid id", async () => {
    let url: string = '/calllogs/5555999';
    let res: ResponseData < CallLog > = await client.delete < CallLog > (url);
    expect(res.success).toBeFalsy(res.message);
  });

  it("Search calllog/s using valid params", async () => {
    let searchQuery = 'status:Completed';
    let res: ResponseData < CallLog[] > = await client.search < CallLog[] > ('/calllogs', searchQuery);
    expect(res.success).toBeTruthy(res.message);
  });

  it("Search call log/s for invalid params", async () => {
    let searchQuery = 'test:abc';
    let res: ResponseData < CallLog[] > = await client.search < CallLog[] > ('/calllogs', searchQuery);
    //return all or none on empty or invalid params
    expect(res.success).toBeTruthy(res.message);
  });
});
