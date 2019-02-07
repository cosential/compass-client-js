import 'jasmine';
import { ResponseData } from '..';
import { ImageClient } from './image-client';
import { Image } from '../compass-models/images/image';
import { Contact } from '../compass-models/contact';
import { Personnel } from '../compass-models/personnel';
import { TestClientConfig as c } from './test-client-config';
import { ClientConfig } from '../service-models/client-config';
import { ContactImageMetadata } from '../compass-models/images/contact-image-metadata';
import { PersonnelImageMetadata } from './../compass-models/images/personnel-image-metadata';

describe("ImageClient", () => {

    let client: ImageClient = new ImageClient(new ClientConfig(c.firmId, c.username, c.password, c.apiKey, c.compassUrl));
    let aValidContactId: number;
    let aValidPersonnelId: number;

    beforeEach(async () => {
        client.config.firmId = c.firmId;
        client.config.username = c.username;
        client.config.password = c.password;
        client.config.apiKey = c.apiKey;
        client.config.compassUrl = c.compassUrl;

        let contacts: ResponseData<Contact[]> = await client.get<Contact[]>('/contacts');
        if(contacts.success) aValidContactId = contacts.result[0].ContactId;

        let personnel: ResponseData<Personnel[]> = await client.get<Personnel[]>('/personnel');
        if(personnel.success) aValidPersonnelId = personnel.result[0].PersonnelId;
    });

    it("Can fetch contact images metadata for a valid id", async () => {
        let res: ResponseData<ContactImageMetadata[]> = await client.getContactImagesMetadata<ContactImageMetadata[]>(aValidContactId);
        expect(res.success).toBeTruthy(res.message);
    });

    it("Can fetch contact images metadata for an invalid id", async () => {
        let res: ResponseData<ContactImageMetadata[]> = await client.getContactImagesMetadata<ContactImageMetadata[]>(5556666);
        expect(res.success).toBeFalsy(res.message);
    });

    it("Can fetch profile picture for a contact", async () => {
        let res: ResponseData<Image> = await client.getContactImage<Image>(aValidContactId);
        expect(res.success).toBeTruthy(res.message);
    });

    it("Can fetch profile picture for a contact", async () => {
        let res: ResponseData<Image> = await client.getContactImage<Image>(aValidContactId, 'profilepicture');
        expect(res.success).toBeTruthy(res.message);
    });

    it("Can fetch front of the business card for a contact", async () => {
        let res: ResponseData<Image> = await client.getContactImage<Image>(aValidContactId, 'cardfront');
        expect(res.success).toBeTruthy(res.message);
    });

    it("Can fetch back of the business card for a contact", async () => {
        let res: ResponseData<Image> = await client.getContactImage<Image>(aValidContactId, 'cardback');
        expect(res.success).toBeTruthy(res.message);
    });

    it("Can fetch picture for an invalid image type", async () => {
        //returns profile picture by default or for an invalid image type
        let res: ResponseData<Image> = await client.getContactImage<Image>(aValidContactId, 'iaminvalid');
        expect(res.success).toBeTruthy(res.message);
    });

    it("Can fetch personnel images metadata for a valid id", async () => {
        let res: ResponseData<PersonnelImageMetadata[]> = await client.getPersonnelImagesMetadata<PersonnelImageMetadata[]>(aValidPersonnelId);
        expect(res.success).toBeTruthy(res.message);
    });

    it("Can fetch personnel images metadata for an invalid id", async () => {
        let res: ResponseData<PersonnelImageMetadata[]> = await client.getPersonnelImagesMetadata<PersonnelImageMetadata[]>(5556666);
        expect(res.success).toBeFalsy(res.message);
    });

    it("Can fetch primary photo for a personnel", async () => {
        let res: ResponseData<Image> = await client.getPersonnelImage<Image>(aValidPersonnelId);
        expect(res.success).toBeTruthy(res.message);
    });

    it("Can fetch primary photo for a personnel", async () => {
        let res: ResponseData<Image> = await client.getPersonnelImage<Image>(aValidPersonnelId, true);
        expect(res.success).toBeTruthy(res.message);
    });

    it("Can fetch recent photo for a personnel", async () => {
        let res: ResponseData<Image> = await client.getPersonnelImage<Image>(aValidPersonnelId, false);
        expect(res.success).toBeTruthy(res.message);
    });

    it("Can fetch photo for an invalid id", async () => {
        let res: ResponseData<Image> = await client.getPersonnelImage<Image>(5556666);
        //returns success as true with resultset as null
        expect(res.success).toBeTruthy(res.message);
    });
});