import 'jasmine';
import { Lead } from '../../compass-models/lead/lead';
import { LeadType } from '../../compass-models/lead/lead-type';
import { ResponseData } from '../../interfaces/response-data';
import { ClientConfig } from '../../service-models/client-config';
import { Client } from '../../services/client';
import { TestClientConfig as c } from '../test-client-config';


describe("LeadTypeClient", () => {

  let client: Client = new Client(new ClientConfig(c.firmId, c.username, c.password, c.apiKey, c.compassUrl));
  let aValidTypeId: number;
  let aValidLeadId: number;

  beforeEach(async () => {
    client.config.firmId = c.firmId;
    client.config.username = c.username;
    client.config.password = c.password;
    client.config.apiKey = c.apiKey;
    client.config.compassUrl = c.compassUrl;

    let typeRes: ResponseData < LeadType[] > = await client.get < LeadType[] > ('/leads/leadtypes');
    if (typeRes.success) aValidTypeId = typeRes.result[0].Id;
    let leadRes: ResponseData < Lead[] > = await client.get < Lead[] > ('/leads');
    if (leadRes.success) aValidLeadId = leadRes.result[0].LeadId;
  });

  it('Can read lead types', async () => {
    let res: ResponseData < LeadType[] > = await client.get < LeadType[] > ('/leads/leadtypes');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can read a lead types', async () => {
    let res: ResponseData < LeadType[] > = await client.get < LeadType[] > ('/leads/' + aValidLeadId + '/leadtypes');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can add a lead type to a lead', async () => {
    const payload = [{ Id: aValidTypeId }];
    let res: ResponseData < LeadType[] > = await client.post < LeadType[] > ('/leads/' + aValidLeadId + '/leadtypes', < LeadType[] > payload);
    expect(res.success).toBeTruthy(res.message);
  });
});
