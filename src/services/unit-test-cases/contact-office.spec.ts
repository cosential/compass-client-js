import 'jasmine';
import { Client } from '../client';
import { ClientConfig } from '../../service-models/client-config';
import { ResponseData } from '../../interfaces/response-data';
import { TestClientConfig as c } from '../test-client-config';
import { ContactOffice } from '../../compass-models/contact/contact-office';


describe("ContactOfficeClient", () => {

    let client: Client = new Client(new ClientConfig(c.firmId, c.username, c.password, c.apiKey, c.compassUrl));
    let aValidOfficeId: number;

    beforeEach(async () => {
        client.config.firmId = c.firmId;
        client.config.username = c.username;
        client.config.password = c.password;
        client.config.apiKey = c.apiKey;
        client.config.compassUrl = c.compassUrl;

        let res: ResponseData<ContactOffice[]> = await client.get<ContactOffice[]>('/contacts/offices');
        if(res.success) aValidOfficeId = res.result[0].OfficeID;
    });

    it('Can read contact offices', async () => {
        let res: ResponseData<ContactOffice[]> = await client.get<ContactOffice[]>('/contacts/offices');
        expect(res.success).toBeTruthy(res.message);
    });

    it('Can read a contacts offices', async () => {
        let res: ResponseData<ContactOffice[]> = await client.get<ContactOffice[]>('/contacts/8190580/offices');
        expect(res.success).toBeTruthy(res.message);
    });

    it('Can add a office to a contact', async () => {
        const payload = [{ ContactCategoryID: 8677 }];
        let res: ResponseData<ContactOffice[]> = await client.post('/contacts/8190580/offices', payload);
        expect(res.success).toBeTruthy(res.message);
    });
});