import 'jasmine';
import { Client } from '../client';
import { ClientConfig } from '../../service-models/client-config';
import { ResponseData } from '../../interfaces/response-data';
import { TestClientConfig as c } from '../test-client-config';
import { ContactRelationshipOption } from '../../compass-models/contact/contact-relationship-option';

describe("ContactRelationshipOptionClient", () => {

    let client: Client = new Client(new ClientConfig(c.firmId, c.username, c.password, c.apiKey, c.compassUrl));
    let aValidRelationshipId: number;

    beforeEach(async () => {
        client.config.firmId = c.firmId;
        client.config.username = c.username;
        client.config.password = c.password;
        client.config.apiKey = c.apiKey;
        client.config.compassUrl = c.compassUrl;
    });

    it('Can read contacts relationship options', async () => {
        let res: ResponseData<ContactRelationshipOption[]> = await client.get<ContactRelationshipOption[]>('/contacts/relationships/relationship');
        expect(res.success).toBeTruthy(res.message);
    });
});
