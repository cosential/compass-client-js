import 'jasmine';
import * as uuid from 'uuid/v4';
import { Division } from '../compass-models/firmorgs/division';
import { Office } from '../compass-models/firmorgs/office';
import { PracticeArea } from '../compass-models/firmorgs/practice-area';
import { Studio } from '../compass-models/firmorgs/studio';
import { Territory } from '../compass-models/firmorgs/territory';
import { Project } from '../compass-models/project';
import { PrimaryCategory } from '../compass-models/shared-subitems/primary-category';
import { SecondaryCategory } from '../compass-models/shared-subitems/secondary-category';
import { ServiceType } from '../compass-models/shared-subitems/service-type';
import { ResponseData } from '../interfaces/response-data';
import { ClientConfig } from '../service-models/client-config';
import { Client } from '../services/client';
import { TestClientConfig as c } from './test-client-config';

describe('ProjectClient', () => {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;

  let client: Client = new Client(
    new ClientConfig(
      c.firmId,
      c.username,
      c.password,
      c.apiKey,
      c.compassUrl
    )
  );
  let url: string;
  let project: Project;

  beforeAll(async () => {
    project = < Project > {
      ProjectName: 'UTProject ' + uuid()
    };
    url = '/projects';
    let projectCreateRes: ResponseData < Project[] > = await client.post < Project[] > (url, [project]);
    expect(projectCreateRes.success).withContext('successful create ' + url).toBe(true);
    expect(projectCreateRes.result).withContext('non-null create result').not.toBeNull();
    expect(projectCreateRes.result.length).withContext('correct create result size').toEqual(1);
    expect(projectCreateRes.result[0].ProjectName).withContext('correct data in create result').toEqual(project.ProjectName);

    project = projectCreateRes.result[0];
  })

  afterAll(async () => {
    url = '/projects/' + project.ProjectId;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);
  })

  // Main type

  it('should perform Project CRUD', async () => {
    url = '/projects/' + project.ProjectId + '/_updatesearchindex';
    let updateSearchIndexRes: ResponseData < any > = await client.get < Project > (url);
    expect(updateSearchIndexRes.success).withContext('successful search index update ' + url).toBe(true);

    url = '/projects';
    let readAllRes: ResponseData < Project[] > = await client.get < Project[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);

    url = '/projects/' + project.ProjectId;
    let readRes: ResponseData < Project > = await client.get < Project > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result.ProjectName).withContext('correct read result data').toEqual(project.ProjectName);

    url = '/projects';
    let searchQuery = 'ProjectName:' + project.ProjectName;
    let searchRes: ResponseData < Project[] > = await client.search < Project[] > (url, searchQuery);
    expect(searchRes.success).withContext('successful search ' + url + ' ' + searchQuery).toBe(true);
    expect(searchRes.result).withContext('non-null search result').not.toBeNull();
    expect(searchRes.result.length).withContext('correct search result size').toEqual(1);
    expect(searchRes.result[0].ProjectId).withContext('correct search result data').toEqual(project.ProjectId);

    url = '/projects/' + project.ProjectId;
    project.ProjectNumber = '1883';
    project.ROW_VERSION = null;
    let updateRes: ResponseData < Project > = await client.put < Project > (url, project);
    expect(updateRes.success).withContext('successful update ' + url).toBe(true);
    expect(updateRes.result.ProjectNumber).withContext('correct update result data').toEqual(project.ProjectNumber);
  });

  // Subitems


  it('should perform Project PrimaryCategory CRUD', async () => {
    url = '/projects/primarycategories';
    let readAllRes: ResponseData < PrimaryCategory[] > = await client.get < PrimaryCategory[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let projectPrimaryCategories: PrimaryCategory[] = readAllRes.result;

    url = '/projects/' + project.ProjectId + '/primarycategories';
    // TODO: Project ServiceTypes is currently read only. Uncomment the rest of this test
    // once this is writable.
    // let addRes: ResponseData < PrimaryCategory[] > = await client.post < PrimaryCategory[] > (url, projectPrimaryCategories);
    // expect(addRes.success).withContext('successful add ' + url).toBe(true);
    // expect(addRes.result).withContext('non-null add result').not.toBeNull();
    // expect(addRes.result.length).withContext('correct add result size').toEqual(projectPrimaryCategories.length);

    let readRes: ResponseData < PrimaryCategory[] > = await client.get < PrimaryCategory[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();

    // url = url + '/' + projectPrimaryCategories[0].PrimaryCategoryId;
    // let deleteRes: ResponseData < any > = await client.delete < any > (url);
    // expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);

    // url = '/projects/' + project.ProjectId + '/primarycategories';
    // let deleteAllRes: ResponseData < any > = await client.delete < any > (url);
    // expect(deleteAllRes.success).withContext('successful delete all ' + url).toBe(true);
  });

  it('should perform Project SecondaryCategory CRUD', async () => {
    url = '/projects/secondarycategories';
    let readAllRes: ResponseData < SecondaryCategory[] > = await client.get < SecondaryCategory[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let projectSecondaryCategories: SecondaryCategory[] = readAllRes.result;

    url = '/projects/' + project.ProjectId + '/secondarycategories';
    let addRes: ResponseData < SecondaryCategory[] > = await client.post < SecondaryCategory[] > (url, projectSecondaryCategories);
    expect(addRes.success).withContext('successful add ' + url).toBe(true);
    expect(addRes.result).withContext('non-null add result').not.toBeNull();
    expect(addRes.result.length).withContext('correct add result size').toEqual(projectSecondaryCategories.length);

    let readRes: ResponseData < SecondaryCategory[] > = await client.get < SecondaryCategory[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.length).withContext('correct read result size').toEqual(projectSecondaryCategories.length);

    url = url + '/' + projectSecondaryCategories[0].SecondaryCategoryID;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/projects/' + project.ProjectId + '/secondarycategories';
    let deleteAllRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteAllRes.success).withContext('successful delete all ' + url).toBe(true);
  });

  it('should perform Project ServiceType CRUD', async () => {
    url = '/projects/servicetypes';
    let readAllRes: ResponseData < ServiceType[] > = await client.get < ServiceType[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let projectServiceTypes: ServiceType[] = readAllRes.result;

    url = '/projects/' + project.ProjectId + '/servicetypes';
    // TODO: Project ServiceTypes is currently read only. Uncomment the rest of this test
    // once this is writable.
    // let addRes: ResponseData < ServiceType[] > = await client.post < ServiceType[] > (url, projectServiceTypes);
    // expect(addRes.success).withContext('successful add ' + url).toBe(true);
    // expect(addRes.result).withContext('non-null add result').not.toBeNull();
    // expect(addRes.result.length).withContext('correct add result size').toEqual(projectServiceTypes.length);

    let readRes: ResponseData < ServiceType[] > = await client.get < ServiceType[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();

    // url = url + '/' + projectServiceTypes[0].ServiceTypeId;
    // let deleteRes: ResponseData < any > = await client.delete < any > (url);
    // expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);

    // url = '/projects/' + project.ProjectId + '/servicetypes';
    // let deleteAllRes: ResponseData < any > = await client.delete < any > (url);
    // expect(deleteAllRes.success).withContext('successful delete all ' + url).toBe(true);
  });

  // Firm Orgs

  it('should perform Project Division CRUD', async () => {
    url = '/projects/divisions';
    let readAllRes: ResponseData < Division[] > = await client.get < Division[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let projectDivisions: Division[] = readAllRes.result;

    url = '/projects/' + project.ProjectId + '/divisions';
    let addRes: ResponseData < Division[] > = await client.post < Division[] > (url, projectDivisions);
    expect(addRes.success).withContext('successful add ' + url).toBe(true);
    expect(addRes.result).withContext('non-null add result').not.toBeNull();
    expect(addRes.result.length).withContext('correct add result size').toEqual(projectDivisions.length);

    let readRes: ResponseData < Division[] > = await client.get < Division[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.length).withContext('correct read result size').toEqual(projectDivisions.length);

    url = url + '/' + projectDivisions[0].DivisionID;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/projects/' + project.ProjectId + '/divisions';
    let deleteAllRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteAllRes.success).withContext('successful delete all ' + url).toBe(true);
  });

  it('should perform Project Office CRUD', async () => {
    url = '/projects/offices';
    let readAllRes: ResponseData < Office[] > = await client.get < Office[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let projectOffices: Office[] = readAllRes.result;

    url = '/projects/' + project.ProjectId + '/offices';
    let addRes: ResponseData < Office[] > = await client.post < Office[] > (url, projectOffices);
    expect(addRes.success).withContext('successful add ' + url).toBe(true);
    expect(addRes.result).withContext('non-null add result').not.toBeNull();
    expect(addRes.result.length).withContext('correct add result size').toEqual(projectOffices.length);

    let readRes: ResponseData < Office[] > = await client.get < Office[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.length).withContext('correct read result size').toEqual(projectOffices.length);

    url = url + '/' + projectOffices[0].OfficeID;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/projects/' + project.ProjectId + '/offices';
    let deleteAllRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteAllRes.success).withContext('successful delete all ' + url).toBe(true);
  });

  it('should perform Project PracticeArea CRUD', async () => {
    url = '/projects/practiceareas';
    let readAllRes: ResponseData < PracticeArea[] > = await client.get < PracticeArea[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let projectPracticeAreas: PracticeArea[] = readAllRes.result;

    url = '/projects/' + project.ProjectId + '/practiceareas';
    let addRes: ResponseData < PracticeArea[] > = await client.post < PracticeArea[] > (url, projectPracticeAreas);
    expect(addRes.success).withContext('successful add ' + url).toBe(true);
    expect(addRes.result).withContext('non-null add result').not.toBeNull();
    expect(addRes.result.length).withContext('correct add result size').toEqual(projectPracticeAreas.length);

    let readRes: ResponseData < PracticeArea[] > = await client.get < PracticeArea[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.length).withContext('correct read result size').toEqual(projectPracticeAreas.length);

    url = url + '/' + projectPracticeAreas[0].PracticeAreaId;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/projects/' + project.ProjectId + '/practiceareas';
    let deleteAllRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteAllRes.success).withContext('successful delete all ' + url).toBe(true);
  });

  it('should perform Project Studio CRUD', async () => {
    url = '/projects/studios';
    let readAllRes: ResponseData < Studio[] > = await client.get < Studio[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let projectStudios: Studio[] = readAllRes.result;

    url = '/projects/' + project.ProjectId + '/studios';
    let addRes: ResponseData < Studio[] > = await client.post < Studio[] > (url, projectStudios);
    expect(addRes.success).withContext('successful add ' + url).toBe(true);
    expect(addRes.result).withContext('non-null add result').not.toBeNull();
    expect(addRes.result.length).withContext('correct add result size').toEqual(projectStudios.length);

    let readRes: ResponseData < Studio[] > = await client.get < Studio[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.length).withContext('correct read result size').toEqual(projectStudios.length);

    url = url + '/' + projectStudios[0].StudioId;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/projects/' + project.ProjectId + '/studios';
    let deleteAllRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteAllRes.success).withContext('successful delete all ' + url).toBe(true);
  });

  it('should perform Project Territory CRUD', async () => {
    url = '/projects/Territories';
    let readAllRes: ResponseData < Territory[] > = await client.get < Territory[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let projectTerritories: Territory[] = readAllRes.result;

    url = '/projects/' + project.ProjectId + '/territories';
    let addRes: ResponseData < Territory[] > = await client.post < Territory[] > (url, projectTerritories);
    expect(addRes.success).withContext('successful add ' + url).toBe(true);
    expect(addRes.result).withContext('non-null add result').not.toBeNull();
    expect(addRes.result.length).withContext('correct add result size').toEqual(projectTerritories.length);

    let readRes: ResponseData < Territory[] > = await client.get < Territory[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.length).withContext('correct read result size').toEqual(projectTerritories.length);

    url = url + '/' + projectTerritories[0].TerritoryID;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/projects/' + project.ProjectId + '/territories';
    let deleteAllRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteAllRes.success).withContext('successful delete all ' + url).toBe(true);
  });
});
