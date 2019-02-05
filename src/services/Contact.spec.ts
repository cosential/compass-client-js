import 'jasmine';
import { Client } from './client';
import { ClientConfig } from '../service-models/client-config';
import { Contact } from "../compass-models/contact";
import { TestClientConfig as c } from './test-client-config';
import { IResponse } from '..';

describe("ContactClient", () => {

    let client: Client = new Client(new ClientConfig(c.firmId, c.username, c.password, c.apiKey, c.compassUrl));
    let aValidContactId: number = 5527672;

    beforeEach(() => {
        client.config.firmId = c.firmId;
        client.config.username = c.username;
        client.config.password = c.password;
        client.config.apiKey = c.apiKey;
        client.config.compassUrl = c.compassUrl;
    });

    it("Can read contacts", async () => {
        let res: IResponse<Contact[]> = await client.get<Contact[]>('/contacts');
        if(res.success) aValidContactId = res.result[0].ContactId;
        expect(res.success).toBeTruthy(res.message);
    });

    it("Can read contacts for incorrect url", async () => {
        let mistypedUrls: string[] = ['/contact', '/contactss', '/contatcs'];
        mistypedUrls.forEach(async (index) => {       
            let res: IResponse<Contact[]> = await client.get<Contact[]>(index);
            expect(res.success).toBeFalsy(res.message);
        });
    });

    it("Can read a contact", async () => {
        //In case this function runs prior to getting a valid id, 5527672 acts as a test id from UAT Env
        let url = '/contacts/' + aValidContactId;
        let res: IResponse<Contact> = await client.get<Contact>(url);
        expect(res.success).toBeTruthy(res.message);
    });

    it("Can read a contact for invalid id", async () => {
        let url: string = '/contacts/5555444';
        let res: IResponse<Contact> = await client.get<Contact>(url);
        expect(res.success).toBeFalsy(res.message);
    });

    it("Can add contact/s with valid data", async () => {
        //In case this function runs prior to getting a valid id, 5527672 acts as a test id from UAT Env
        let url = '/contacts/' + aValidContactId;
        let resGet: IResponse<Contact> = await client.get<Contact>(url);

        resGet.result.FirstName = "John";
        resGet.result.LastName = "Doe";
        let exContact: Contact[] = [resGet.result];

        let resPost: IResponse<Contact[]> = await client.post<Contact[]>('/contacts', exContact);
        expect(resPost.success).toBeTruthy(resPost.message);
    });

    it("Can add contact/s with invalid data", async () => {
        //In case this function runs prior to getting a valid id, 5527672 acts as a test id from UAT Env
        let url = '/contacts/' + aValidContactId;
        let resGet: IResponse<Contact> = await client.get<Contact>(url);

        //not providing a mandatory field
        resGet.result.LastName = null;
        resGet.result.Email = 'jdoe@cosential.com';
        let exContact: Contact[] = [resGet.result];

        let resPost: IResponse<Contact[]> = await client.post<Contact[]>('/contacts', exContact);
        expect(resPost.success).toBeFalsy(resPost.message);
    });

    it("Can update contact with valid data", async () => {
        //In case this function runs prior to getting a valid id, 5527672 acts as a test id from UAT Env
        let urlGet = '/contacts/' + aValidContactId;
        let resGet: IResponse<Contact> = await client.get<Contact>(urlGet);

        resGet.result.Title = "Any random title";
        resGet.result.IsActive = 0;
        resGet.result.ROW_VERSION = "";

        let exContact: Contact = resGet.result;
        let urlPut = '/contacts/' + resGet.result.ContactId;

        let resPut: IResponse<Contact> = await client.put<Contact>(urlPut, exContact);
        expect(resPut.success).toBeTruthy(resPut.message);
    });

    it("Can update contact with invalid data", async () => {
        //In case this function runs prior to getting a valid id, 5527672 acts as a test id from UAT Env
        let urlGet = '/contacts/' + aValidContactId;
        let resGet: IResponse<Contact> = await client.get<Contact>(urlGet);

        resGet.result.Notes = "A random note";
        //Not clearing off the existing row_version
        
        let exContact: Contact = resGet.result;
        let urlPut = '/contacts/' + resGet.result.ContactId;

        let resPut: IResponse<Contact> = await client.put<Contact>(urlPut, exContact);
        expect(resPut.success).toBeFalsy(resPut.message);
    });

    it("Can delete a contact with valid id", async () => {
        //In case this function runs prior to getting a valid id, 5527672 acts as a test id from UAT Env
        let url = '/contacts/' + aValidContactId;
        let res: IResponse<Contact> = await client.delete<Contact>(url);
        expect(res.success).toBeTruthy(res.message);
    });

    it("Can delete a contact with invalid id", async () => {
        let url: string = '/contacts/5555999';
        let res: IResponse<Contact> = await client.delete<Contact>(url);
        expect(res.success).toBeFalsy(res.message);
    });
    
    it("Search contact/s using valid params", async () => {
        let queryParams = {
            "BusinessEmailAddress": "jdoe@cosential.com"//,
            //"FirstName": "John"
        };

        let res: IResponse<Contact[]> = await client.search<Contact[]>('/contacts', queryParams);
        expect(res.success).toBeTruthy(res.message);
    });

    it("Search contact/s for invalid params", async () => {
        let queryParams = {
            "test": "abc"
        };

        let res: IResponse<Contact[]> = await client.search<Contact[]>('/contacts', queryParams);
        //return all or none on empty or invalid params
        expect(res.success).toBeTruthy(res.message);
    });
});