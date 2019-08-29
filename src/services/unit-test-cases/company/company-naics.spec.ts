import 'jasmine';
import { ResponseData, Client } from '../../..';
import { ClientConfig } from '../../../service-models/client-config';
import { TestClientConfig as c } from '../../test-client-config';
import { Company } from '../../../compass-models/company/company';
import { CompanyNAICS } from '../../../compass-models/company/company-naics';

describe("CompanyNAICSClient", () => {

  let client: Client = new Client(new ClientConfig(c.firmId, c.username, c.password, c.apiKey, c.compassUrl));
  let aValidNAICSId: number;
  let aValidCompanyId: number;

  beforeEach(async () => {
    client.config.firmId = c.firmId;
    client.config.username = c.username;
    client.config.password = c.password;
    client.config.apiKey = c.apiKey;
    client.config.compassUrl = c.compassUrl;

    let NAICSRes: ResponseData < CompanyNAICS[] > = await client.get < CompanyNAICS[] > ('/companies/sdbt');
    if (NAICSRes.success) aValidNAICSId = NAICSRes.result[0].Id;
    let companyRes: ResponseData < Company[] > = await client.get < Company[] > ('/companies');
    if (companyRes.success) aValidCompanyId = companyRes.result[0].CompanyId;
  });
  
    it('Can read company NAICSs', async () => {
        let res: ResponseData < CompanyNAICS[] > = await client.get < CompanyNAICS[] > ('/companies/naics');
        expect(res.success).toBeTruthy(res.message);
      });
    
      it('Can read a company\'s NAICSs', async () => {
        let res: ResponseData < CompanyNAICS[] > = await client.get < CompanyNAICS[] > ('/companies/' + aValidCompanyId + '/naics');
        expect(res.success).toBeTruthy(res.message);
      });
    
      it('Can add a company NAIC to a company', async () => {
        const payload = [{ Id: aValidNAICSId }];
        let res: ResponseData < CompanyNAICS[] > = await client.post < CompanyNAICS[] > ('/companies/' + aValidCompanyId + '/naics', < CompanyNAICS[] > payload);
        expect(res.success).toBeTruthy(res.message);
      });
  });