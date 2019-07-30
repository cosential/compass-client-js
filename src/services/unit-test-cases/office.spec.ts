import 'jasmine';
import { Contact } from '../../compass-models/contact/contact';
import { Office } from '../../compass-models/office';
import { ResponseData } from '../../interfaces/response-data';
import { ClientConfig } from '../../service-models/client-config';
import { Client } from '../client';
import { TestClientConfig as c } from '../test-client-config';
import { Company } from './../../../lib-esm/compass-models/company/company.d';


describe("OfficeClient", () => {

  let client: Client = new Client(new ClientConfig(c.firmId, c.username, c.password, c.apiKey, c.compassUrl));
  let aValidContactOfficeId: number;
  let aValidContactId: number;
  let aValidCompanyOfficeId: number;
  let aValidCompanyId: number;

  beforeEach(async () => {
    client.config.firmId = c.firmId;
    client.config.username = c.username;
    client.config.password = c.password;
    client.config.apiKey = c.apiKey;
    client.config.compassUrl = c.compassUrl;

    let res: ResponseData < Office[] > = await client.get < Office[] > ('/contacts/offices');
    if (res.success) aValidContactOfficeId = res.result[0].OfficeID;
    let contactRes: ResponseData < Contact[] > = await client.get < Contact[] > ('/contacts');
    if (contactRes.success) aValidContactId = contactRes.result[0].ContactId;
    let companyTypeRes: ResponseData < Office[] > = await client.get < Office[] > ('/companies/offices');
    if (companyTypeRes.success) aValidCompanyOfficeId = companyTypeRes.result[0].OfficeID;
    let companyRes: ResponseData < Company[] > = await client.get < Company[] > ('/companies');
    if (companyRes.success) aValidCompanyId = companyRes.result[0].CompanyId;
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
});
