import 'jasmine';
import { Client } from '../client';
import { ClientConfig } from '../../service-models/client-config';
import { ResponseData } from '../../interfaces/response-data';
import { TestClientConfig as c } from '../test-client-config';
import { ContactRelationship } from '../../compass-models/contact/contact-relationship';

describe("ContactRelationshipClient", () => {

    let client: Client = new Client(new ClientConfig(c.firmId, c.username, c.password, c.apiKey, c.compassUrl));
    let aValidRelationshipId: number;

    beforeEach(async () => {
        client.config.firmId = c.firmId;
        client.config.username = c.username;
        client.config.password = c.password;
        client.config.apiKey = c.apiKey;
        client.config.compassUrl = c.compassUrl;
    });

    it('Can read a contacts relationships', async () => {
        let res: ResponseData<ContactRelationship[]> = await client.get<ContactRelationship[]>('/contacts/8190730/relationships');
        expect(res.success).toBeTruthy(res.message);
    });

    it('Can add a relationship to a contact', async () => {
        const payload = [{ UserId: 1150257 }];
        let res: ResponseData<ContactRelationship[]> = await client.post('/contacts/8190730/relationships', payload);
        expect(res.success).toBeTruthy(res.message);
    });
});
