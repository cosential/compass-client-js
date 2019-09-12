import 'jasmine';
import { Contact } from '../../compass-models/contact/contact';
import { ContactCategory } from '../../compass-models/contact/contact-category';
import { ResponseData } from '../../interfaces/response-data';
import { ClientConfig } from '../../service-models/client-config';
import { Client } from '../../services/client';
import { TestClientConfig as c } from '../test-client-config';


describe("ContactCategoryClient", () => {

  let client: Client = new Client(new ClientConfig(c.firmId, c.username, c.password, c.apiKey, c.compassUrl));
  let aValidCategoryId: number;
  let aValidContactId: number;

  beforeEach(async () => {
    client.config.firmId = c.firmId;
    client.config.username = c.username;
    client.config.password = c.password;
    client.config.apiKey = c.apiKey;
    client.config.compassUrl = c.compassUrl;

    let res: ResponseData < ContactCategory[] > = await client.get < ContactCategory[] > ('/contacts/Contact_ContactTypes');
    if (res.success) aValidCategoryId = res.result[0].ContactCategoryID;
    let contactRes: ResponseData < Contact[] > = await client.get < Contact[] > ('/contacts');
    if (contactRes.success) aValidContactId = contactRes.result[0].ContactId;
  });

  it('Can read contact types', async () => {
    let res: ResponseData < ContactCategory[] > = await client.get < ContactCategory[] > ('/contacts/Contact_Category');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can read a contact types', async () => {
    let res: ResponseData < ContactCategory[] > = await client.get < ContactCategory[] > ('/contacts/' + aValidContactId + '/Contact_Category');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can add a contact type to a contact', async () => {
    const payload = [{ ContactCategoryID: aValidCategoryId }];
    let res: ResponseData < ContactCategory[] > = await client.post < ContactCategory[] > ('/contacts/' + aValidContactId + '/Contact_Category', < ContactCategory[] > payload);
    expect(res.success).toBeTruthy(res.message);
  });
});
