import 'jasmine';
import { ResponseData } from '../../../interfaces/response-data';
import { ClientConfig } from '../../../service-models/client-config';
import { Client } from '../../client';
import { TestClientConfig as c } from '../../test-client-config';
import { Lead } from './../../../compass-models/lead/lead';
import { LeadRecordSource } from './../../../compass-models/lead/lead-record-source';


describe("LeadRecordSourceClient", () => {

  let client: Client = new Client(new ClientConfig(c.firmId, c.username, c.password, c.apiKey, c.compassUrl));
  let aValidRecordSourceId: number;
  let aValidLeadId: number;

  beforeEach(async () => {
    client.config.firmId = c.firmId;
    client.config.username = c.username;
    client.config.password = c.password;
    client.config.apiKey = c.apiKey;
    client.config.compassUrl = c.compassUrl;

    let recordSourceRes: ResponseData < LeadRecordSource[] > = await client.get < LeadRecordSource[] > ('/leads/recordsource');
    if (recordSourceRes.success) aValidRecordSourceId = recordSourceRes.result[0].Id;
    let leadRes: ResponseData < Lead[] > = await client.get < Lead[] > ('/leads');
    if (leadRes.success) aValidLeadId = leadRes.result[0].LeadId;
  });

  it('Can read lead record sources', async () => {
    let res: ResponseData < LeadRecordSource[] > = await client.get < LeadRecordSource[] > ('/leads/recordsource');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can read a lead record sources', async () => {
    let res: ResponseData < LeadRecordSource[] > = await client.get < LeadRecordSource[] > ('/leads/' + aValidLeadId + '/recordsource');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can add a lead record source to a lead', async () => {
    const payload = [{ Id: aValidRecordSourceId }];
    let res: ResponseData < LeadRecordSource[] > = await client.post < LeadRecordSource[] > ('/leads/' + aValidLeadId + '/recordsource', < LeadRecordSource[] > payload);
    expect(res.success).toBeTruthy(res.message);
  });
});
