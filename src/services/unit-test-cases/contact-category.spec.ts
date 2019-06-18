import 'jasmine';
import { Client } from '../client';
import { ClientConfig } from '../../service-models/client-config';
import { ContactType } from '../../compass-models/contact/contact-type';
import { ResponseData } from '../../interfaces/response-data';
import { TestClientConfig as c } from '../test-client-config';
import { ContactCategory } from '../../compass-models/contact/contact-category';


describe("ContactCategoryClient", () => {

    let client: Client = new Client(new ClientConfig(c.firmId, c.username, c.password, c.apiKey, c.compassUrl));
    let aValidCategoryId: number;

    beforeEach(async () => {
        client.config.firmId = c.firmId;
        client.config.username = c.username;
        client.config.password = c.password;
        client.config.apiKey = c.apiKey;
        client.config.compassUrl = c.compassUrl;

        let res: ResponseData<ContactCategory[]> = await client.get<ContactCategory[]>('/contacts/Contact_ContactTypes');
        if(res.success) aValidCategoryId = res.result[0].ContactCategoryID;
    });

    it('Can read contact types', async () => {
        let res: ResponseData<ContactCategory[]> = await client.get<ContactCategory[]>('/contacts/Contact_Category');
        expect(res.success).toBeTruthy(res.message);
    });

    it('Can read a contact types', async () => {
        let res: ResponseData<ContactCategory[]> = await client.get<ContactCategory[]>('/contacts/8190580/Contact_Category');
        expect(res.success).toBeTruthy(res.message);
    });

    it('Can add a contact type to a contact', async () => {
        const payload = [{ ContactCategoryID: 8677 }];
        let res: ResponseData<ContactCategory[]> = await client.post('/contacts/8190580/Contact_Category', payload);
        expect(res.success).toBeTruthy(res.message);
    });
});