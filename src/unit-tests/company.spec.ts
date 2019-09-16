import 'jasmine';
import * as uuid from 'uuid/v4';
import { Company } from '../compass-models/company/company';
import { CompanyAddress } from '../compass-models/company/company-address';
import { CompanyLSO } from '../compass-models/company/company-lso';
import { CompanyNAICS } from '../compass-models/company/company-naics';
import { CompanySDBT } from '../compass-models/company/company-sdbt';
import { CompanySIC } from '../compass-models/company/company-sic';
import { CompanyType } from '../compass-models/company/company-type';
import { Office } from '../compass-models/firmorgs/office';
import { PracticeArea } from '../compass-models/firmorgs/practice-area';
import { Social } from '../compass-models/shared-subitems/social';
import { Studio } from '../compass-models/firmorgs/studio';
import { Territory } from '../compass-models/firmorgs/territory';
import { ResponseData } from '../interfaces/response-data';
import { ClientConfig } from '../service-models/client-config';
import { CompanyClient } from '../services/company-client';
import { Division } from '../compass-models/firmorgs/division';
import { Image } from './../compass-models/images/image';
import { TestClientConfig as c } from './test-client-config';
import { testImage } from './test-data';

describe('CompanyClient', () => {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;

  let client: CompanyClient = new CompanyClient(
    new ClientConfig(
      c.firmId,
      c.username,
      c.password,
      c.apiKey,
      c.compassUrl
    )
  );
  let url: string;
  let company: Company;

  beforeAll(async () => {
    company = < Company > {
      Name: 'UTCompany ' + uuid()
    };
    url = '/companies';
    let createRes: ResponseData < Company[] > = await client.post < Company[] > (url, [company]);
    expect(createRes.success).withContext('successful create ' + url).toBe(true);
    expect(createRes.result).withContext('non-null create result').not.toBeNull();
    expect(createRes.result.length).withContext('correct create result size').toEqual(1);
    expect(createRes.result[0].Name).withContext('correct data in create result').toEqual(company.Name);

    company = createRes.result[0];
  })

  afterAll(async () => {
    url = '/companies/' + company.CompanyId;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);
  })

  // Main type

  it('should perform Company CRUD', async () => {
    url = '/companies/' + company.CompanyId + '/_updatesearchindex';
    let updateSearchIndexRes: ResponseData < any > = await client.get < Company > (url);
    expect(updateSearchIndexRes.success).withContext('successful search index update ' + url).toBe(true);

    url = '/companies';
    let readAllRes: ResponseData < Company[] > = await client.get < Company[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);

    url = '/companies/' + company.CompanyId;
    let readRes: ResponseData < Company > = await client.get < Company > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result.Name).withContext('correct read result data').toEqual(company.Name);

    url = '/companies';
    let searchQuery = 'Name:' + company.Name;
    let searchRes: ResponseData < Company[] > = await client.search < Company[] > (url, searchQuery);
    expect(searchRes.success).withContext('successful search ' + url + ' ' + searchQuery).toBe(true);
    expect(searchRes.result).withContext('non-null search result').not.toBeNull();
    expect(searchRes.result.length).withContext('correct search result size').toEqual(1);
    expect(searchRes.result[0].CompanyId).withContext('correct search result data').toEqual(company.CompanyId);

    url = '/companies/' + company.CompanyId;
    company.Acronym = 'UT';
    company.ROW_VERSION = null;
    let updateRes: ResponseData < Company > = await client.put < Company > (url, company);
    expect(updateRes.success).withContext('successful update ' + url).toBe(true);
    expect(updateRes.result.Acronym).withContext('correct update result data').toEqual(company.Acronym);
  });

  // Images

  it('should perform Company Image CRUD', async () => {
    url = '/images/companies/' + company.CompanyId;
    let image: Image = {
      ContentType: 'image/jpeg',
      Data: testImage
    };
    let addRes: ResponseData < Image > = await client.post < Image > (url, image);
    expect(addRes.success).withContext('successful add ' + url).toBe(true);
  });

  // Subitems

  it('should perform CompanyAddress CRUD', async () => {
    url = '/companies/' + company.CompanyId + '/addresses';
    let address: CompanyAddress = < CompanyAddress > {
      AddressTypeName: 'Office',
      CountryName: 'United States',
      defaultInd: true
    };
    let createRes: ResponseData < CompanyAddress[] > = await client.post < CompanyAddress[] > (url, [address]);
    expect(createRes.success).withContext('successful create ' + url).toBe(true);
    expect(createRes.result).withContext('non-null create result').not.toBeNull();
    expect(createRes.result.length).withContext('correct create result size').toEqual(1);
    expect(createRes.result[0].CountryName).withContext('correct create result data').toEqual(address.CountryName);
    address = createRes.result[0];

    url = '/companies/' + company.CompanyId + '/addresses';
    let readAllRes: ResponseData < CompanyAddress[] > = await client.get < CompanyAddress[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toEqual(2);

    let readRes: ResponseData < CompanyAddress > = await client.getCompanyAddress(company.CompanyId);
    expect(readRes.success).withContext('successful read default address via getCompanyAddress').toBe(true);
    expect(readRes.result.defaultInd).withContext('correct read result data').toEqual(true);
    expect(readRes.result.AddressTypeName).withContext('correct read result data').toEqual(address.AddressTypeName);
    // TODO: CompanyAddress post currently returns invalid id, so we have to re-assign here to get the
    // CompanyAddress object with a valid id so we can perform an update in the next step
    address = readRes.result;

    // TODO: CompanyAddress put currently broken on server side. Uncomment when fixed.
    // url = '/companies/' + company.CompanyId + '/addresses/' + address.AddressID;
    // address.Address1 = '110 Inner Campus Drive';
    // let updateRes: ResponseData < CompanyAddress > = await client.put < CompanyAddress > (url, address);
    // expect(updateRes.success).withContext('successful update ' + url).toBe(true);
    // expect(updateRes.result.Address1).withContext('correct data in update result').toEqual(address.Address1);

    url = '/companies/' + company.CompanyId + '/addresses/' + address.AddressID;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);
  });

  it('should perform CompanyLSO CRUD', async () => {
    url = '/companies/legalstructure';
    let readAllRes: ResponseData < CompanyLSO[] > = await client.get < CompanyLSO[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let companyLSOs: CompanyLSO[] = readAllRes.result;

    url = '/companies/' + company.CompanyId + '/legalstructure';
    let addRes: ResponseData < CompanyLSO[] > = await client.post < CompanyLSO[] > (url, [companyLSOs[0]]);
    expect(addRes.success).withContext('successful add ' + url).toBe(true);
    expect(addRes.result).withContext('non-null add result').not.toBeNull();
    expect(addRes.result.length).withContext('correct add result size').toEqual(1);
    expect(addRes.result[0].LSOID).withContext('correct add result data').toEqual(companyLSOs[0].LSOID);

    let readRes: ResponseData < CompanyLSO[] > = await client.get < CompanyLSO[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.length).withContext('correct read result size').toEqual(1);
    expect(readRes.result[0].LSOID).withContext('correct read result data').toEqual(companyLSOs[0].LSOID);

    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);
  });

  it('should perform CompanyNAICS CRUD', async () => {
    url = '/companies/naics';
    let readAllRes: ResponseData < CompanyNAICS[] > = await client.get < CompanyNAICS[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let companyNAICSs: CompanyNAICS[] = readAllRes.result;

    url = '/companies/' + company.CompanyId + '/naics';
    let addRes: ResponseData < CompanyNAICS[] > = await client.post < CompanyNAICS[] > (url, companyNAICSs);
    expect(addRes.success).withContext('successful add ' + url).toBe(true);
    expect(addRes.result).withContext('non-null add result').not.toBeNull();
    expect(addRes.result.length).withContext('correct add result size').toEqual(companyNAICSs.length);

    let readRes: ResponseData < CompanyNAICS[] > = await client.get < CompanyNAICS[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.length).withContext('correct read result size').toEqual(companyNAICSs.length);

    url = url + '/' + companyNAICSs[0].Id;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/companies/' + company.CompanyId + '/naics';
    let deleteAllRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteAllRes.success).withContext('successful delete all ' + url).toBe(true);
  });

  it('should perform CompanySDBT CRUD', async () => {
    url = '/companies/sdbt';
    let readAllRes: ResponseData < CompanySDBT[] > = await client.get < CompanySDBT[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let companySDBTs: CompanySDBT[] = readAllRes.result;

    url = '/companies/' + company.CompanyId + '/sdbt';
    let addRes: ResponseData < CompanySDBT[] > = await client.post < CompanySDBT[] > (url, companySDBTs);
    expect(addRes.success).withContext('successful add ' + url).toBe(true);
    expect(addRes.result).withContext('non-null add result').not.toBeNull();
    expect(addRes.result.length).withContext('correct add result size').toEqual(companySDBTs.length);

    let readRes: ResponseData < CompanySDBT[] > = await client.get < CompanySDBT[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.length).withContext('correct read result size').toEqual(companySDBTs.length);

    url = url + '/' + companySDBTs[0].Id;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/companies/' + company.CompanyId + '/sdbt';
    let deleteAllRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteAllRes.success).withContext('successful delete all ' + url).toBe(true);
  });

  it('should perform CompanySIC CRUD', async () => {
    url = '/companies/sic';
    let readAllRes: ResponseData < CompanySIC[] > = await client.get < CompanySIC[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let companySICs: CompanySIC[] = readAllRes.result;

    url = '/companies/' + company.CompanyId + '/sic';
    let addRes: ResponseData < CompanySIC[] > = await client.post < CompanySIC[] > (url, companySICs);
    expect(addRes.success).withContext('successful add ' + url).toBe(true);
    expect(addRes.result).withContext('non-null add result').not.toBeNull();
    expect(addRes.result.length).withContext('correct add result size').toEqual(companySICs.length);

    let readRes: ResponseData < CompanySIC[] > = await client.get < CompanySIC[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.length).withContext('correct read result size').toEqual(companySICs.length);

    url = url + '/' + companySICs[0].Id;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/companies/' + company.CompanyId + '/sic';
    let deleteAllRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteAllRes.success).withContext('successful delete all ' + url).toBe(true);
  });

  it('should perform CompanyType CRUD', async () => {
    url = '/companies/companytypes';
    let readAllRes: ResponseData < CompanyType[] > = await client.get < CompanyType[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let companyTypes: CompanyType[] = readAllRes.result;

    url = '/companies/' + company.CompanyId + '/companytypes';
    let addRes: ResponseData < CompanyType[] > = await client.post < CompanyType[] > (url, companyTypes);
    expect(addRes.success).withContext('successful add ' + url).toBe(true);
    expect(addRes.result).withContext('non-null add result').not.toBeNull();
    expect(addRes.result.length).withContext('correct add result size').toEqual(companyTypes.length);

    let readRes: ResponseData < CompanyType[] > = await client.get < CompanyType[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.length).withContext('correct read result size').toEqual(companyTypes.length);

    url = url + '/' + companyTypes[0].CompanyTypeID;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/companies/' + company.CompanyId + '/companytypes';
    let deleteAllRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteAllRes.success).withContext('successful delete all ' + url).toBe(true);
  });

  it('should perform Company Social CRUD', async () => {
    let social: Social = < Social > {
      SocialNetworkId: 17,
      SocialNetworkName: 'Linkedin',
      Url: 'https://linkedin.com'
    };
    url = '/companies/' + company.CompanyId + '/social';
    let addRes: ResponseData < Social[] > = await client.post < Social[] > (url, [social]);
    expect(addRes.success).withContext('successful add ' + url).toBe(true);
    expect(addRes.result).withContext('non-null add result').not.toBeNull();
    expect(addRes.result.length).withContext('correct add result size').toEqual(1);

    let readRes: ResponseData < Social[] > = await client.get < Social[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.length).withContext('correct read result size').toEqual(1);
  })

  // Firm Orgs

  it('should perform Company Division CRUD', async () => {
    url = '/companies/divisions';
    let readAllRes: ResponseData < Division[] > = await client.get < Division[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let companyDivisions: Division[] = readAllRes.result;

    url = '/companies/' + company.CompanyId + '/divisions';
    let addRes: ResponseData < Division[] > = await client.post < Division[] > (url, companyDivisions);
    expect(addRes.success).withContext('successful add ' + url).toBe(true);
    expect(addRes.result).withContext('non-null add result').not.toBeNull();
    expect(addRes.result.length).withContext('correct add result size').toEqual(companyDivisions.length);

    let readRes: ResponseData < Division[] > = await client.get < Division[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.length).withContext('correct read result size').toEqual(companyDivisions.length);

    url = url + '/' + companyDivisions[0].DivisionID;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/companies/' + company.CompanyId + '/divisions';
    let deleteAllRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteAllRes.success).withContext('successful delete all ' + url).toBe(true);
  });

  it('should perform Company Office CRUD', async () => {
    url = '/companies/offices';
    let readAllRes: ResponseData < Office[] > = await client.get < Office[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let companyOffices: Office[] = readAllRes.result;

    url = '/companies/' + company.CompanyId + '/offices';
    let addRes: ResponseData < Office[] > = await client.post < Office[] > (url, companyOffices);
    expect(addRes.success).withContext('successful add ' + url).toBe(true);
    expect(addRes.result).withContext('non-null add result').not.toBeNull();
    expect(addRes.result.length).withContext('correct add result size').toEqual(companyOffices.length);

    let readRes: ResponseData < Office[] > = await client.get < Office[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.length).withContext('correct read result size').toEqual(companyOffices.length);

    url = url + '/' + companyOffices[0].OfficeID;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/companies/' + company.CompanyId + '/offices';
    let deleteAllRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteAllRes.success).withContext('successful delete all ' + url).toBe(true);
  });

  it('should perform Company PracticeArea CRUD', async () => {
    url = '/companies/practiceareas';
    let readAllRes: ResponseData < PracticeArea[] > = await client.get < PracticeArea[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let companyPracticeAreas: PracticeArea[] = readAllRes.result;

    url = '/companies/' + company.CompanyId + '/practiceareas';
    let addRes: ResponseData < PracticeArea[] > = await client.post < PracticeArea[] > (url, companyPracticeAreas);
    expect(addRes.success).withContext('successful add ' + url).toBe(true);
    expect(addRes.result).withContext('non-null add result').not.toBeNull();
    expect(addRes.result.length).withContext('correct add result size').toEqual(companyPracticeAreas.length);

    let readRes: ResponseData < PracticeArea[] > = await client.get < PracticeArea[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.length).withContext('correct read result size').toEqual(companyPracticeAreas.length);

    url = url + '/' + companyPracticeAreas[0].PracticeAreaId;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/companies/' + company.CompanyId + '/practiceareas';
    let deleteAllRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteAllRes.success).withContext('successful delete all ' + url).toBe(true);
  });

  it('should perform Company Studio CRUD', async () => {
    url = '/companies/studios';
    let readAllRes: ResponseData < Studio[] > = await client.get < Studio[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let companyStudios: Studio[] = readAllRes.result;

    url = '/companies/' + company.CompanyId + '/studios';
    let addRes: ResponseData < Studio[] > = await client.post < Studio[] > (url, companyStudios);
    expect(addRes.success).withContext('successful add ' + url).toBe(true);
    expect(addRes.result).withContext('non-null add result').not.toBeNull();
    expect(addRes.result.length).withContext('correct add result size').toEqual(companyStudios.length);

    let readRes: ResponseData < Studio[] > = await client.get < Studio[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.length).withContext('correct read result size').toEqual(companyStudios.length);

    url = url + '/' + companyStudios[0].StudioId;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/companies/' + company.CompanyId + '/studios';
    let deleteAllRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteAllRes.success).withContext('successful delete all ' + url).toBe(true);
  });

  it('should perform Company Territory CRUD', async () => {
    url = '/companies/Territories';
    let readAllRes: ResponseData < Territory[] > = await client.get < Territory[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let companyTerritories: Territory[] = readAllRes.result;

    url = '/companies/' + company.CompanyId + '/territories';
    let addRes: ResponseData < Territory[] > = await client.post < Territory[] > (url, companyTerritories);
    expect(addRes.success).withContext('successful add ' + url).toBe(true);
    expect(addRes.result).withContext('non-null add result').not.toBeNull();
    expect(addRes.result.length).withContext('correct add result size').toEqual(companyTerritories.length);

    let readRes: ResponseData < Territory[] > = await client.get < Territory[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.length).withContext('correct read result size').toEqual(companyTerritories.length);

    url = url + '/' + companyTerritories[0].TerritoryID;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/companies/' + company.CompanyId + '/territories';
    let deleteAllRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteAllRes.success).withContext('successful delete all ' + url).toBe(true);
  });
});
