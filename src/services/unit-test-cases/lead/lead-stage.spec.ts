import 'jasmine';
import { ResponseData } from '../../../interfaces/response-data';
import { ClientConfig } from '../../../service-models/client-config';
import { Client } from '../../client';
import { TestClientConfig as c } from '../../test-client-config';
import { Lead } from './../../../compass-models/lead/lead';
import { LeadStage } from '../../../compass-models/lead/lead-stage';


describe("LeadStageClient", () => {

  let client: Client = new Client(new ClientConfig(c.firmId, c.username, c.password, c.apiKey, c.compassUrl));
  let aValidStageId: number;
  let aValidLeadId: number;

  beforeEach(async () => {
    client.config.firmId = c.firmId;
    client.config.username = c.username;
    client.config.password = c.password;
    client.config.apiKey = c.apiKey;
    client.config.compassUrl = c.compassUrl;

    let stageRes: ResponseData < LeadStage[] > = await client.get < LeadStage[] > ('/leads/stage');
    if (stageRes.success) aValidStageId = stageRes.result[0].Id;
    let leadRes: ResponseData < Lead[] > = await client.get < Lead[] > ('/leads');
    if (leadRes.success) aValidLeadId = leadRes.result[0].LeadId;
  });

  it('Can read lead stages', async () => {
    let res: ResponseData < LeadStage[] > = await client.get < LeadStage[] > ('/leads/stage');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can read a lead stages', async () => {
    let res: ResponseData < LeadStage[] > = await client.get < LeadStage[] > ('/leads/' + aValidLeadId + '/stage');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can add a lead stage to a lead', async () => {
    const payload = [{ Id: aValidStageId }];
    let res: ResponseData < LeadStage[] > = await client.post < LeadStage[] > ('/leads/' + aValidLeadId + '/stage', < LeadStage[] > payload);
    expect(res.success).toBeTruthy(res.message);
  });
});
