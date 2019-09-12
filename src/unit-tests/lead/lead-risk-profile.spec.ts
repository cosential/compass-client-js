import 'jasmine';
import { Lead } from '../../compass-models/lead/lead';
import { LeadRiskProfile } from '../../compass-models/lead/lead-risk-profile';
import { ResponseData } from '../../interfaces/response-data';
import { ClientConfig } from '../../service-models/client-config';
import { Client } from '../../services/client';
import { TestClientConfig as c } from '../test-client-config';


describe("LeadRiskProfileClient", () => {

  let client: Client = new Client(new ClientConfig(c.firmId, c.username, c.password, c.apiKey, c.compassUrl));
  let aValidRiskProfileId: number;
  let aValidLeadId: number;

  beforeEach(async () => {
    client.config.firmId = c.firmId;
    client.config.username = c.username;
    client.config.password = c.password;
    client.config.apiKey = c.apiKey;
    client.config.compassUrl = c.compassUrl;

    let riskProfileRes: ResponseData < LeadRiskProfile[] > = await client.get < LeadRiskProfile[] > ('/leads/riskprofile');
    if (riskProfileRes.success) aValidRiskProfileId = riskProfileRes.result[0].Id;
    let leadRes: ResponseData < Lead[] > = await client.get < Lead[] > ('/leads');
    if (leadRes.success) aValidLeadId = leadRes.result[0].LeadId;
  });

  it('Can read lead riskprofiles', async () => {
    let res: ResponseData < LeadRiskProfile[] > = await client.get < LeadRiskProfile[] > ('/leads/riskprofile');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can read a lead riskprofiles', async () => {
    let res: ResponseData < LeadRiskProfile[] > = await client.get < LeadRiskProfile[] > ('/leads/' + aValidLeadId + '/riskprofile');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can add a lead riskprofile to a lead', async () => {
    const payload = [{ Id: aValidRiskProfileId }];
    let res: ResponseData < LeadRiskProfile[] > = await client.post < LeadRiskProfile[] > ('/leads/' + aValidLeadId + '/riskprofile', < LeadRiskProfile[] > payload);
    expect(res.success).toBeTruthy(res.message);
  });
});
