import 'jasmine';
import { ResponseData } from '../../../interfaces/response-data';
import { ClientConfig } from '../../../service-models/client-config';
import { Client } from '../../client';
import { TestClientConfig as c } from '../../test-client-config';
import { Lead } from './../../../compass-models/lead/lead';
import { LeadSource } from './../../../compass-models/lead/lead-source';


describe("LeadSourceClient", () => {

  let client: Client = new Client(new ClientConfig(c.firmId, c.username, c.password, c.apiKey, c.compassUrl));
  let aValidSourceId: number;
  let aValidLeadId: number;

  beforeEach(async () => {
    client.config.firmId = c.firmId;
    client.config.username = c.username;
    client.config.password = c.password;
    client.config.apiKey = c.apiKey;
    client.config.compassUrl = c.compassUrl;

    let sourceRes: ResponseData < LeadSource[] > = await client.get < LeadSource[] > ('/leads/source');
    if (sourceRes.success) aValidSourceId = sourceRes.result[0].Id;
    let leadRes: ResponseData < Lead[] > = await client.get < Lead[] > ('/leads');
    if (leadRes.success) aValidLeadId = leadRes.result[0].LeadId;
  });

  it('Can read lead sources', async () => {
    let res: ResponseData < LeadSource[] > = await client.get < LeadSource[] > ('/leads/source');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can read a lead sources', async () => {
    let res: ResponseData < LeadSource[] > = await client.get < LeadSource[] > ('/leads/' + aValidLeadId + '/source');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can add a lead source to a lead', async () => {
    const payload = [{ Id: aValidSourceId }];
    let res: ResponseData < LeadSource[] > = await client.post < LeadSource[] > ('/leads/' + aValidLeadId + '/source', < LeadSource[] > payload);
    expect(res.success).toBeTruthy(res.message);
  });
});
