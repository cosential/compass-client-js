import 'jasmine';
import { Contact } from '../../compass-models/contact/contact';
import { Territory } from '../../compass-models/territory';
import { ResponseData } from '../../interfaces/response-data';
import { ClientConfig } from '../../service-models/client-config';
import { Client } from '../client';
import { TestClientConfig as c } from '../test-client-config';
import { Company } from './../../../lib-esm/compass-models/company/company.d';



describe("TerritoryClient", () => {

  let client: Client = new Client(new ClientConfig(c.firmId, c.username, c.password, c.apiKey, c.compassUrl));
  let aValidContactTerritoryId: number;
  let aValidContactId: number;
  let aValidCompanyTerritoryId: number;
  let aValidCompanyId: number;

  beforeEach(async () => {
    client.config.firmId = c.firmId;
    client.config.username = c.username;
    client.config.password = c.password;
    client.config.apiKey = c.apiKey;
    client.config.compassUrl = c.compassUrl;

    let contactTypeRes: ResponseData < Territory[] > = await client.get < Territory[] > ('/contacts/Territories');
    if (contactTypeRes.success) aValidContactTerritoryId = contactTypeRes.result[0].TerritoryID;
    let contactRes: ResponseData < Contact[] > = await client.get < Contact[] > ('/contacts');
    if (contactRes.success) aValidContactId = contactRes.result[0].ContactId;
    let companyTypeRes: ResponseData < Territory[] > = await client.get < Territory[] > ('/companies/Territories');
    if (companyTypeRes.success) aValidCompanyTerritoryId = companyTypeRes.result[0].TerritoryID;
    let companyRes: ResponseData < Company[] > = await client.get < Company[] > ('/companies');
    if (companyRes.success) aValidCompanyId = companyRes.result[0].CompanyId;
  });

  it('Can read contact Territories', async () => {
    let res: ResponseData < Territory[] > = await client.get < Territory[] > ('/contacts/Territories');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can read a contacts Territories', async () => {
    let res: ResponseData < Territory[] > = await client.get < Territory[] > ('/contacts/' + aValidContactId + '/Territories');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can add a Territory to a contact', async () => {
    const payload = [{ TerritoryID: aValidContactTerritoryId }];
    let res: ResponseData < Territory[] > = await client.post < Territory[] > ('/contacts/' + aValidContactId + '/Territories', < Territory[] > payload);
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can read company Territories', async () => {
    let res: ResponseData < Territory[] > = await client.get < Territory[] > ('/companies/Territories');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can read a companys Territories', async () => {
    let res: ResponseData < Territory[] > = await client.get < Territory[] > ('/companies/' + aValidCompanyId + '/Territories');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can add a Territory to a company', async () => {
    const payload = [{ TerritoryID: aValidCompanyTerritoryId }];
    let res: ResponseData < Territory[] > = await client.post < Territory[] > ('/companies/' + aValidCompanyId + '/Territories', < Territory[] > payload);
    expect(res.success).toBeTruthy(res.message);
  });
});
