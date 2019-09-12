import 'jasmine';
import { Company } from '../../compass-models/company/company';
import { CompanyType } from '../../compass-models/company/company-type';
import { ResponseData } from '../../interfaces/response-data';
import { ClientConfig } from '../../service-models/client-config';
import { Client } from '../../services/client';
import { TestClientConfig as c } from '../test-client-config';


describe("CompanyTypeClient", () => {

  let client: Client = new Client(new ClientConfig(c.firmId, c.username, c.password, c.apiKey, c.compassUrl));
  let aValidTypeId: number;
  let aValidCompanyId: number;

  beforeEach(async () => {
    client.config.firmId = c.firmId;
    client.config.username = c.username;
    client.config.password = c.password;
    client.config.apiKey = c.apiKey;
    client.config.compassUrl = c.compassUrl;

    let typeRes: ResponseData < CompanyType[] > = await client.get < CompanyType[] > ('/companies/companytypes');
    if (typeRes.success) aValidTypeId = typeRes.result[0].CompanyTypeID;
    let companyRes: ResponseData < Company[] > = await client.get < Company[] > ('/companies');
    if (companyRes.success) aValidCompanyId = companyRes.result[0].CompanyId;
  });

  it('Can read company types', async () => {
    let res: ResponseData < CompanyType[] > = await client.get < CompanyType[] > ('/companies/companytypes');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can read a company\'s types', async () => {
    let res: ResponseData < CompanyType[] > = await client.get < CompanyType[] > ('/companies/' + aValidCompanyId + '/companytypes');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can add a company type to a company', async () => {
    const payload = [{ CompanyTypeID: aValidTypeId }];
    let res: ResponseData < CompanyType[] > = await client.post < CompanyType[] > ('/companies/' + aValidCompanyId + '/companytypes', < CompanyType[] > payload);
    expect(res.success).toBeTruthy(res.message);
  });
});
