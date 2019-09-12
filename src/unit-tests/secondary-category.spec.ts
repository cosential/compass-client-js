import 'jasmine';
import { Lead } from '../compass-models/lead/lead';
import { SecondaryCategory } from '../compass-models/secondary-category';
import { ResponseData } from '../interfaces/response-data';
import { ClientConfig } from '../service-models/client-config';
import { Client } from '../services/client';
import { TestClientConfig as c } from './test-client-config';


describe("SecondaryCategoryClient", () => {

  let client: Client = new Client(new ClientConfig(c.firmId, c.username, c.password, c.apiKey, c.compassUrl));
  let aValidSecondaryCategoryId: number;
  let aValidLeadId: number;

  beforeEach(async () => {
    client.config.firmId = c.firmId;
    client.config.username = c.username;
    client.config.password = c.password;
    client.config.apiKey = c.apiKey;
    client.config.compassUrl = c.compassUrl;

    let contractTypeRes: ResponseData < SecondaryCategory[] > = await client.get < SecondaryCategory[] > ('/leads/secondarycategories');
    if (contractTypeRes.success) aValidSecondaryCategoryId = contractTypeRes.result[0].SecondaryCategoryId;
    let leadRes: ResponseData < Lead[] > = await client.get < Lead[] > ('/leads');
    if (leadRes.success) aValidLeadId = leadRes.result[0].LeadId;
  });

  it('Can read lead secondarycategories', async () => {
    let res: ResponseData < SecondaryCategory[] > = await client.get < SecondaryCategory[] > ('/leads/secondarycategories');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can read a lead secondarycategory', async () => {
    let res: ResponseData < SecondaryCategory[] > = await client.get < SecondaryCategory[] > ('/leads/' + aValidLeadId + '/secondarycategories');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can add a lead secondarycategory to a lead', async () => {
    const payload = [{ SecondaryCategoryId: aValidSecondaryCategoryId }];
    let res: ResponseData < SecondaryCategory[] > = await client.post < SecondaryCategory[] > ('/leads/' + aValidLeadId + '/secondarycategories', < SecondaryCategory[] > payload);
    expect(res.success).toBeTruthy(res.message);
  });
});
