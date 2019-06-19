import 'jasmine';
import { Client } from '../client';
import { ClientConfig } from '../../service-models/client-config';
import { ResponseData } from '../../interfaces/response-data';
import { TestClientConfig as c } from '../test-client-config';
import { Territory } from '../../compass-models/territory';



describe("TerritoryClient", () => {

    let client: Client = new Client(new ClientConfig(c.firmId, c.username, c.password, c.apiKey, c.compassUrl));
    let aValidTerritoryId: number;

    beforeEach(async () => {
        client.config.firmId = c.firmId;
        client.config.username = c.username;
        client.config.password = c.password;
        client.config.apiKey = c.apiKey;
        client.config.compassUrl = c.compassUrl;

        let res: ResponseData<Territory[]> = await client.get<Territory[]>('/contacts/Territories');
        if(res.success) aValidTerritoryId = res.result[0].TerritoryID;
    });

    it('Can read Territories', async () => {
        let res: ResponseData<Territory[]> = await client.get<Territory[]>('/contacts/Territories');
        expect(res.success).toBeTruthy(res.message);
    });

    it('Can read a contacts Territories', async () => {
        let res: ResponseData<Territory[]> = await client.get<Territory[]>('/contacts/8190580/Territories');
        expect(res.success).toBeTruthy(res.message);
    });

    it('Can add a Territory to a contact', async () => {
        const payload = [{ PracticeAreaId: 8677 }];
        let res: ResponseData<Territory[]> = await client.post('/contacts/8190580/Territories', payload);
        expect(res.success).toBeTruthy(res.message);
    });
});