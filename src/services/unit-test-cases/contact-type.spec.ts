import 'jasmine';
import { Client } from '../client';
import { ClientConfig } from '../../service-models/client-config';
import { ContactType } from '../../compass-models/contact/contact-type';
import { ResponseData } from '../../interfaces/response-data';
import { TestClientConfig as c } from '../test-client-config';


describe("ContactTypeClient", () => {

    let client: Client = new Client(new ClientConfig(c.firmId, c.username, c.password, c.apiKey, c.compassUrl));
    let aValidTypeId: number;

    beforeEach(async () => {
        client.config.firmId = c.firmId;
        client.config.username = c.username;
        client.config.password = c.password;
        client.config.apiKey = c.apiKey;
        client.config.compassUrl = c.compassUrl;

        let res: ResponseData<ContactType[]> = await client.get<ContactType[]>('/contacts/Contact_ContactTypes');
        if(res.success) aValidTypeId = res.result[0].ContactTypeID;
    });

    it('Can read contact types', async () => {
        let res: ResponseData<ContactType[]> = await client.get<ContactType[]>('/contacts/Contact_ContactTypes');
        expect(res.success).toBeTruthy(res.message);
    });

    it('Can read a contact types', async () => {
        let res: ResponseData<ContactType[]> = await client.get<ContactType[]>('/contacts/8190580/Contact_ContactTypes');
        expect(res.success).toBeTruthy(res.message);
    });

    it('Can add a contact type to a contact', async () => {
        const payload = [{ ContactTypeID: 10309 }];
        let res: ResponseData<ContactType[]> = await client.post('/contacts/8190580/Contact_ContactTypes', payload);
        expect(res.success).toBeTruthy(res.message);
    });
});