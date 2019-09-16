import 'jasmine';
import * as uuid from 'uuid/v4';
import { PersonnelImageMetadata } from '../compass-models/images/personnel-image-metadata';
import { Personnel } from '../compass-models/personnel';
import { ResponseData } from '../interfaces/response-data';
import { ClientConfig } from '../service-models/client-config';
import { Company } from './../compass-models/company/company';
import { Image } from './../compass-models/images/image';
import { PersonnelClient } from './../services/personnel-client';
import { TestClientConfig as c } from './test-client-config';

describe('PersonnelClient', () => {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;

  let client: PersonnelClient = new PersonnelClient(
    new ClientConfig(
      c.firmId,
      c.username,
      c.password,
      c.apiKey,
      c.compassUrl
    )
  );
  let url: string;
  let personnel: Personnel;

  beforeAll(async () => {
    let company = < Company > {
      Name: 'UTCompany ' + uuid()
    };
    url = '/companies';
    let companyCreateRes: ResponseData < Company[] > = await client.post < Company[] > (url, [company]);
    expect(companyCreateRes.success).withContext('successful create ' + url).toBe(true);
    expect(companyCreateRes.result).withContext('non-null create result').not.toBeNull();
    expect(companyCreateRes.result.length).withContext('correct create result size').toEqual(1);
    expect(companyCreateRes.result[0].Name).withContext('correct data in create result').toEqual(company.Name);

    company = companyCreateRes.result[0];

    personnel = < Personnel > {
      FirstName: 'UTPersonnel ' + uuid(),
      LastName: 'Young'
    };
    url = '/personnel';
    let personnelCreateRes: ResponseData < Personnel[] > = await client.post < Personnel[] > (url, [personnel]);
    expect(personnelCreateRes.success).withContext('successful create ' + url).toBe(true);
    expect(personnelCreateRes.result).withContext('non-null create result').not.toBeNull();
    expect(personnelCreateRes.result.length).withContext('correct create result size').toEqual(1);
    expect(personnelCreateRes.result[0].FirstName).withContext('correct data in create result').toEqual(personnel.FirstName);

    personnel = personnelCreateRes.result[0];
  })

  afterAll(async () => {
    url = '/personnel/' + personnel.PersonnelId;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);
  })

  // Main type

  it('should perform Personnel CRUD', async () => {
    url = '/personnel/' + personnel.PersonnelId + '/_updatesearchindex';
    let updateSearchIndexRes: ResponseData < any > = await client.get < Personnel > (url);
    expect(updateSearchIndexRes.success).withContext('successful search index update ' + url).toBe(true);

    url = '/personnel';
    let readAllRes: ResponseData < Personnel[] > = await client.get < Personnel[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);

    url = '/personnel/' + personnel.PersonnelId;
    let readRes: ResponseData < Personnel > = await client.get < Personnel > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result.FirstName).withContext('correct read result data').toEqual(personnel.FirstName);

    url = '/personnel';
    let searchQuery = 'FirstName:' + personnel.FirstName;
    let searchRes: ResponseData < Personnel[] > = await client.search < Personnel[] > (url, searchQuery);
    expect(searchRes.success).withContext('successful search ' + url + ' ' + searchQuery).toBe(true);
    expect(searchRes.result).withContext('non-null search result').not.toBeNull();
    expect(searchRes.result.length).withContext('correct search result size').toEqual(1);
    expect(searchRes.result[0].PersonnelId).withContext('correct search result data').toEqual(personnel.PersonnelId);

    url = '/personnel/' + personnel.PersonnelId;
    personnel.ROW_VERSION = null;
    personnel.Title = 'Tester';
    let updateRes: ResponseData < Personnel > = await client.put < Personnel > (url, personnel);
    expect(updateRes.success).withContext('successful update ' + url).toBe(true);
    expect(updateRes.result.Title).withContext('correct update result data').toEqual(personnel.Title);
  });

  // Images

  it('should perform Personnel Image CRUD', async () => {
    url = '/personnel/' + personnel.PersonnelId + '/images';
    let metadataRes: ResponseData < PersonnelImageMetadata[] > = await client.get < PersonnelImageMetadata[] > (url);
    expect(metadataRes.success).withContext('successful read ' + url).toBe(true);
    expect(metadataRes.result).withContext('non-null metadata result').not.toBeNull();

    let readRes: ResponseData < Image > = await client.getPersonnelImage(
      personnel.PersonnelId,
    );
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
  });
});
