import 'jasmine';
import { ResponseData } from '../../../interfaces/response-data';
import { ClientConfig } from '../../../service-models/client-config';
import { Client } from '../../client';
import { TestClientConfig as c } from '../../test-client-config';
import { Lead } from './../../../compass-models/lead/lead';
import { LeadScore } from '../../../compass-models/lead/lead-score';


describe("LeadScoreClient", () => {

  let client: Client = new Client(new ClientConfig(c.firmId, c.username, c.password, c.apiKey, c.compassUrl));
  let aValidScoreId: number;
  let aValidLeadId: number;

  beforeEach(async () => {
    client.config.firmId = c.firmId;
    client.config.username = c.username;
    client.config.password = c.password;
    client.config.apiKey = c.apiKey;
    client.config.compassUrl = c.compassUrl;

    let scoreRes: ResponseData < LeadScore[] > = await client.get < LeadScore[] > ('/leads/score');
    if (scoreRes.success) aValidScoreId = scoreRes.result[0].Id;
    let leadRes: ResponseData < Lead[] > = await client.get < Lead[] > ('/leads');
    if (leadRes.success) aValidLeadId = leadRes.result[0].LeadId;
  });

  it('Can read lead scores', async () => {
    let res: ResponseData < LeadScore[] > = await client.get < LeadScore[] > ('/leads/score');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can read a lead scores', async () => {
    let res: ResponseData < LeadScore[] > = await client.get < LeadScore[] > ('/leads/' + aValidLeadId + '/score');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can add a lead score to a lead', async () => {
    const payload = [{ Id: aValidScoreId }];
    let res: ResponseData < LeadScore[] > = await client.post < LeadScore[] > ('/leads/' + aValidLeadId + '/score', < LeadScore[] > payload);
    expect(res.success).toBeTruthy(res.message);
  });
});
