import 'jasmine';
import { ResponseData } from '../../..';
import { Contact } from "../../../compass-models/contact/contact";
import { ClientConfig } from '../../../service-models/client-config';
import { Client } from '../../client';
import { TestClientConfig as c } from '../../test-client-config';
import { ContactInfluenceLevel } from '../../../compass-models/contact/contact-influencelevel';
import { ContactMailingList } from '../../../compass-models/contact/contact-mailinglist';

describe("ContactClient", () => {

  let client: Client = new Client(new ClientConfig(c.firmId, c.username, c.password, c.apiKey, c.compassUrl));
  let aValidContactId: number;
  let aValidContactInfluenceLevelId: number;
  let aValidContactMailingListId: number;

  beforeEach(async () => {
    client.config.firmId = c.firmId;
    client.config.username = c.username;
    client.config.password = c.password;
    client.config.apiKey = c.apiKey;
    client.config.compassUrl = c.compassUrl;

    jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;

    let res: ResponseData < Contact[] > = await client.get < Contact[] > ('/contacts');
    if (res.success) aValidContactId = res.result[0].ContactId;

    let influenceLevelRes: ResponseData < ContactInfluenceLevel[] > = await client.get < ContactInfluenceLevel[] > ('/contacts/influencelevel');
    if (influenceLevelRes.success) aValidContactInfluenceLevelId = influenceLevelRes.result[0].Id;

    let mailingListRes: ResponseData < ContactMailingList[] > = await client.get < ContactMailingList[] > ('/contacts/influencelevel');
    if (mailingListRes.success) aValidContactInfluenceLevelId = mailingListRes.result[0].MailingListID;
  });

  it("Can read contacts", async () => {
    let res: ResponseData < Contact[] > = await client.get < Contact[] > ('/contacts');
    expect(res.success).toBeTruthy(res.message);
  });

  it("Can read contacts for incorrect url", async () => {
    let mistypedUrls: string[] = ['/contact', '/contactss', '/contatcs'];
    mistypedUrls.forEach(async (index) => {
      let res: ResponseData < Contact[] > = await client.get < Contact[] > (index);
      expect(res.success).toBeFalsy(res.message);
    });
  });

  it("Can read a contact", async () => {
    let url = '/contacts/' + aValidContactId;
    let res: ResponseData < Contact > = await client.get < Contact > (url);
    expect(res.success).toBeTruthy(res.message);
  });

  it("Can read a contact for invalid id", async () => {
    let url: string = '/contacts/5555444';
    let res: ResponseData < Contact > = await client.get < Contact > (url);
    expect(res.success).toBeFalsy(res.message);
  });

  it("Can add contact/s with valid data", async () => {
    let url = '/contacts/' + aValidContactId;
    let resGet: ResponseData < Contact > = await client.get < Contact > (url);

    resGet.result.FirstName = 'John';
    resGet.result.LastName = 'Doe';
    let exContact: Contact[] = [resGet.result];

    let resPost: ResponseData < Contact[] > = await client.post < Contact[] > ('/contacts', exContact);
    expect(resPost.success).toBeTruthy(resPost.message);
  });

  it("Can add contact/s with invalid data", async () => {
    let url = '/contacts/' + aValidContactId;
    let resGet: ResponseData < Contact > = await client.get < Contact > (url);

    //not providing a mandatory field
    resGet.result.LastName = null;
    resGet.result.Email = 'jdoe@cosential.com';
    let exContact: Contact[] = [resGet.result];

    let resPost: ResponseData < Contact[] > = await client.post < Contact[] > ('/contacts', exContact);
    expect(resPost.success).toBeFalsy(resPost.message);
  });

  it("Can update contact with valid data", async () => {
    let urlGet = '/contacts/' + aValidContactId;
    let resGet: ResponseData < Contact > = await client.get < Contact > (urlGet);

    resGet.result.Title = 'Any random title';
    resGet.result.IsActive = 0;
    resGet.result.ROW_VERSION = '';

    let exContact: Contact = resGet.result;
    let urlPut = '/contacts/' + resGet.result.ContactId;

    let resPut: ResponseData < Contact > = await client.put < Contact > (urlPut, exContact);
    expect(resPut.success).toBeTruthy(resPut.message);
  });

  it("Can update contact with invalid data", async () => {
    let urlGet = '/contacts/' + aValidContactId;
    let resGet: ResponseData < Contact > = await client.get < Contact > (urlGet);

    resGet.result.Notes = 'A random note';
    //Not clearing off the existing row_version

    let exContact: Contact = resGet.result;
    let urlPut = '/contacts/' + resGet.result.ContactId;

    let resPut: ResponseData < Contact > = await client.put < Contact > (urlPut, exContact);
    expect(resPut.success).toBeFalsy(resPut.message);
  });

  it("Can delete a contact with valid id", async () => {
    let url = '/contacts/' + aValidContactId;
    let res: ResponseData < Contact > = await client.delete < Contact > (url);
    expect(res.success).toBeTruthy(res.message);
  });

  it("Can delete a contact with invalid id", async () => {
    let url: string = '/contacts/5555999';
    let res: ResponseData < Contact > = await client.delete < Contact > (url);
    expect(res.success).toBeFalsy(res.message);
  });

  it("Search contact/s using valid params", async () => {
    let searchQuery = 'BusinessEmailAddress:jdoe@cosential.com AND FirstName:John';
    let res: ResponseData < Contact[] > = await client.search < Contact[] > ('/contacts', searchQuery);
    expect(res.success).toBeTruthy(res.message);
  });

  it("Search contact/s for invalid params", async () => {
    let searchQuery = 'test:abc';
    let res: ResponseData < Contact[] > = await client.search < Contact[] > ('/contacts', searchQuery);
    //return all or none on empty or invalid params
    expect(res.success).toBeTruthy(res.message);
  });

  it("Can read Contact Influence Level options", async () => {
    let url: string = '/contacts/influencelevel';
    let res: ResponseData < ContactInfluenceLevel[] > = await client.get < ContactInfluenceLevel[] > (url);
    expect(res.success).toBeTruthy(res.message);
  });

  it("Can update a Contact's Influence Level", async () => {
    let url: string = '/contacts/' + aValidContactId + '/influencelevel';
    let payload: any[] = [{
      Id: aValidContactInfluenceLevelId
    }]
    let res: ResponseData < ContactInfluenceLevel[] > = await client.post < ContactInfluenceLevel[] > (url, payload);
    expect(res.success).toBeTruthy(res.message);
  });

  it("Can read a Contact's Influence Level", async () => {
    let url: string = '/contacts/' + aValidContactId + '/influencelevel';
    let res: ResponseData < ContactInfluenceLevel[] > = await client.get < ContactInfluenceLevel[] > (url);
    expect(res.success).toBeTruthy(res.message);
  });

  it("Can delete a Contact's Influence Level", async () => {
    let url: string = '/contacts/' + aValidContactId + '/influencelevel';
    let res: ResponseData < ContactInfluenceLevel[] > = await client.delete < ContactInfluenceLevel[] > (url);
    expect(res.success).toBeTruthy(res.message);
  });

  it("Can read Contact MailingList options", async () => {
    let url: string = '/contacts/Contact_MailingList';
    let res: ResponseData < ContactMailingList[] > = await client.get < ContactMailingList[] > (url);
    expect(res.success).toBeTruthy(res.message);
  });

  it("Can update a Contact's MailingLists", async () => {
    let url: string = '/contacts/' + aValidContactId + '/Contact_MailingList';
    let payload: any[] = [{
      MailingListId: aValidContactMailingListId
    }]
    let res: ResponseData < ContactMailingList[] > = await client.post < ContactMailingList[] > (url, payload);
    expect(res.success).toBeTruthy(res.message);
  });

  it("Can read a Contact's Mailing Lists", async () => {
    let url: string = '/contacts/' + aValidContactId + '/Contact_MailingList';
    let res: ResponseData < ContactMailingList[] > = await client.get < ContactMailingList[] > (url);
    expect(res.success).toBeTruthy(res.message);
  });

  it("Can delete a Contact's Mailing Lists", async () => {
    let url: string = '/contacts/' + aValidContactId + '/Contact_MailingList';
    let res: ResponseData < ContactMailingList[] > = await client.delete < ContactMailingList[] > (url);
    expect(res.success).toBeTruthy(res.message);
  });
});
