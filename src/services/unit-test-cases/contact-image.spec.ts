import 'jasmine';
import { ResponseData } from '../..';
import { Contact } from '../../compass-models/contact';
import { ContactImageMetadata } from '../../compass-models/images/contact-image-metadata';
import { Image } from '../../compass-models/images/image';
import { ClientConfig } from '../../service-models/client-config';
import { ContactClient } from '../contact-client';
import { TestClientConfig as c } from '../test-client-config';

describe("ContactImageClient", () => {

    let contactClient: ContactClient = new ContactClient(new ClientConfig(c.firmId, c.username, c.password, c.apiKey, c.compassUrl));
    let aValidContactId: number;
    
    beforeEach(async () => {
        contactClient.config.firmId = c.firmId;
        contactClient.config.username = c.username;
        contactClient.config.password = c.password;
        contactClient.config.apiKey = c.apiKey;
        contactClient.config.compassUrl = c.compassUrl;

        jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;

        let contacts: ResponseData<Contact[]> = await contactClient.get<Contact[]>('/contacts');
        if(contacts.success) aValidContactId = contacts.result[0].ContactId;
    });

    it("Can fetch contact images metadata for a valid id", async () => {
        let metadataUrl: string = '/contacts/' + aValidContactId + '/images';
        let res: ResponseData<ContactImageMetadata[]> = await contactClient.get<ContactImageMetadata[]>(metadataUrl);
        expect(res.success).toBeTruthy(res.message);
    });

    it("Can fetch contact images metadata for an invalid id", async () => {
        let metadataUrl: string = '/contacts/5556666/images';
        let res: ResponseData<ContactImageMetadata[]> = await contactClient.get<ContactImageMetadata[]>(metadataUrl);
        expect(res.success).toBeFalsy(res.message);
    });

    it("Can fetch profile picture for a contact", async () => {
        let res: ResponseData<Image> = await contactClient.getContactImages<Image>(aValidContactId, 2);
        expect(res.success).toBeTruthy(res.message);
    });

    it("Can fetch front of the business card for a contact", async () => {
        let res: ResponseData<Image> = await contactClient.getContactImages<Image>(aValidContactId, 3);
        expect(res.success).toBeTruthy(res.message);
    });

    it("Can fetch back of the business card for a contact", async () => {
        let res: ResponseData<Image> = await contactClient.getContactImages<Image>(aValidContactId, 4);
        expect(res.success).toBeTruthy(res.message);
    });

    it("Can fetch all the images for a contact", async () => {
        let res: ResponseData<any> = await contactClient.getContactImages<any>(aValidContactId);
        expect(res.success).toBeTruthy(res.message);
    });

    it("Can fetch all the images for a contact", async () => {
        let res: ResponseData<any> = await contactClient.getContactImages<any>(aValidContactId, 1);
        expect(res.success).toBeTruthy(res.message);
    });

    it("Can fetch all the images for an invalid image type", async () => {
        //returns all images by default or for an invalid image type
        let res: ResponseData<Image> = await contactClient.getContactImages<Image>(aValidContactId, 8);
        expect(res.success).toBeTruthy(res.message);
    });
});