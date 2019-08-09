import 'jasmine';
import { ResponseData } from '../../../interfaces/response-data';
import { ClientConfig } from '../../../service-models/client-config';
import { Client } from '../../client';
import { TestClientConfig as c } from '../../test-client-config';
import { Lead } from './../../../compass-models/lead/lead';
import { LeadServiceType } from '../../../compass-models/lead/lead-service-type';


describe("LeadServiceTypeClient", () => {

  let client: Client = new Client(new ClientConfig(c.firmId, c.username, c.password, c.apiKey, c.compassUrl));
  let aValidServiceTypeId: number;
  let aValidLeadId: number;

  beforeEach(async () => {
    client.config.firmId = c.firmId;
    client.config.username = c.username;
    client.config.password = c.password;
    client.config.apiKey = c.apiKey;
    client.config.compassUrl = c.compassUrl;

    let serviceTypeRes: ResponseData < LeadServiceType[] > = await client.get < LeadServiceType[] > ('/leads/servicetypes');
    if (serviceTypeRes.success) aValidServiceTypeId = serviceTypeRes.result[0].ServiceTypeId;
    let leadRes: ResponseData < Lead[] > = await client.get < Lead[] > ('/leads');
    if (leadRes.success) aValidLeadId = leadRes.result[0].LeadId;
  });

  it('Can read lead servicetypes', async () => {
    let res: ResponseData < LeadServiceType[] > = await client.get < LeadServiceType[] > ('/leads/servicetypes');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can read a lead servicetypes', async () => {
    let res: ResponseData < LeadServiceType[] > = await client.get < LeadServiceType[] > ('/leads/' + aValidLeadId + '/servicetypes');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can add a lead servicetype to a lead', async () => {
    const payload = [{ ServiceTypeId: aValidServiceTypeId }];
    let res: ResponseData < LeadServiceType[] > = await client.post < LeadServiceType[] > ('/leads/' + aValidLeadId + '/servicetypes', < LeadServiceType[] > payload);
    expect(res.success).toBeTruthy(res.message);
  });
});
