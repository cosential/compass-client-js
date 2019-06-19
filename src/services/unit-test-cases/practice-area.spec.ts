import 'jasmine';
import { Client } from '../client';
import { ClientConfig } from '../../service-models/client-config';
import { ResponseData } from '../../interfaces/response-data';
import { TestClientConfig as c } from '../test-client-config';
import { PracticeArea } from '../../compass-models/practice-area';


describe("PracticeAreaClient", () => {

    let client: Client = new Client(new ClientConfig(c.firmId, c.username, c.password, c.apiKey, c.compassUrl));
    let aValidPracticeAreaId: number;

    beforeEach(async () => {
        client.config.firmId = c.firmId;
        client.config.username = c.username;
        client.config.password = c.password;
        client.config.apiKey = c.apiKey;
        client.config.compassUrl = c.compassUrl;

        let res: ResponseData<PracticeArea[]> = await client.get<PracticeArea[]>('/contacts/PracticeAreas');
        if(res.success) aValidPracticeAreaId = res.result[0].PracticeAreaId;
    });

    it('Can read offices', async () => {
        let res: ResponseData<PracticeArea[]> = await client.get<PracticeArea[]>('/contacts/PracticeAreas');
        expect(res.success).toBeTruthy(res.message);
    });

    it('Can read a contacts offices', async () => {
        let res: ResponseData<PracticeArea[]> = await client.get<PracticeArea[]>('/contacts/8190580/PracticeAreas');
        expect(res.success).toBeTruthy(res.message);
    });

    it('Can add a office to a contact', async () => {
        const payload = [{ PracticeAreaId: 8677 }];
        let res: ResponseData<PracticeArea[]> = await client.post('/contacts/8190580/PracticeAreas', payload);
        expect(res.success).toBeTruthy(res.message);
    });
});