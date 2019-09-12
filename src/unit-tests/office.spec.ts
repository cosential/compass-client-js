import 'jasmine';
import { Contact } from '../compass-models/contact/contact';
import { Lead } from '../compass-models/lead/lead';
import { Office } from '../compass-models/office';
import { ResponseData } from '../interfaces/response-data';
import { ClientConfig } from '../service-models/client-config';
import { Client } from '../services/client';
import { Company } from './../compass-models/company/company';
import { TestClientConfig as c } from './test-client-config';


describe("OfficeClient", () => {

  let client: Client = new Client(new ClientConfig(c.firmId, c.username, c.password, c.apiKey, c.compassUrl));
  let aValidContactOfficeId: number;
  let aValidContactId: number;
  let aValidCompanyOfficeId: number;
  let aValidCompanyId: number;
  let aValidLeadOfficeId: number;
  let aValidLeadId: number;

  beforeEach(async () => {
    client.config.firmId = c.firmId;
    client.config.username = c.username;
    client.config.password = c.password;
    client.config.apiKey = c.apiKey;
    client.config.compassUrl = c.compassUrl;

    let contactOfficeRes: ResponseData < Office[] > = await client.get < Office[] > ('/contacts/offices');
    if (contactOfficeRes.success) aValidContactOfficeId = contactOfficeRes.result[0].OfficeID;
    let contactRes: ResponseData < Contact[] > = await client.get < Contact[] > ('/contacts');
    if (contactRes.success) aValidContactId = contactRes.result[0].ContactId;
    let companyOfficeRes: ResponseData < Office[] > = await client.get < Office[] > ('/companies/offices');
    if (companyOfficeRes.success) aValidCompanyOfficeId = companyOfficeRes.result[0].OfficeID;
    let companyRes: ResponseData < Company[] > = await client.get < Company[] > ('/companies');
    if (companyRes.success) aValidCompanyId = companyRes.result[0].CompanyId;
    let leadOfficeRes: ResponseData < Office[] > = await client.get < Office[] > ('/leads/offices');
    if (leadOfficeRes.success) aValidLeadOfficeId = leadOfficeRes.result[0].OfficeID;
    let leadRes: ResponseData < Lead[] > = await client.get < Lead[] > ('/leads');
    if (leadRes.success) aValidLeadId = leadRes.result[0].LeadId;
  });

  it('Can read contact offices', async () => {
    let res: ResponseData < Office[] > = await client.get < Office[] > ('/contacts/offices');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can read a contacts offices', async () => {
    let res: ResponseData < Office[] > = await client.get < Office[] > ('/contacts/' + aValidContactId + '/offices');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can add a office to a contact', async () => {
    const payload = [{ OfficeID: aValidContactOfficeId }];
    let res: ResponseData < Office[] > = await client.post < Office[] > ('/contacts/' + aValidContactId + '/offices', < Office[] > payload);
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can read company offices', async () => {
    let res: ResponseData < Office[] > = await client.get < Office[] > ('/companies/offices');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can read a companys offices', async () => {
    let res: ResponseData < Office[] > = await client.get < Office[] > ('/companies/' + aValidCompanyId + '/offices');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can add a office to a company', async () => {
    const payload = [{ OfficeID: aValidCompanyOfficeId }];
    let res: ResponseData < Office[] > = await client.post < Office[] > ('/companies/' + aValidCompanyId + '/offices', < Office[] > payload);
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can read lead offices', async () => {
    let res: ResponseData < Office[] > = await client.get < Office[] > ('/leads/offices');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can read a leads offices', async () => {
    let res: ResponseData < Office[] > = await client.get < Office[] > ('/leads/' + aValidLeadId + '/offices');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can add a office to a lead', async () => {
    const payload = [{ OfficeID: aValidLeadOfficeId }];
    let res: ResponseData < Office[] > = await client.post < Office[] > ('/leads/' + aValidLeadId + '/offices', < Office[] > payload);
    expect(res.success).toBeTruthy(res.message);
  });
});
