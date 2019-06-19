import 'jasmine';
import { Client } from '../client';
import { ClientConfig } from '../../service-models/client-config';
import { ResponseData } from '../../interfaces/response-data';
import { TestClientConfig as c } from '../test-client-config';
import { ContactTerritory } from '../../compass-models/contact/contact-territory';



describe("ContactTerritoryClient", () => {

    let client: Client = new Client(new ClientConfig(c.firmId, c.username, c.password, c.apiKey, c.compassUrl));
    let aValidTerritoryId: number;

    beforeEach(async () => {
        client.config.firmId = c.firmId;
        client.config.username = c.username;
        client.config.password = c.password;
        client.config.apiKey = c.apiKey;
        client.config.compassUrl = c.compassUrl;

        let res: ResponseData<ContactTerritory[]> = await client.get<ContactTerritory[]>('/contacts/Territories');
        if(res.success) aValidTerritoryId = res.result[0].TerritoryID;
    });

    it('Can read contact Territories', async () => {
        let res: ResponseData<ContactTerritory[]> = await client.get<ContactTerritory[]>('/contacts/Territories');
        expect(res.success).toBeTruthy(res.message);
    });

    it('Can read a contacts Territories', async () => {
        let res: ResponseData<ContactTerritory[]> = await client.get<ContactTerritory[]>('/contacts/8190580/Territories');
        expect(res.success).toBeTruthy(res.message);
    });

    it('Can add a Territory to a contact', async () => {
        const payload = [{ PracticeAreaId: 8677 }];
        let res: ResponseData<ContactTerritory[]> = await client.post('/contacts/8190580/Territories', payload);
        expect(res.success).toBeTruthy(res.message);
    });
});