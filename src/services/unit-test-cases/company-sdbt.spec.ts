import 'jasmine';
import { CompanySDBT } from '../../compass-models/company/company-sdbt';
import { ResponseData } from '../../interfaces/response-data';
import { ClientConfig } from '../../service-models/client-config';
import { Client } from '../client';
import { TestClientConfig as c } from '../test-client-config';
import { Company } from './../../../lib-esm/compass-models/company/company.d';


describe("CompanySDBTClient", () => {

  let client: Client = new Client(new ClientConfig(c.firmId, c.username, c.password, c.apiKey, c.compassUrl));
  let aValidSDBTId: number;
  let aValidCompanyId: number;

  beforeEach(async () => {
    client.config.firmId = c.firmId;
    client.config.username = c.username;
    client.config.password = c.password;
    client.config.apiKey = c.apiKey;
    client.config.compassUrl = c.compassUrl;

    let SDBTRes: ResponseData < CompanySDBT[] > = await client.get < CompanySDBT[] > ('/companies/sdbt');
    if (SDBTRes.success) aValidSDBTId = SDBTRes.result[0].Id;
    let companyRes: ResponseData < Company[] > = await client.get < Company[] > ('/companies');
    if (companyRes.success) aValidCompanyId = companyRes.result[0].CompanyId;
  });

  it('Can read company SDBTs', async () => {
    let res: ResponseData < CompanySDBT[] > = await client.get < CompanySDBT[] > ('/companies/sdbt');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can read a company\'s SDBTs', async () => {
    let res: ResponseData < CompanySDBT[] > = await client.get < CompanySDBT[] > ('/companies/' + aValidCompanyId + '/sdbt');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can add a company SDBT to a company', async () => {
    const payload = [{ Id: aValidSDBTId }];
    let res: ResponseData < CompanySDBT[] > = await client.post < CompanySDBT[] > ('/companies/' + aValidCompanyId + '/sdbt', < CompanySDBT[] > payload);
    expect(res.success).toBeTruthy(res.message);
  });
});
