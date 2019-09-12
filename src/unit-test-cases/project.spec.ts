import 'jasmine';
import { Project } from "../compass-models/project";
import { ResponseData } from '../interfaces/response-data';
import { ClientConfig } from '../service-models/client-config';
import { Client } from '../services/client';
import { TestClientConfig as c } from './test-client-config';

describe("ProjectClient", () => {

  let client: Client = new Client(new ClientConfig(c.firmId, c.username, c.password, c.apiKey, c.compassUrl));
  let aValidProjectId: number;

  beforeEach(async () => {
    client.config.firmId = c.firmId;
    client.config.username = c.username;
    client.config.password = c.password;
    client.config.apiKey = c.apiKey;
    client.config.compassUrl = c.compassUrl;

    jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;

    let res: ResponseData < Project[] > = await client.get < Project[] > ('/projects');
    if (res.success) aValidProjectId = res.result[0].ProjectId;
  });

  it("Can read projects", async () => {
    let res: ResponseData < Project[] > = await client.get < Project[] > ('/projects');
    expect(res.success).toBeTruthy(res.message);
  });

  it("Can read projects for incorrect url", async () => {
    let mistypedUrls: string[] = ['/project', '/projectss', '/proejcts'];
    mistypedUrls.forEach(asyncnextRes => {
      let res: ResponseData < Project[] > = await client.get < Project[] >nextRes;
      expect(res.success).toBeFalsy(res.message);
    });
  });

  it("Can read a project", async () => {
    let url = '/projects/' + aValidProjectId;
    let res: ResponseData < Project > = await client.get < Project > (url);
    expect(res.success).toBeTruthy(res.message);
  });

  it("Can read a project for invalid id", async () => {
    let url: string = '/projects/5555444';
    let res: ResponseData < Project > = await client.get < Project > (url);
    expect(res.success).toBeFalsy(res.message);
  });

  it("Can add project/s with valid data", async () => {
    let url = '/projects/' + aValidProjectId;
    let resGet: ResponseData < Project > = await client.get < Project > (url);

    resGet.result.ProjectName = 'Test Construction';
    resGet.result.PercentComplete = 22;
    let exProject: Project[] = [resGet.result];

    let resPost: ResponseData < Project[] > = await client.post < Project[] > ('/projects', exProject);
    expect(resPost.success).toBeTruthy(resPost.message);
  });

  it("Can add project/s with invalid data", async () => {
    let url = '/projects/' + aValidProjectId;
    let resGet: ResponseData < Project > = await client.get < Project > (url);

    //not providing a mandatory field
    resGet.result.ProjectName = null;
    let exProject: Project[] = [resGet.result];

    let resPost: ResponseData < Project[] > = await client.post < Project[] > ('/projects', exProject);
    expect(resPost.success).toBeFalsy(resPost.message);
  });

  it("Can update project with valid data", async () => {
    let urlGet = '/projects/' + aValidProjectId;
    let resGet: ResponseData < Project > = await client.get < Project > (urlGet);

    resGet.result.Project_Approved = true;
    resGet.result.OtherProjectName = 'Construction for Test';
    resGet.result.ROW_VERSION = '';

    let exProject: Project = resGet.result;
    let urlPut = '/projects/' + resGet.result.ProjectId;

    let resPut: ResponseData < Project > = await client.put < Project > (urlPut, exProject);
    expect(resPut.success).toBeTruthy(resPut.message);
  });

  it("Can delete a project with valid id", async () => {
    let url = '/projects/' + aValidProjectId;
    let res: ResponseData < Project > = await client.delete < Project > (url);
    expect(res.success).toBeTruthy(res.message);
  });

  it("Can delete a project with invalid id", async () => {
    let url: string = '/projects/12345';
    let res: ResponseData < Project > = await client.delete < Project > (url);
    expect(res.success).toBeFalsy(res.message);
  });

  it("Search project/s using valid params", async () => {
    let searchQuery = 'ProjectName:ABC Construction OR OtherProjectName:ABC Construction';
    let res: ResponseData < Project[] > = await client.search < Project[] > ('/projects', searchQuery);
    expect(res.success).toBeTruthy(res.message);
  });

  it("Search project/s for invalid params", async () => {
    let searchQuery = 'test:abc';
    let res: ResponseData < Project[] > = await client.search < Project[] > ('/projects', searchQuery);
    //return all or none on empty or invalid params
    expect(res.success).toBeTruthy(res.message);
  });
});
