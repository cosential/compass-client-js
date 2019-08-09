import { Lead } from './../../../compass-models/lead/lead';
import 'jasmine';
import { ResponseData } from '../../..';
import { ClientConfig } from '../../../service-models/client-config';
import { Client } from '../../client';
import { TestClientConfig as c } from '../../test-client-config';

describe("LeadClient", () => {

  let client: Client = new Client(new ClientConfig(c.firmId, c.username, c.password, c.apiKey, c.compassUrl));
  let aValidLeadId: number;

  beforeEach(async () => {
    client.config.firmId = c.firmId;
    client.config.username = c.username;
    client.config.password = c.password;
    client.config.apiKey = c.apiKey;
    client.config.compassUrl = c.compassUrl;

    jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;

    let res: ResponseData < Lead[] > = await client.get < Lead[] > ('/leads');
    if (res.success) aValidLeadId = res.result[0].LeadId;
  });

  it("Can read leads", async () => {
    let res: ResponseData < Lead[] > = await client.get < Lead[] > ('/leads');
    expect(res.success).toBeTruthy(res.message);
  });

  it("Can read leads for incorrect url", async () => {
    let mistypedUrls: string[] = ['/lead', '/leadss', '/leasd'];
    mistypedUrls.forEach(async (index) => {
      let res: ResponseData < Lead[] > = await client.get < Lead[] > (index);
      expect(res.success).toBeFalsy(res.message);
    });
  });

  it("Can read a lead", async () => {
    let url = '/leads/' + aValidLeadId;
    let res: ResponseData < Lead > = await client.get < Lead > (url);
    expect(res.success).toBeTruthy(res.message);
  });

  it("Can read a lead for invalid id", async () => {
    let url: string = '/leads/5555444';
    let res: ResponseData < Lead > = await client.get < Lead > (url);
    expect(res.result).toBeNull(res.message);
  });

  it("Can add lead/s with valid data", async () => {
    let url = '/leads/' + aValidLeadId;
    let resGet: ResponseData < Lead > = await client.get < Lead > (url);

    resGet.result.Name = 'My test lead';
    let exLead: Lead[] = [resGet.result];

    let resPost: ResponseData < Lead[] > = await client.post < Lead[] > ('/leads', exLead);
    expect(resPost.success).toBeTruthy(resPost.message);
  });

  it("Can add lead/s with invalid data", async () => {
    let url = '/leads/' + aValidLeadId;
    let resGet: ResponseData < Lead > = await client.get < Lead > (url);

    //not providing a mandatory field
    resGet.result.Name = null;
    resGet.result.Description = 'This lead is associated to a test firm';
    let exLead: Lead[] = [resGet.result];

    let resPost: ResponseData < Lead[] > = await client.post < Lead[] > ('/leads', exLead);
    expect(resPost.success).toBeFalsy(resPost.message);
  });

  it("Can update lead with valid data", async () => {
    let urlGet = '/leads/' + aValidLeadId;
    let resGet: ResponseData < Lead > = await client.get < Lead > (urlGet);

    resGet.result.Description = "This lead has some sample description";
    resGet.result.Email = 'testlead@cosential.com';

    let exLead: Lead = resGet.result;
    let urlPut = '/leads/' + resGet.result.LeadId;

    let resPut: ResponseData < Lead > = await client.put < Lead > (urlPut, exLead);
    expect(resPut.success).toBeTruthy(resPut.message);
  });

  it("Can delete a lead with valid id", async () => {
    let url = '/leads/' + aValidLeadId;
    let res: ResponseData < Lead > = await client.delete < Lead > (url);
    expect(res.success).toBeTruthy(res.message);
  });

  it("Can delete a lead with invalid id", async () => {
    let url: string = '/leads/5555999';
    let res: ResponseData < Lead > = await client.delete < Lead > (url);
    expect(res.success).toBeFalsy(res.message);
  });

  it("Search lead/s using valid params", async () => {
    let searchQuery = 'Name:Some test lead OR Descripion:Lead description';
    let res: ResponseData < Lead[] > = await client.search < Lead[] > ('/leads', searchQuery);
    expect(res.success).toBeTruthy(res.message);
  });

  it("Search lead/s for invalid params", async () => {
    let searchQuery = 'test:abc';
    let res: ResponseData < Lead[] > = await client.search < Lead[] > ('/leads', searchQuery);
    //return all or none on empty or invalid params
    expect(res.success).toBeTruthy(res.message);
  });
});
