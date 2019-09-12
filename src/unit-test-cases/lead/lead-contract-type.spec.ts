import 'jasmine';
import { Lead } from '../../compass-models/lead/lead';
import { LeadContractType } from '../../compass-models/lead/lead-contract-type';
import { ResponseData } from '../../interfaces/response-data';
import { ClientConfig } from '../../service-models/client-config';
import { Client } from '../../services/client';
import { TestClientConfig as c } from '../test-client-config';


describe("LeadContractTypeClient", () => {

  let client: Client = new Client(new ClientConfig(c.firmId, c.username, c.password, c.apiKey, c.compassUrl));
  let aValidContractTypeId: number;
  let aValidLeadId: number;

  beforeEach(async () => {
    client.config.firmId = c.firmId;
    client.config.username = c.username;
    client.config.password = c.password;
    client.config.apiKey = c.apiKey;
    client.config.compassUrl = c.compassUrl;

    let contractTypeRes: ResponseData < LeadContractType[] > = await client.get < LeadContractType[] > ('/leads/contracttypes');
    if (contractTypeRes.success) aValidContractTypeId = contractTypeRes.result[0].Id;
    let leadRes: ResponseData < Lead[] > = await client.get < Lead[] > ('/leads');
    if (leadRes.success) aValidLeadId = leadRes.result[0].LeadId;
  });

  it('Can read lead contracttypes', async () => {
    let res: ResponseData < LeadContractType[] > = await client.get < LeadContractType[] > ('/leads/contracttypes');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can read a lead contracttypes', async () => {
    let res: ResponseData < LeadContractType[] > = await client.get < LeadContractType[] > ('/leads/' + aValidLeadId + '/contracttypes');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can add a lead contracttype to a lead', async () => {
    const payload = [{ Id: aValidContractTypeId }];
    let res: ResponseData < LeadContractType[] > = await client.post < LeadContractType[] > ('/leads/' + aValidLeadId + '/contracttypes', < LeadContractType[] > payload);
    expect(res.success).toBeTruthy(res.message);
  });
});
