import 'jasmine';
import { ContactType } from '../../../compass-models/contact/contact-type';
import { ResponseData } from '../../../interfaces/response-data';
import { ClientConfig } from '../../../service-models/client-config';
import { Client } from '../../client';
import { TestClientConfig as c } from '../../test-client-config';
import { Contact } from '../../../compass-models/contact/contact';


describe("ContactTypeClient", () => {

  let client: Client = new Client(new ClientConfig(c.firmId, c.username, c.password, c.apiKey, c.compassUrl));
  let aValidTypeId: number;
  let aValidContactId: number;

  beforeEach(async () => {
    client.config.firmId = c.firmId;
    client.config.username = c.username;
    client.config.password = c.password;
    client.config.apiKey = c.apiKey;
    client.config.compassUrl = c.compassUrl;

    let typeRes: ResponseData < ContactType[] > = await client.get < ContactType[] > ('/contacts/Contact_ContactTypes');
    if (typeRes.success) aValidTypeId = typeRes.result[0].ContactTypeID;
    let contactRes: ResponseData < Contact[] > = await client.get < Contact[] > ('/contacts');
    if (contactRes.success) aValidContactId = contactRes.result[0].ContactId;
  });

  it('Can read contact types', async () => {
    let res: ResponseData < ContactType[] > = await client.get < ContactType[] > ('/contacts/Contact_ContactTypes');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can read a contact types', async () => {
    let res: ResponseData < ContactType[] > = await client.get < ContactType[] > ('/contacts/' + aValidContactId + '/Contact_ContactTypes');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can add a contact type to a contact', async () => {
    const payload = [{ ContactTypeID: aValidTypeId }];
    let res: ResponseData < ContactType[] > = await client.post < ContactType[] > ('/contacts/' + aValidContactId + '/Contact_ContactTypes', < ContactType[] > payload);
    expect(res.success).toBeTruthy(res.message);
  });
});
