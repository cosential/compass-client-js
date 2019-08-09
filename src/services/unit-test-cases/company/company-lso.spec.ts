import 'jasmine';
import { CompanyLSO } from '../../../compass-models/company/company-lso';
import { ResponseData } from '../../../interfaces/response-data';
import { ClientConfig } from '../../../service-models/client-config';
import { Client } from '../../client';
import { TestClientConfig as c } from '../../test-client-config';
import { Company } from './../../../compass-models/company/company';


describe("CompanyLSOClient", () => {

  let client: Client = new Client(new ClientConfig(c.firmId, c.username, c.password, c.apiKey, c.compassUrl));
  let aValidLSOId: number;
  let aValidCompanyId: number;

  beforeEach(async () => {
    client.config.firmId = c.firmId;
    client.config.username = c.username;
    client.config.password = c.password;
    client.config.apiKey = c.apiKey;
    client.config.compassUrl = c.compassUrl;

    let LSORes: ResponseData < CompanyLSO[] > = await client.get < CompanyLSO[] > ('/companies/legalstructure');
    if (LSORes.success) aValidLSOId = LSORes.result[0].LSOID;
    let companyRes: ResponseData < Company[] > = await client.get < Company[] > ('/companies');
    if (companyRes.success) aValidCompanyId = companyRes.result[0].CompanyId;
  });

  it('Can read company LSOs', async () => {
    let res: ResponseData < CompanyLSO[] > = await client.get < CompanyLSO[] > ('/companies/legalstructure');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can read a company\'s LSOs', async () => {
    let res: ResponseData < CompanyLSO[] > = await client.get < CompanyLSO[] > ('/companies/' + aValidCompanyId + '/legalstructure');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can add a company LSO to a company', async () => {
    const payload = [{ LSOID: aValidLSOId }];
    let res: ResponseData < CompanyLSO[] > = await client.post < CompanyLSO[] > ('/companies/' + aValidCompanyId + '/legalstructure', < CompanyLSO[] > payload);
    expect(res.success).toBeTruthy(res.message);
  });
});
