import 'jasmine';
import { Client } from '../client';
import { ClientConfig } from '../../service-models/client-config';
import { ResponseData } from '../../interfaces/response-data';
import { TestClientConfig as c } from '../test-client-config';
import { Studio } from '../../compass-models/studio';

describe("StudioClient", () => {

    let client: Client = new Client(new ClientConfig(c.firmId, c.username, c.password, c.apiKey, c.compassUrl));
    let aValidStudioId: number;

    beforeEach(async () => {
        client.config.firmId = c.firmId;
        client.config.username = c.username;
        client.config.password = c.password;
        client.config.apiKey = c.apiKey;
        client.config.compassUrl = c.compassUrl;

        let res: ResponseData<Studio[]> = await client.get<Studio[]>('/contacts/studios');
        if(res.success) aValidStudioId = res.result[0].StudioId;
    });

    it('Can read studios', async () => {
        let res: ResponseData<Studio[]> = await client.get<Studio[]>('/contacts/studios');
        expect(res.success).toBeTruthy(res.message);
    });

    it('Can read a contacts studios', async () => {
        let res: ResponseData<Studio[]> = await client.get<Studio[]>('/contacts/8190580/studios');
        expect(res.success).toBeTruthy(res.message);
    });

    it('Can add a studio to a contact', async () => {
        const payload = [{ StudioId: 19324 }];
        let res: ResponseData<Studio[]> = await client.post('/contacts/8190580/studios', payload);
        expect(res.success).toBeTruthy(res.message);
    });
});