import 'jasmine';
import { Contact } from '../../compass-models/contact/contact';
import { PracticeArea } from '../../compass-models/practice-area';
import { ResponseData } from '../../interfaces/response-data';
import { ClientConfig } from '../../service-models/client-config';
import { Client } from '../client';
import { TestClientConfig as c } from '../test-client-config';
import { Company } from './../../../lib-esm/compass-models/company/company.d';
import { Lead } from './../../compass-models/lead/lead';


describe("PracticeAreaClient", () => {

  let client: Client = new Client(new ClientConfig(c.firmId, c.username, c.password, c.apiKey, c.compassUrl));
  let aValidContactPracticeAreaId: number;
  let aValidContactId: number;
  let aValidCompanyPracticeAreaId: number;
  let aValidCompanyId: number;
  let aValidLeadPracticeAreaId: number;
  let aValidLeadId: number;

  beforeEach(async () => {
    client.config.firmId = c.firmId;
    client.config.username = c.username;
    client.config.password = c.password;
    client.config.apiKey = c.apiKey;
    client.config.compassUrl = c.compassUrl;

    let contactPracticeAreaRes: ResponseData < PracticeArea[] > = await client.get < PracticeArea[] > ('/contacts/PracticeAreas');
    if (contactPracticeAreaRes.success) aValidContactPracticeAreaId = contactPracticeAreaRes.result[0].PracticeAreaId;
    let contactRes: ResponseData < Contact[] > = await client.get < Contact[] > ('/contacts');
    if (contactRes.success) aValidContactId = contactRes.result[0].ContactId;
    let companyPracticeAreaRes: ResponseData < PracticeArea[] > = await client.get < PracticeArea[] > ('/companies/offices');
    if (companyPracticeAreaRes.success) aValidCompanyPracticeAreaId = companyPracticeAreaRes.result[0].PracticeAreaId;
    let companyRes: ResponseData < Company[] > = await client.get < Company[] > ('/companies');
    if (companyRes.success) aValidCompanyId = companyRes.result[0].CompanyId;
    let leadPracticeAreaRes: ResponseData < PracticeArea[] > = await client.get < PracticeArea[] > ('/leads/practiceareas');
    if (leadPracticeAreaRes.success) aValidLeadPracticeAreaId = leadPracticeAreaRes.result[0].PracticeAreaId;
    let leadRes: ResponseData < Lead[] > = await client.get < Lead[] > ('/leads');
    if (leadRes.success) aValidLeadId = leadRes.result[0].LeadId;
  });

  it('Can read contact practice areas', async () => {
    let res: ResponseData < PracticeArea[] > = await client.get < PracticeArea[] > ('/contacts/PracticeAreas');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can read a contacts practice areas', async () => {
    let res: ResponseData < PracticeArea[] > = await client.get < PracticeArea[] > ('/contacts/' + aValidContactId + '/PracticeAreas');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can add a practice area to a contact', async () => {
    const payload = [{ PracticeAreaId: aValidContactPracticeAreaId }];
    let res: ResponseData < PracticeArea[] > = await client.post < PracticeArea[] > ('/contacts/' + aValidContactId + '/PracticeAreas', < PracticeArea[] > payload);
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can read company practice areas', async () => {
    let res: ResponseData < PracticeArea[] > = await client.get < PracticeArea[] > ('/companies/PracticeAreas');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can read a companys practice areas', async () => {
    let res: ResponseData < PracticeArea[] > = await client.get < PracticeArea[] > ('/companies/' + aValidCompanyId + '/PracticeAreas');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can add a practice area to a company', async () => {
    const payload = [{ PracticeAreaId: aValidCompanyPracticeAreaId }];
    let res: ResponseData < PracticeArea[] > = await client.post < PracticeArea[] > ('/companies/' + aValidCompanyId + '/PracticeAreas', < PracticeArea[] > payload);
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can read lead practice areas', async () => {
    let res: ResponseData < PracticeArea[] > = await client.get < PracticeArea[] > ('/leads/PracticeAreas');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can read a leads practice areas', async () => {
    let res: ResponseData < PracticeArea[] > = await client.get < PracticeArea[] > ('/leads/' + aValidLeadId + '/PracticeAreas');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can add a practice area to a lead', async () => {
    const payload = [{ PracticeAreaId: aValidLeadPracticeAreaId }];
    let res: ResponseData < PracticeArea[] > = await client.post < PracticeArea[] > ('/leads/' + aValidLeadId + '/PracticeAreas', < PracticeArea[] > payload);
    expect(res.success).toBeTruthy(res.message);
  });
});
