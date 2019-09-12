import 'jasmine';
import { PrimaryCategory } from '../compass-models/primary-category';
import { ResponseData } from '../interfaces/response-data';
import { ClientConfig } from '../service-models/client-config';
import { Client } from '../services/client';
import { Lead } from './../compass-models/lead/lead';
import { TestClientConfig as c } from './test-client-config';


describe("PrimaryCategoryClient", () => {

  let client: Client = new Client(new ClientConfig(c.firmId, c.username, c.password, c.apiKey, c.compassUrl));
  let aValidPrimaryCategoryId: number;
  let aValidLeadId: number;

  beforeEach(async () => {
    client.config.firmId = c.firmId;
    client.config.username = c.username;
    client.config.password = c.password;
    client.config.apiKey = c.apiKey;
    client.config.compassUrl = c.compassUrl;

    let contractTypeRes: ResponseData < PrimaryCategory[] > = await client.get < PrimaryCategory[] > ('/leads/primarycategories');
    if (contractTypeRes.success) aValidPrimaryCategoryId = contractTypeRes.result[0].PrimaryCategoryId;
    let leadRes: ResponseData < Lead[] > = await client.get < Lead[] > ('/leads');
    if (leadRes.success) aValidLeadId = leadRes.result[0].LeadId;
  });

  it('Can read lead primarycategories', async () => {
    let res: ResponseData < PrimaryCategory[] > = await client.get < PrimaryCategory[] > ('/leads/primarycategories');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can read a lead primarycategory', async () => {
    let res: ResponseData < PrimaryCategory[] > = await client.get < PrimaryCategory[] > ('/leads/' + aValidLeadId + '/primarycategories');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can add a lead primarycategory to a lead', async () => {
    const payload = [{ PrimaryCategoryId: aValidPrimaryCategoryId }];
    let res: ResponseData < PrimaryCategory[] > = await client.post < PrimaryCategory[] > ('/leads/' + aValidLeadId + '/primarycategories', < PrimaryCategory[] > payload);
    expect(res.success).toBeTruthy(res.message);
  });
});
