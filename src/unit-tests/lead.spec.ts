import 'jasmine';
import * as uuid from 'uuid/v4';
import { Lead } from '../compass-models/lead/lead';
import { LeadType } from '../compass-models/lead/lead-type';
import { Office } from '../compass-models/firmorgs/office';
import { PracticeArea } from '../compass-models/firmorgs/practice-area';
import { ServiceType } from '../compass-models/shared-subitems/service-type';
import { Studio } from '../compass-models/firmorgs/studio';
import { Territory } from '../compass-models/firmorgs/territory';
import { ResponseData } from '../interfaces/response-data';
import { ClientConfig } from '../service-models/client-config';
import { Division } from '../compass-models/firmorgs/division';
import { LeadContractType } from './../compass-models/lead/lead-contract-type';
import { LeadRecordSource } from './../compass-models/lead/lead-record-source';
import { LeadRiskProfile } from './../compass-models/lead/lead-risk-profile';
import { LeadScore } from './../compass-models/lead/lead-score';
import { LeadSource } from './../compass-models/lead/lead-source';
import { PrimaryCategory } from '../compass-models/shared-subitems/primary-category';
import { SecondaryCategory } from '../compass-models/shared-subitems/secondary-category';
import { Client } from './../services/client';
import { TestClientConfig as c } from './test-client-config';

describe('LeadClient', () => {
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
  let lead: Lead;

  beforeAll(async () => {
    lead = < Lead > {
      Name: 'UTLead ' + uuid()
    };
    url = '/leads';
    let leadCreateRes: ResponseData < Lead[] > = await client.post < Lead[] > (url, [lead]);
    expect(leadCreateRes.success).withContext('successful create ' + url).toBe(true);
    expect(leadCreateRes.result).withContext('non-null create result').not.toBeNull();
    expect(leadCreateRes.result.length).withContext('correct create result size').toEqual(1);
    expect(leadCreateRes.result[0].Name).withContext('correct data in create result').toEqual(lead.Name);

    lead = leadCreateRes.result[0];
  })

  afterAll(async () => {
    url = '/leads/' + lead.LeadId;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);
  })

  // Main type

  it('should perform Lead CRUD', async () => {
    url = '/leads/' + lead.LeadId + '/_updatesearchindex';
    let updateSearchIndexRes: ResponseData < any > = await client.get < Lead > (url);
    expect(updateSearchIndexRes.success).withContext('successful search index update ' + url).toBe(true);

    url = '/leads';
    let readAllRes: ResponseData < Lead[] > = await client.get < Lead[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);

    url = '/leads/' + lead.LeadId;
    let readRes: ResponseData < Lead > = await client.get < Lead > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result.Name).withContext('correct read result data').toEqual(lead.Name);

    url = '/leads';
    let searchQuery = 'Name:' + lead.Name;
    let searchRes: ResponseData < Lead[] > = await client.search < Lead[] > (url, searchQuery);
    expect(searchRes.success).withContext('successful search ' + url + ' ' + searchQuery).toBe(true);
    expect(searchRes.result).withContext('non-null search result').not.toBeNull();
    expect(searchRes.result.length).withContext('correct search result size').toEqual(1);
    expect(searchRes.result[0].LeadId).withContext('correct search result data').toEqual(lead.LeadId);

    url = '/leads/' + lead.LeadId;
    lead.City = 'Austin';
    lead.ROW_VERSION = null;
    let updateRes: ResponseData < Lead > = await client.put < Lead > (url, lead);
    expect(updateRes.success).withContext('successful update ' + url).toBe(true);
    expect(updateRes.result.City).withContext('correct update result data').toEqual(lead.City);
  });

  // Subitems

  it('should perform LeadContractType CRUD', async () => {
    url = '/leads/contracttypes';
    let readAllRes: ResponseData < LeadContractType[] > = await client.get < LeadContractType[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let leadContractTypes: LeadContractType[] = readAllRes.result;

    url = '/leads/' + lead.LeadId + '/contracttypes';
    let addRes: ResponseData < LeadContractType[] > = await client.post < LeadContractType[] > (url, leadContractTypes);
    expect(addRes.success).withContext('successful add ' + url).toBe(true);
    expect(addRes.result).withContext('non-null add result').not.toBeNull();
    expect(addRes.result.length).withContext('correct add result size').toEqual(leadContractTypes.length);

    let readRes: ResponseData < LeadContractType[] > = await client.get < LeadContractType[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.length).withContext('correct read result size').toEqual(leadContractTypes.length);

    url = url + '/' + leadContractTypes[0].Id;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/leads/' + lead.LeadId + '/contracttypes';
    let deleteAllRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteAllRes.success).withContext('successful delete all ' + url).toBe(true);
  });

  it('should perform LeadRecordSource CRUD', async () => {
    url = '/leads/recordsource';
    let readAllRes: ResponseData < LeadRecordSource[] > = await client.get < LeadRecordSource[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let leadRecordSources: LeadRecordSource[] = readAllRes.result;

    url = '/leads/' + lead.LeadId + '/recordsource';
    let addRes: ResponseData < LeadRecordSource[] > = await client.post < LeadRecordSource[] > (url, [leadRecordSources[0]]);
    expect(addRes.success).withContext('successful add ' + url).toBe(true);
    expect(addRes.result).withContext('non-null add result').not.toBeNull();
    expect(addRes.result.length).withContext('correct add result size').toEqual(1);
    expect(addRes.result[0].Id).withContext('correct add result data').toEqual(leadRecordSources[0].Id);

    let readRes: ResponseData < LeadRecordSource[] > = await client.get < LeadRecordSource[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.length).withContext('correct read result size').toEqual(1);
    expect(readRes.result[0].Id).withContext('correct read result data').toEqual(leadRecordSources[0].Id);

    url = url + '/' + leadRecordSources[0].Id;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/leads/' + lead.LeadId + '/recordsource';
    let deleteAllRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteAllRes.success).withContext('successful delete all ' + url).toBe(true);
  });

  it('should perform LeadRiskProfile CRUD', async () => {
    url = '/leads/riskprofile';
    let readAllRes: ResponseData < LeadRiskProfile[] > = await client.get < LeadRiskProfile[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let leadRiskProfiles: LeadRiskProfile[] = readAllRes.result;

    url = '/leads/' + lead.LeadId + '/riskprofile';
    let addRes: ResponseData < LeadRiskProfile[] > = await client.post < LeadRiskProfile[] > (url, leadRiskProfiles);
    expect(addRes.success).withContext('successful add ' + url).toBe(true);
    expect(addRes.result).withContext('non-null add result').not.toBeNull();
    expect(addRes.result.length).withContext('correct add result size').toEqual(leadRiskProfiles.length);

    let readRes: ResponseData < LeadRiskProfile[] > = await client.get < LeadRiskProfile[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.length).withContext('correct read result size').toEqual(leadRiskProfiles.length);

    url = url + '/' + leadRiskProfiles[0].Id;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/leads/' + lead.LeadId + '/riskprofile';
    let deleteAllRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteAllRes.success).withContext('successful delete all ' + url).toBe(true);
  });

  it('should perform LeadScore CRUD', async () => {
    url = '/leads/score';
    let readAllRes: ResponseData < LeadScore[] > = await client.get < LeadScore[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let leadScores: LeadScore[] = readAllRes.result;

    url = '/leads/' + lead.LeadId + '/score';
    let addRes: ResponseData < LeadScore[] > = await client.post < LeadScore[] > (url, leadScores);
    expect(addRes.success).withContext('successful add ' + url).toBe(true);
    expect(addRes.result).withContext('non-null add result').not.toBeNull();
    expect(addRes.result.length).withContext('correct add result size').toEqual(leadScores.length);

    let readRes: ResponseData < LeadScore[] > = await client.get < LeadScore[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.length).withContext('correct read result size').toEqual(leadScores.length);

    url = url + '/' + leadScores[0].Id;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/leads/' + lead.LeadId + '/score';
    let deleteAllRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteAllRes.success).withContext('successful delete all ' + url).toBe(true);
  });

  it('should perform LeadSource CRUD', async () => {
    url = '/leads/source';
    let readAllRes: ResponseData < LeadSource[] > = await client.get < LeadSource[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let leadSources: LeadSource[] = readAllRes.result;

    url = '/leads/' + lead.LeadId + '/source';
    let addRes: ResponseData < LeadSource[] > = await client.post < LeadSource[] > (url, [leadSources[0]]);
    expect(addRes.success).withContext('successful add ' + url).toBe(true);
    expect(addRes.result).withContext('non-null add result').not.toBeNull();
    expect(addRes.result.length).withContext('correct add result size').toEqual(1);
    expect(addRes.result[0].Id).withContext('correct add result data').toEqual(leadSources[0].Id);

    let readRes: ResponseData < LeadSource[] > = await client.get < LeadSource[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.length).withContext('correct read result size').toEqual(1);
    expect(readRes.result[0].Id).withContext('correct read result data').toEqual(leadSources[0].Id);

    url = url + '/' + leadSources[0].Id;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/leads/' + lead.LeadId + '/source';
    let deleteAllRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteAllRes.success).withContext('successful delete all ' + url).toBe(true);
  });

  it('should perform LeadScore CRUD', async () => {
    url = '/leads/score';
    let readAllRes: ResponseData < LeadScore[] > = await client.get < LeadScore[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let leadScores: LeadScore[] = readAllRes.result;

    url = '/leads/' + lead.LeadId + '/score';
    let addRes: ResponseData < LeadScore[] > = await client.post < LeadScore[] > (url, leadScores);
    expect(addRes.success).withContext('successful add ' + url).toBe(true);
    expect(addRes.result).withContext('non-null add result').not.toBeNull();
    expect(addRes.result.length).withContext('correct add result size').toEqual(leadScores.length);

    let readRes: ResponseData < LeadScore[] > = await client.get < LeadScore[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.length).withContext('correct read result size').toEqual(leadScores.length);

    url = url + '/' + leadScores[0].Id;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/leads/' + lead.LeadId + '/score';
    let deleteAllRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteAllRes.success).withContext('successful delete all ' + url).toBe(true);
  });

  it('should perform Lead PrimaryCategory CRUD', async () => {
    url = '/leads/primarycategories';
    let readAllRes: ResponseData < PrimaryCategory[] > = await client.get < PrimaryCategory[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let leadPrimaryCategories: PrimaryCategory[] = readAllRes.result;

    url = '/leads/' + lead.LeadId + '/primarycategories';
    let addRes: ResponseData < PrimaryCategory[] > = await client.post < PrimaryCategory[] > (url, leadPrimaryCategories);
    expect(addRes.success).withContext('successful add ' + url).toBe(true);
    expect(addRes.result).withContext('non-null add result').not.toBeNull();
    expect(addRes.result.length).withContext('correct add result size').toEqual(leadPrimaryCategories.length);

    let readRes: ResponseData < PrimaryCategory[] > = await client.get < PrimaryCategory[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.length).withContext('correct read result size').toEqual(leadPrimaryCategories.length);

    url = url + '/' + leadPrimaryCategories[0].PrimaryCategoryId;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/leads/' + lead.LeadId + '/primarycategories';
    let deleteAllRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteAllRes.success).withContext('successful delete all ' + url).toBe(true);
  });

  it('should perform Lead SecondaryCategory CRUD', async () => {
    url = '/leads/secondarycategories';
    let readAllRes: ResponseData < SecondaryCategory[] > = await client.get < SecondaryCategory[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let leadSecondaryCategories: SecondaryCategory[] = readAllRes.result;

    url = '/leads/' + lead.LeadId + '/secondarycategories';
    let addRes: ResponseData < SecondaryCategory[] > = await client.post < SecondaryCategory[] > (url, leadSecondaryCategories);
    expect(addRes.success).withContext('successful add ' + url).toBe(true);
    expect(addRes.result).withContext('non-null add result').not.toBeNull();
    expect(addRes.result.length).withContext('correct add result size').toEqual(leadSecondaryCategories.length);

    let readRes: ResponseData < SecondaryCategory[] > = await client.get < SecondaryCategory[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.length).withContext('correct read result size').toEqual(leadSecondaryCategories.length);

    url = url + '/' + leadSecondaryCategories[0].SecondaryCategoryId;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/leads/' + lead.LeadId + '/secondarycategories';
    let deleteAllRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteAllRes.success).withContext('successful delete all ' + url).toBe(true);
  });

  it('should perform Lead ServiceType CRUD', async () => {
    url = '/leads/servicetypes';
    let readAllRes: ResponseData < ServiceType[] > = await client.get < ServiceType[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let leadServiceTypes: ServiceType[] = readAllRes.result;

    url = '/leads/' + lead.LeadId + '/servicetypes';
    let addRes: ResponseData < ServiceType[] > = await client.post < ServiceType[] > (url, leadServiceTypes);
    expect(addRes.success).withContext('successful add ' + url).toBe(true);
    expect(addRes.result).withContext('non-null add result').not.toBeNull();
    expect(addRes.result.length).withContext('correct add result size').toEqual(leadServiceTypes.length);

    let readRes: ResponseData < ServiceType[] > = await client.get < ServiceType[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.length).withContext('correct read result size').toEqual(leadServiceTypes.length);

    url = url + '/' + leadServiceTypes[0].ServiceTypeId;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/leads/' + lead.LeadId + '/servicetypes';
    let deleteAllRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteAllRes.success).withContext('successful delete all ' + url).toBe(true);
  });

  it('should perform LeadType CRUD', async () => {
    url = '/leads/leadtypes';
    let readAllRes: ResponseData < LeadType[] > = await client.get < LeadType[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let leadTypes: LeadType[] = readAllRes.result;

    url = '/leads/' + lead.LeadId + '/leadtypes';
    let addRes: ResponseData < LeadType[] > = await client.post < LeadType[] > (url, [leadTypes[0]]);
    expect(addRes.success).withContext('successful add ' + url).toBe(true);
    expect(addRes.result).withContext('non-null add result').not.toBeNull();
    expect(addRes.result.length).withContext('correct add result size').toEqual(1);
    expect(addRes.result[0].Id).withContext('correct add result data').toEqual(leadTypes[0].Id);

    let readRes: ResponseData < LeadType[] > = await client.get < LeadType[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.length).withContext('correct read result size').toEqual(1);
    expect(readRes.result[0].Id).withContext('correct read result data').toEqual(leadTypes[0].Id);

    url = url + '/' + leadTypes[0].Id;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/leads/' + lead.LeadId + '/leadtypes';
    let deleteAllRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteAllRes.success).withContext('successful delete all ' + url).toBe(true);
  });

  // Firm Orgs

  it('should perform Lead Division CRUD', async () => {
    url = '/leads/divisions';
    let readAllRes: ResponseData < Division[] > = await client.get < Division[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let leadDivisions: Division[] = readAllRes.result;

    url = '/leads/' + lead.LeadId + '/divisions';
    let addRes: ResponseData < Division[] > = await client.post < Division[] > (url, leadDivisions);
    expect(addRes.success).withContext('successful add ' + url).toBe(true);
    expect(addRes.result).withContext('non-null add result').not.toBeNull();
    expect(addRes.result.length).withContext('correct add result size').toEqual(leadDivisions.length);

    let readRes: ResponseData < Division[] > = await client.get < Division[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.length).withContext('correct read result size').toEqual(leadDivisions.length);

    url = url + '/' + leadDivisions[0].DivisionID;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/leads/' + lead.LeadId + '/divisions';
    let deleteAllRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteAllRes.success).withContext('successful delete all ' + url).toBe(true);
  });

  it('should perform Lead Office CRUD', async () => {
    url = '/leads/offices';
    let readAllRes: ResponseData < Office[] > = await client.get < Office[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let leadOffices: Office[] = readAllRes.result;

    url = '/leads/' + lead.LeadId + '/offices';
    let addRes: ResponseData < Office[] > = await client.post < Office[] > (url, leadOffices);
    expect(addRes.success).withContext('successful add ' + url).toBe(true);
    expect(addRes.result).withContext('non-null add result').not.toBeNull();
    expect(addRes.result.length).withContext('correct add result size').toEqual(leadOffices.length);

    let readRes: ResponseData < Office[] > = await client.get < Office[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.length).withContext('correct read result size').toEqual(leadOffices.length);

    url = url + '/' + leadOffices[0].OfficeID;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/leads/' + lead.LeadId + '/offices';
    let deleteAllRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteAllRes.success).withContext('successful delete all ' + url).toBe(true);
  });

  it('should perform Lead PracticeArea CRUD', async () => {
    url = '/leads/practiceareas';
    let readAllRes: ResponseData < PracticeArea[] > = await client.get < PracticeArea[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let leadPracticeAreas: PracticeArea[] = readAllRes.result;

    url = '/leads/' + lead.LeadId + '/practiceareas';
    let addRes: ResponseData < PracticeArea[] > = await client.post < PracticeArea[] > (url, leadPracticeAreas);
    expect(addRes.success).withContext('successful add ' + url).toBe(true);
    expect(addRes.result).withContext('non-null add result').not.toBeNull();
    expect(addRes.result.length).withContext('correct add result size').toEqual(leadPracticeAreas.length);

    let readRes: ResponseData < PracticeArea[] > = await client.get < PracticeArea[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.length).withContext('correct read result size').toEqual(leadPracticeAreas.length);

    url = url + '/' + leadPracticeAreas[0].PracticeAreaId;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/leads/' + lead.LeadId + '/practiceareas';
    let deleteAllRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteAllRes.success).withContext('successful delete all ' + url).toBe(true);
  });

  it('should perform Lead Studio CRUD', async () => {
    url = '/leads/studios';
    let readAllRes: ResponseData < Studio[] > = await client.get < Studio[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let leadStudios: Studio[] = readAllRes.result;

    url = '/leads/' + lead.LeadId + '/studios';
    let addRes: ResponseData < Studio[] > = await client.post < Studio[] > (url, leadStudios);
    expect(addRes.success).withContext('successful add ' + url).toBe(true);
    expect(addRes.result).withContext('non-null add result').not.toBeNull();
    expect(addRes.result.length).withContext('correct add result size').toEqual(leadStudios.length);

    let readRes: ResponseData < Studio[] > = await client.get < Studio[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.length).withContext('correct read result size').toEqual(leadStudios.length);

    url = url + '/' + leadStudios[0].StudioId;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/leads/' + lead.LeadId + '/studios';
    let deleteAllRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteAllRes.success).withContext('successful delete all ' + url).toBe(true);
  });

  it('should perform Lead Territory CRUD', async () => {
    url = '/leads/Territories';
    let readAllRes: ResponseData < Territory[] > = await client.get < Territory[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let leadTerritories: Territory[] = readAllRes.result;

    url = '/leads/' + lead.LeadId + '/territories';
    let addRes: ResponseData < Territory[] > = await client.post < Territory[] > (url, leadTerritories);
    expect(addRes.success).withContext('successful add ' + url).toBe(true);
    expect(addRes.result).withContext('non-null add result').not.toBeNull();
    expect(addRes.result.length).withContext('correct add result size').toEqual(leadTerritories.length);

    let readRes: ResponseData < Territory[] > = await client.get < Territory[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.length).withContext('correct read result size').toEqual(leadTerritories.length);

    url = url + '/' + leadTerritories[0].TerritoryID;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/leads/' + lead.LeadId + '/territories';
    let deleteAllRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteAllRes.success).withContext('successful delete all ' + url).toBe(true);
  });
});
