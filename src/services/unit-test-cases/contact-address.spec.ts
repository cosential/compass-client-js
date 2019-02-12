import 'jasmine';
import { ResponseData } from '../..';
import { Contact } from '../../compass-models/contact';
import { ClientConfig } from '../../service-models/client-config';
import { ContactClient } from '../contact-client';
import { TestClientConfig as c } from '../test-client-config';
import { ContactAddress } from './../../compass-models/contact-address';

describe("ContactAddressClient", () => {

    let contactClient: ContactClient = new ContactClient(new ClientConfig(c.firmId, c.username, c.password, c.apiKey, c.compassUrl));
    let aValidContactId: number;
    
    beforeEach(async () => {
        contactClient.config.firmId = c.firmId;
        contactClient.config.username = c.username;
        contactClient.config.password = c.password;
        contactClient.config.apiKey = c.apiKey;
        contactClient.config.compassUrl = c.compassUrl;

        let contacts: ResponseData<Contact[]> = await contactClient.get<Contact[]>('/contacts');
        if(contacts.success) aValidContactId = contacts.result[0].ContactId;
    });

    it("Can fetch addresses for a contact", async () => {
        let addressesUrl: string = '/contacts/' + aValidContactId + '/addresses';
        let res: ResponseData<ContactAddress[]> = await contactClient.get<ContactAddress[]>(addressesUrl);
        expect(res.success).toBeTruthy(res.message);
    });

    it("Can fetch addresses for an invalid id", async () => {
        let addressesUrl: string = '/contacts/5556666/addresses';
        let res: ResponseData<ContactAddress[]> = await contactClient.get<ContactAddress[]>(addressesUrl);
        expect(res.success).toBeFalsy(res.message);
    });

    it("Can fetch office address associated to a contact", async () => {
        let res: ResponseData<ContactAddress> = await contactClient.getContactAddress<ContactAddress>(aValidContactId, 1);
        expect(res.success).toBeTruthy(res.message);
    });

    it("Can fetch home address associated to a contact", async () => {
        let res: ResponseData<ContactAddress> = await contactClient.getContactAddress<ContactAddress>(aValidContactId, 2);
        expect(res.success).toBeTruthy(res.message);
    });

    it("Can fetch office address associated to an invalid id", async () => {
        let res: ResponseData<ContactAddress> = await contactClient.getContactAddress<ContactAddress>(5556666, 1);
        expect(res.success).toBeTruthy(res.message);
    });

    it("Can fetch home address associated to an invalid id", async () => {
        let res: ResponseData<ContactAddress> = await contactClient.getContactAddress<ContactAddress>(5556666, 2);
        expect(res.success).toBeTruthy(res.message);
    });

    it("Can fetch address for an invalid address type", async () => {
        let res: ResponseData<ContactAddress> = await contactClient.getContactAddress<ContactAddress>(aValidContactId, 7);
        expect(res.success).toBeTruthy(res.message);
    });
});