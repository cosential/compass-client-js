import 'jasmine';
import { Contact } from '../../compass-models/contact/contact';
import { Studio } from '../../compass-models/studio';
import { ResponseData } from '../../interfaces/response-data';
import { ClientConfig } from '../../service-models/client-config';
import { Client } from '../client';
import { TestClientConfig as c } from '../test-client-config';
import { Company } from './../../../lib-esm/compass-models/company/company.d';
import { Lead } from './../../compass-models/lead/lead';

describe("StudioClient", () => {

  let client: Client = new Client(new ClientConfig(c.firmId, c.username, c.password, c.apiKey, c.compassUrl));
  let aValidContactStudioId: number;
  let aValidContactId: number;
  let aValidCompanyStudioId: number;
  let aValidCompanyId: number;
  let aValidLeadStudioId: number;
  let aValidLeadId: number;

  beforeEach(async () => {
    client.config.firmId = c.firmId;
    client.config.username = c.username;
    client.config.password = c.password;
    client.config.apiKey = c.apiKey;
    client.config.compassUrl = c.compassUrl;

    let res: ResponseData < Studio[] > = await client.get < Studio[] > ('/contacts/studios');
    if (res.success) aValidContactStudioId = res.result[0].StudioId;
    let contactRes: ResponseData < Contact[] > = await client.get < Contact[] > ('/contacts');
    if (contactRes.success) aValidContactId = contactRes.result[0].ContactId;
    let companyStudioRes: ResponseData < Studio[] > = await client.get < Studio[] > ('/companies/studios');
    if (companyStudioRes.success) aValidCompanyStudioId = companyStudioRes.result[0].StudioId;
    let companyRes: ResponseData < Company[] > = await client.get < Company[] > ('/companies');
    if (companyRes.success) aValidCompanyId = companyRes.result[0].CompanyId;
    let leadStudioRes: ResponseData < Studio[] > = await client.get < Studio[] > ('/leads/studios');
    if (leadStudioRes.success) aValidLeadStudioId = leadStudioRes.result[0].StudioId;
    let leadRes: ResponseData < Lead[] > = await client.get < Lead[] > ('/leads');
    if (leadRes.success) aValidLeadId = leadRes.result[0].LeadId;
  });

  it('Can read contact studios', async () => {
    let res: ResponseData < Studio[] > = await client.get < Studio[] > ('/contacts/studios');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can read a contacts studios', async () => {
    let res: ResponseData < Studio[] > = await client.get < Studio[] > ('/contacts/' + aValidContactId + '/studios');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can add a studio to a contact', async () => {
    const payload = [{ StudioId: aValidContactStudioId }];
    let res: ResponseData < Studio[] > = await client.post < Studio[] > ('/contacts/' + aValidContactId + '/studios', < Studio[] > payload);
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can read company studios', async () => {
    let res: ResponseData < Studio[] > = await client.get < Studio[] > ('/companies/studios');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can read a companys studios', async () => {
    let res: ResponseData < Studio[] > = await client.get < Studio[] > ('/companies/' + aValidCompanyId + '/studios');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can add a studio to a company', async () => {
    const payload = [{ StudioId: aValidCompanyStudioId }];
    let res: ResponseData < Studio[] > = await client.post < Studio[] > ('/companies/' + aValidCompanyId + '/studios', < Studio[] > payload);
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can read lead studios', async () => {
    let res: ResponseData < Studio[] > = await client.get < Studio[] > ('/leads/studios');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can read a leads studios', async () => {
    let res: ResponseData < Studio[] > = await client.get < Studio[] > ('/leads/' + aValidLeadId + '/studios');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can add a studio to a lead', async () => {
    const payload = [{ StudioId: aValidLeadStudioId }];
    let res: ResponseData < Studio[] > = await client.post < Studio[] > ('/leads/' + aValidLeadId + '/studios', < Studio[] > payload);
    expect(res.success).toBeTruthy(res.message);
  });

});
