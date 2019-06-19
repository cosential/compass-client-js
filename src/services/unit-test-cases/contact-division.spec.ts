import 'jasmine';
import { Client } from '../client';
import { ClientConfig } from '../../service-models/client-config';
import { ResponseData } from '../../interfaces/response-data';
import { TestClientConfig as c } from '../test-client-config';
import { ContactDivision } from '../../compass-models/contact/contact-division';



describe("ContactDivisionClient", () => {

    let client: Client = new Client(new ClientConfig(c.firmId, c.username, c.password, c.apiKey, c.compassUrl));
    let aValidDivisionId: number;

    beforeEach(async () => {
        client.config.firmId = c.firmId;
        client.config.username = c.username;
        client.config.password = c.password;
        client.config.apiKey = c.apiKey;
        client.config.compassUrl = c.compassUrl;

        let res: ResponseData<ContactDivision[]> = await client.get<ContactDivision[]>('/contacts/divisions');
        if(res.success) aValidDivisionId = res.result[0].DivisionID;
    });

    it('Can read contact division', async () => {
        let res: ResponseData<ContactDivision[]> = await client.get<ContactDivision[]>('/contacts/divisions');
        expect(res.success).toBeTruthy(res.message);
    });

    it('Can read a contact division', async () => {
        let res: ResponseData<ContactDivision[]> = await client.get<ContactDivision[]>('/contacts/8190580/divisions');
        expect(res.success).toBeTruthy(res.message);
    });

    it('Can add a division to a contact', async () => {
        const payload = [{ ContactCategoryID: 8677 }];
        let res: ResponseData<ContactDivision[]> = await client.post('/contacts/8190580/divisions', payload);
        expect(res.success).toBeTruthy(res.message);
    });
});