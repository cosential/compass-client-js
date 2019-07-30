import 'jasmine';
import { CompanySIC } from '../../compass-models/company/company-sic';
import { ResponseData } from '../../interfaces/response-data';
import { ClientConfig } from '../../service-models/client-config';
import { Client } from '../client';
import { TestClientConfig as c } from '../test-client-config';
import { Company } from './../../../lib-esm/compass-models/company/company.d';


describe("CompanySICClient", () => {

  let client: Client = new Client(new ClientConfig(c.firmId, c.username, c.password, c.apiKey, c.compassUrl));
  let aValidSICId: number;
  let aValidCompanyId: number;

  beforeEach(async () => {
    client.config.firmId = c.firmId;
    client.config.username = c.username;
    client.config.password = c.password;
    client.config.apiKey = c.apiKey;
    client.config.compassUrl = c.compassUrl;

    let SICRes: ResponseData < CompanySIC[] > = await client.get < CompanySIC[] > ('/companies/sic');
    if (SICRes.success) aValidSICId = SICRes.result[0].Id;
    let companyRes: ResponseData < Company[] > = await client.get < Company[] > ('/companies');
    if (companyRes.success) aValidCompanyId = companyRes.result[0].CompanyId;
  });

  it('Can read company SICs', async () => {
    let res: ResponseData < CompanySIC[] > = await client.get < CompanySIC[] > ('/companies/sic');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can read a company\'s SICs', async () => {
    let res: ResponseData < CompanySIC[] > = await client.get < CompanySIC[] > ('/companies/' + aValidCompanyId + '/sic');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can add a company SIC to a company', async () => {
    const payload = [{ Id: aValidSICId }];
    let res: ResponseData < CompanySIC[] > = await client.post < CompanySIC[] > ('/companies/' + aValidCompanyId + '/sic', < CompanySIC[] > payload);
    expect(res.success).toBeTruthy(res.message);
  });
});
