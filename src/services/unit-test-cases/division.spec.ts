import 'jasmine';
import { Contact } from '../../../lib-esm/compass-models/contact/contact';
import { Division } from '../../compass-models/division';
import { ResponseData } from '../../interfaces/response-data';
import { ClientConfig } from '../../service-models/client-config';
import { Client } from '../client';
import { TestClientConfig as c } from '../test-client-config';
import { Company } from './../../../lib/compass-models/company/company.d';



describe("DivisionClient", () => {

  let client: Client = new Client(new ClientConfig(c.firmId, c.username, c.password, c.apiKey, c.compassUrl));
  let aValidContactDivisionId: number;
  let aValidContactId: number;
  let aValidCompanyDivisionId: number;
  let aValidCompanyId: number;

  beforeEach(async () => {
    client.config.firmId = c.firmId;
    client.config.username = c.username;
    client.config.password = c.password;
    client.config.apiKey = c.apiKey;
    client.config.compassUrl = c.compassUrl;

    let res: ResponseData < Division[] > = await client.get < Division[] > ('/contacts/divisions');
    if (res.success) aValidContactDivisionId = res.result[0].DivisionID;
    let contactRes: ResponseData < Contact[] > = await client.get < Contact[] > ('/contacts');
    if (contactRes.success) aValidContactId = contactRes.result[0].ContactId;
    let companyTypeRes: ResponseData < Division[] > = await client.get < Division[] > ('/companies/divisions');
    if (companyTypeRes.success) aValidCompanyDivisionId = companyTypeRes.result[0].DivisionID;
    let companyRes: ResponseData < Company[] > = await client.get < Company[] > ('/companies');
    if (companyRes.success) aValidCompanyId = companyRes.result[0].CompanyId;
  });

  it('Can read contact division', async () => {
    let res: ResponseData < Division[] > = await client.get < Division[] > ('/contacts/divisions');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can read a contact division', async () => {
    let res: ResponseData < Division[] > = await client.get < Division[] > ('/contacts/' + aValidContactId + '/divisions');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can add a division to a contact', async () => {
    const payload = [{ DivisionID: aValidContactDivisionId }];
    let res: ResponseData < Division[] > = await client.post < Division[] > ('/contacts/' + aValidContactId + '/divisions', < Division[] > payload);
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can read company division', async () => {
    let res: ResponseData < Division[] > = await client.get < Division[] > ('/companies/divisions');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can read a company division', async () => {
    let res: ResponseData < Division[] > = await client.get < Division[] > ('/companies/' + aValidCompanyId + '/divisions');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can add a division to a company', async () => {
    const payload = [{ DivisionID: aValidCompanyDivisionId }];
    let res: ResponseData < Division[] > = await client.post < Division[] > ('/companies/' + aValidCompanyId + '/divisions', < Division[] > payload);
    expect(res.success).toBeTruthy(res.message);
  });
});
