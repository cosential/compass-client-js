import 'jasmine';
import { ResponseData } from '../../../interfaces/response-data';
import { ClientConfig } from '../../../service-models/client-config';
import { Client } from '../../client';
import { TestClientConfig as c } from '../../test-client-config';
import { Lead } from './../../../compass-models/lead/lead';
import { LeadSecondaryCategory } from '../../../compass-models/lead/lead-secondary-category';


describe("LeadSecondaryCategoryClient", () => {

  let client: Client = new Client(new ClientConfig(c.firmId, c.username, c.password, c.apiKey, c.compassUrl));
  let aValidSecondaryCategoryId: number;
  let aValidLeadId: number;

  beforeEach(async () => {
    client.config.firmId = c.firmId;
    client.config.username = c.username;
    client.config.password = c.password;
    client.config.apiKey = c.apiKey;
    client.config.compassUrl = c.compassUrl;

    let contractTypeRes: ResponseData < LeadSecondaryCategory[] > = await client.get < LeadSecondaryCategory[] > ('/leads/secondarycategories');
    if (contractTypeRes.success) aValidSecondaryCategoryId = contractTypeRes.result[0].SecondaryCategoryId;
    let leadRes: ResponseData < Lead[] > = await client.get < Lead[] > ('/leads');
    if (leadRes.success) aValidLeadId = leadRes.result[0].LeadId;
  });

  it('Can read lead secondarycategories', async () => {
    let res: ResponseData < LeadSecondaryCategory[] > = await client.get < LeadSecondaryCategory[] > ('/leads/secondarycategories');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can read a lead secondarycategory', async () => {
    let res: ResponseData < LeadSecondaryCategory[] > = await client.get < LeadSecondaryCategory[] > ('/leads/' + aValidLeadId + '/secondarycategories');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can add a lead secondarycategory to a lead', async () => {
    const payload = [{ SecondaryCategoryId: aValidSecondaryCategoryId }];
    let res: ResponseData < LeadSecondaryCategory[] > = await client.post < LeadSecondaryCategory[] > ('/leads/' + aValidLeadId + '/secondarycategories', < LeadSecondaryCategory[] > payload);
    expect(res.success).toBeTruthy(res.message);
  });
});
