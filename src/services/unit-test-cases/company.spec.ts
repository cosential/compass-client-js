import 'jasmine';
import { ResponseData } from '../..';
import { Company } from '../../compass-models/company';
import { ClientConfig } from '../../service-models/client-config';
import { Client } from '../client';
import { TestClientConfig as c } from '../test-client-config';

describe("CompanyClient", () => {

    let client: Client = new Client(new ClientConfig(c.firmId, c.username, c.password, c.apiKey, c.compassUrl));
    let aValidCompanyId: number;

    beforeEach(async () => {
        client.config.firmId = c.firmId;
        client.config.username = c.username;
        client.config.password = c.password;
        client.config.apiKey = c.apiKey;
        client.config.compassUrl = c.compassUrl;

        let res: ResponseData<Company[]> = await client.get<Company[]>('/companies');
        if(res.success) aValidCompanyId = res.result[0].CompanyId;
    });

    it("Can read companies", async () => {
        let res: ResponseData<Company[]> = await client.get<Company[]>('/companies');
        expect(res.success).toBeTruthy(res.message);
    });

    it("Can read companies for incorrect url", async () => {
        let mistypedUrls: string[] = ['/company', '/companiess', '/companys'];
        mistypedUrls.forEach(async (index) => {       
            let res: ResponseData<Company[]> = await client.get<Company[]>(index);
            expect(res.success).toBeFalsy(res.message);
        });
    });

    it("Can read a company", async () => {
        let url = '/companies/' + aValidCompanyId;
        let res: ResponseData<Company> = await client.get<Company>(url);
        expect(res.success).toBeTruthy(res.message);
    });

    it("Can read a company for invalid id", async () => {
        let url: string = '/companies/5555444';
        let res: ResponseData<Company> = await client.get<Company>(url);
        expect(res.success).toBeFalsy(res.message);
    });

    it("Can add company/s with valid data", async () => {
        let url = '/companies/' + aValidCompanyId;
        let resGet: ResponseData<Company> = await client.get<Company>(url);

        resGet.result.Name = 'Cosential, Inc.';
        resGet.result.Website = 'cosential.com';
        let exCompany: Company[] = [resGet.result];

        let resPost: ResponseData<Company[]> = await client.post<Company[]>('/companies', exCompany);
        expect(resPost.success).toBeTruthy(resPost.message);
    });

    it("Can add company/s with invalid data", async () => {
        let url = '/companies/' + aValidCompanyId;
        let resGet: ResponseData<Company> = await client.get<Company>(url);

        //not providing a mandatory field
        resGet.result.Name = null;
        resGet.result.Acronym = 'Cos';
        let exCompany: Company[] = [resGet.result];

        let resPost: ResponseData<Company[]> = await client.post<Company[]>('/companies', exCompany);
        expect(resPost.success).toBeFalsy(resPost.message);
    });

    it("Can update company with valid data", async () => {
        let urlGet = '/companies/' + aValidCompanyId;
        let resGet: ResponseData<Company> = await client.get<Company>(urlGet);

        resGet.result.Acronym = 'Cos';
        resGet.result.Notes = 'A random note';
        resGet.result.ROW_VERSION = '';

        let exCompany: Company = resGet.result;
        let urlPut = '/companies/' + resGet.result.CompanyId;

        let resPut: ResponseData<Company> = await client.put<Company>(urlPut, exCompany);
        expect(resPut.success).toBeTruthy(resPut.message);
    });

    it("Can update company with invalid data", async () => {
        let urlGet = '/companies/' + aValidCompanyId;
        let resGet: ResponseData<Company> = await client.get<Company>(urlGet);

        resGet.result.Notes = "A random note";
        //Not clearing off the existing row_version
        
        let exCompany: Company = resGet.result;
        let urlPut = '/companies/' + resGet.result.CompanyId;

        let resPut: ResponseData<Company> = await client.put<Company>(urlPut, exCompany);
        expect(resPut.success).toBeFalsy(resPut.message);
    });

    it("Can delete a company with valid id", async () => {
        let url = '/companies/' + aValidCompanyId;
        let res: ResponseData<Company> = await client.delete<Company>(url);
        expect(res.success).toBeTruthy(res.message);
    });

    it("Can delete a company with invalid id", async () => {
        let url: string = '/companies/5555999';
        let res: ResponseData<Company> = await client.delete<Company>(url);
        expect(res.success).toBeFalsy(res.message);
    });
    
    it("Search company/s using valid params", async () => {
        let searchQuery = 'Name:Cosential, Inc.';
        let res: ResponseData<Company[]> = await client.search<Company[]>('/companies', searchQuery);
        expect(res.success).toBeTruthy(res.message);
    });

    it("Search company/s for invalid params", async () => {
        let searchQuery = 'test:abc';
        let res: ResponseData<Company[]> = await client.search<Company[]>('/companies', searchQuery);
        //return all or none on empty or invalid params
        expect(res.success).toBeTruthy(res.message);
    });
});