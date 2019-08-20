import 'jasmine';
import { Contact } from '../../compass-models/contact/contact';
import { Social } from '../../compass-models/social';
import { ResponseData } from '../../interfaces/response-data';
import { ClientConfig } from '../../service-models/client-config';
import { Client } from '../client';
import { TestClientConfig as c } from '../test-client-config';
import { Company } from './../../../lib-esm/compass-models/company/company.d';


describe("SocialClient", () => {

  let client: Client = new Client(new ClientConfig(c.firmId, c.username, c.password, c.apiKey, c.compassUrl));
  let aValidContactId: number;
  let aValidCompanyId: number;

  const testSocial: Social = {
    SocialNetworkId: 16,
    SocialNetworkName: 'Twitter',
    Url: 'https://twitter.com'
  } as Social;

  beforeEach(async () => {
    client.config.firmId = c.firmId;
    client.config.username = c.username;
    client.config.password = c.password;
    client.config.apiKey = c.apiKey;
    client.config.compassUrl = c.compassUrl;

    let contactRes: ResponseData < Contact[] > = await client.get < Contact[] > ('/contacts');
    if (contactRes.success) aValidContactId = contactRes.result[0].ContactId;
    let companyRes: ResponseData < Company[] > = await client.get < Company[] > ('/companies');
    if (companyRes.success) aValidCompanyId = companyRes.result[0].CompanyId;
  });

  it('Can read a contacts socials', async () => {
    let res: ResponseData < Social[] > = await client.get < Social[] > ('/contacts/' + aValidContactId + '/social');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can add a social to a contact', async () => {
    const payload = [testSocial];
    let res: ResponseData < Social[] > = await client.post < Social[] > ('/contacts/' + aValidContactId + '/social', < Social[] > payload);
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can read a companys socials', async () => {
    let res: ResponseData < Social[] > = await client.get < Social[] > ('/companies/' + aValidCompanyId + '/social');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can add a social to a company', async () => {
    const payload = [testSocial];
    let res: ResponseData < Social[] > = await client.post < Social[] > ('/companies/' + aValidCompanyId + '/social', < Social[] > payload);
    expect(res.success).toBeTruthy(res.message);
  });
});
