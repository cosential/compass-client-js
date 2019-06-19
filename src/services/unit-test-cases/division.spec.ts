import 'jasmine';
import { Client } from '../client';
import { ClientConfig } from '../../service-models/client-config';
import { ResponseData } from '../../interfaces/response-data';
import { TestClientConfig as c } from '../test-client-config';
import { Division } from '../../compass-models/division';



describe("ContactCategoryClient", () => {

    let client: Client = new Client(new ClientConfig(c.firmId, c.username, c.password, c.apiKey, c.compassUrl));
    let aValidDivisionId: number;

    beforeEach(async () => {
        client.config.firmId = c.firmId;
        client.config.username = c.username;
        client.config.password = c.password;
        client.config.apiKey = c.apiKey;
        client.config.compassUrl = c.compassUrl;

        let res: ResponseData<Division[]> = await client.get<Division[]>('/contacts/divisions');
        if(res.success) aValidDivisionId = res.result[0].DivisionID;
    });

    it('Can read contact types', async () => {
        let res: ResponseData<Division[]> = await client.get<Division[]>('/contacts/divisions');
        expect(res.success).toBeTruthy(res.message);
    });

    it('Can read a contact types', async () => {
        let res: ResponseData<Division[]> = await client.get<Division[]>('/contacts/8190580/divisions');
        expect(res.success).toBeTruthy(res.message);
    });

    it('Can add a contact type to a contact', async () => {
        const payload = [{ ContactCategoryID: 8677 }];
        let res: ResponseData<Division[]> = await client.post('/contacts/8190580/divisions', payload);
        expect(res.success).toBeTruthy(res.message);
    });
});