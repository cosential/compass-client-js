import 'jasmine';
import { ResponseData } from '../..';
import { ClientConfig } from '../../service-models/client-config';
import { TestClientConfig as c } from '../test-client-config';
import { Company } from './../../compass-models/company';
import { CompanyAddress } from './../../compass-models/company-address';
import { CompanyClient } from './../company-client';

describe("CompanyAddressClient", () => {

    let companyClient: CompanyClient = new CompanyClient(new ClientConfig(c.firmId, c.username, c.password, c.apiKey, c.compassUrl));
    let aValidCompanyId: number;

    beforeEach(async () => {
        companyClient.config.firmId = c.firmId;
        companyClient.config.username = c.username;
        companyClient.config.password = c.password;
        companyClient.config.apiKey = c.apiKey;
        companyClient.config.compassUrl = c.compassUrl;

        jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;

        let companies: ResponseData<Company[]> = await companyClient.get<Company[]>('/companies');
        if (companies.success) aValidCompanyId = companies.result[0].CompanyId;
    });

    it("Can fetch addresses for a company", async () => {
        let addressesUrl: string = '/companies/' + aValidCompanyId + '/addresses';
        let res: ResponseData<CompanyAddress[]> = await companyClient.get<CompanyAddress[]>(addressesUrl);
        expect(res.success).toBeTruthy(res.message);
    });

    it("Can fetch addresses for an invalid id", async () => {
        let addressesUrl: string = '/companies/5556666/addresses';
        let res: ResponseData<CompanyAddress[]> = await companyClient.get<CompanyAddress[]>(addressesUrl);
        expect(res.success).toBeFalsy(res.message);
    });

    it("Can fetch default/primary address associated to a company", async () => {
        let res: ResponseData<CompanyAddress> = await companyClient.getCompanyAddress<CompanyAddress>(aValidCompanyId);
        expect(res.success).toBeTruthy(res.message);
    });

    it("Can fetch address associated to a company", async () => {
        let res: ResponseData<CompanyAddress> = await companyClient.getCompanyAddress<CompanyAddress>(aValidCompanyId);
        expect(res.success).toBeTruthy(res.message);
    });

    it("Can fetch address associated to an invalid id", async () => {
        let res: ResponseData<CompanyAddress> = await companyClient.getCompanyAddress<CompanyAddress>(5556666);
        expect(res.success).toBeTruthy(res.message);
    });
});