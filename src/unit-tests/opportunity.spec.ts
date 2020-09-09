import 'jasmine';
import { v4 as uuid } from 'uuid';
import { Company } from '../compass-models/company/company';
import { Division } from '../compass-models/firmorgs/division';
import { Office } from '../compass-models/firmorgs/office';
import { PracticeArea } from '../compass-models/firmorgs/practice-area';
import { Studio } from '../compass-models/firmorgs/studio';
import { Territory } from '../compass-models/firmorgs/territory';
import { Opportunity } from '../compass-models/opportunity/opportunity';
import { OpportunityClientType } from '../compass-models/opportunity/opportunity-client-type';
import { OpportunityDeliveryMethod } from '../compass-models/opportunity/opportunity-delivery-method';
import { OpportunityProspectType } from '../compass-models/opportunity/opportunity-prospect-type';
import { OpportunityRole } from '../compass-models/opportunity/opportunity-role';
import { OpportunityStaffRole } from '../compass-models/opportunity/opportunity-staff-role';
import { OpportunityStaffTeam } from '../compass-models/opportunity/opportunity-staff-team';
import { OpportunityStage } from '../compass-models/opportunity/opportunity-stage';
import { OpportunityStageType } from '../compass-models/opportunity/opportunity-stage-type';
import { OpportunitySubmittalType } from '../compass-models/opportunity/opportunity-submittal-type';
import { Personnel } from '../compass-models/personnel';
import { PrimaryCategory } from '../compass-models/shared-subitems/primary-category';
import { SecondaryCategory } from '../compass-models/shared-subitems/secondary-category';
import { ServiceType } from '../compass-models/shared-subitems/service-type';
import { ResponseData } from '../interfaces/response-data';
import { ClientConfig } from '../service-models/client-config';
import { Client } from '../services/client';
import { TestClientConfig as c } from './test-client-config';

describe('OpportunityClient', () => {
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
  let company: Company;
  let opportunity: Opportunity;

  beforeAll(async () => {
    company = < Company > {
      Name: 'UTCompany ' + uuid()
    };
    url = '/companies';
    let companyCreateRes: ResponseData < Company[] > = await client.post < Company[] > (url, [company]);
    expect(companyCreateRes.success).withContext('successful create ' + url).toBe(true);
    expect(companyCreateRes.result).withContext('non-null create result').not.toBeNull();
    expect(companyCreateRes.result.length).withContext('correct create result size').toEqual(1);
    expect(companyCreateRes.result[0].Name).withContext('correct data in create result').toEqual(company.Name);

    company = companyCreateRes.result[0];

    opportunity = < Opportunity > {
      ClientId: company.CompanyId,
      OpportunityName: 'UTOpportunity ' + uuid()
    };
    url = '/opportunities';
    let opportunityCreateRes: ResponseData < Opportunity[] > = await client.post < Opportunity[] > (url, [opportunity]);
    expect(opportunityCreateRes.success).withContext('successful create ' + url).toBe(true);
    expect(opportunityCreateRes.result).withContext('non-null create result').not.toBeNull();
    expect(opportunityCreateRes.result.length).withContext('correct create result size').toEqual(1);
    expect(opportunityCreateRes.result[0].OpportunityName).withContext('correct data in create result').toEqual(opportunity.OpportunityName);

    opportunity = opportunityCreateRes.result[0];
  })

  afterAll(async () => {
    url = '/opportunities/' + opportunity.OpportunityId;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/companies/' + company.CompanyId;
    let deleteCompanyRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteCompanyRes.success).withContext('successful delete ' + url).toBe(true);
  })

  // Main type

  it('should perform Opportunity CRUD', async () => {
    url = '/opportunities/' + opportunity.OpportunityId + '/_updatesearchindex';
    let updateSearchIndexRes: ResponseData < any > = await client.get < Opportunity > (url);
    expect(updateSearchIndexRes.success).withContext('successful search index update ' + url).toBe(true);

    url = '/opportunities';
    let readAllRes: ResponseData < Opportunity[] > = await client.get < Opportunity[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);

    url = '/opportunities/' + opportunity.OpportunityId;
    let readRes: ResponseData < Opportunity > = await client.get < Opportunity > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result.OpportunityName).withContext('correct read result data').toEqual(opportunity.OpportunityName);

    url = '/opportunities';
    let searchQuery = 'OpportunityName:' + opportunity.OpportunityName;
    let searchRes: ResponseData < Opportunity[] > = await client.search < Opportunity[] > (url, searchQuery);
    expect(searchRes.success).withContext('successful search ' + url + ' ' + searchQuery).toBe(true);
    expect(searchRes.result).withContext('non-null search result').not.toBeNull();
    expect(searchRes.result.length).withContext('correct search result size').toEqual(1);
    expect(searchRes.result[0].OpportunityId).withContext('correct search result data').toEqual(opportunity.OpportunityId);

    url = '/opportunities/' + opportunity.OpportunityId;
    opportunity.City = 'Austin';
    opportunity.ROW_VERSION = null;
    let updateRes: ResponseData < Opportunity > = await client.put < Opportunity > (url, opportunity);
    expect(updateRes.success).withContext('successful update ' + url).toBe(true);
    expect(updateRes.result.City).withContext('correct update result data').toEqual(opportunity.City);
  });

  // Subitems

  it('should perform OpportunityClientType CRUD', async () => {
    url = '/opportunities/clienttypes';
    let readAllRes: ResponseData < OpportunityClientType[] > = await client.get < OpportunityClientType[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let opportunityClientTypes: OpportunityClientType[] = readAllRes.result;

    url = '/opportunities/' + opportunity.OpportunityId + '/clienttypes';
    let addRes: ResponseData < OpportunityClientType[] > = await client.post < OpportunityClientType[] > (url, opportunityClientTypes);
    expect(addRes.success).withContext('successful add ' + url).toBe(true);
    expect(addRes.result).withContext('non-null add result').not.toBeNull();
    expect(addRes.result.length).withContext('correct add result size').toEqual(opportunityClientTypes.length);

    let readRes: ResponseData < OpportunityClientType[] > = await client.get < OpportunityClientType[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.length).withContext('correct read result size').toEqual(opportunityClientTypes.length);

    url = url + '/' + opportunityClientTypes[0].ClientTypeID;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/opportunities/' + opportunity.OpportunityId + '/clienttypes';
    let deleteAllRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteAllRes.success).withContext('successful delete all ' + url).toBe(true);
  });

  it('should perform OpportunityDeliveryMethod CRUD', async () => {
    url = '/opportunities/deliverymethod';
    let readAllRes: ResponseData < OpportunityDeliveryMethod[] > = await client.get < OpportunityDeliveryMethod[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let opportunityDeliveryMethods: OpportunityDeliveryMethod[] = readAllRes.result;

    url = '/opportunities/' + opportunity.OpportunityId + '/deliverymethod';
    let addRes: ResponseData < OpportunityDeliveryMethod[] > = await client.post < OpportunityDeliveryMethod[] > (url, opportunityDeliveryMethods);
    expect(addRes.success).withContext('successful add ' + url).toBe(true);
    expect(addRes.result).withContext('non-null add result').not.toBeNull();
    expect(addRes.result.length).withContext('correct add result size').toEqual(opportunityDeliveryMethods.length);

    let readRes: ResponseData < OpportunityDeliveryMethod[] > = await client.get < OpportunityDeliveryMethod[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.length).withContext('correct read result size').toEqual(opportunityDeliveryMethods.length);

    url = url + '/' + opportunityDeliveryMethods[0].DeliveryMethodID;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/opportunities/' + opportunity.OpportunityId + '/deliverymethod';
    let deleteAllRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteAllRes.success).withContext('successful delete all ' + url).toBe(true);
  });

  it('should perform OpportunityProspectType CRUD', async () => {
    url = '/opportunities/prospecttype';
    let readAllRes: ResponseData < OpportunityProspectType[] > = await client.get < OpportunityProspectType[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let opportunityProspectTypes: OpportunityProspectType[] = readAllRes.result;

    url = '/opportunities/' + opportunity.OpportunityId + '/prospecttype';
    let addRes: ResponseData < OpportunityProspectType > = await client.post < OpportunityProspectType > (url, opportunityProspectTypes[0]);
    expect(addRes.success).withContext('successful add ' + url).toBe(true);
    expect(addRes.result).withContext('non-null add result').not.toBeNull();
    expect(addRes.result.ProspectTypeId).withContext('correct add result data').toEqual(opportunityProspectTypes[0].ProspectTypeId);

    let readRes: ResponseData < OpportunityProspectType > = await client.get < OpportunityProspectType > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.ProspectTypeId).withContext('correct read result data').toEqual(opportunityProspectTypes[0].ProspectTypeId);

    url = url + '/' + opportunityProspectTypes[0].ProspectTypeId;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/opportunities/' + opportunity.OpportunityId + '/prospecttype';
    let deleteAllRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteAllRes.success).withContext('successful delete all ' + url).toBe(true);
  });

  it('should perform OpportunityRole CRUD', async () => {
    url = '/opportunities/role';
    let readAllRes: ResponseData < OpportunityRole[] > = await client.get < OpportunityRole[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let opportunityRoles: OpportunityRole[] = readAllRes.result;

    url = '/opportunities/' + opportunity.OpportunityId + '/role';
    let addRes: ResponseData < OpportunityRole > = await client.post < OpportunityRole > (url, opportunityRoles[0]);
    expect(addRes.success).withContext('successful add ' + url).toBe(true);
    expect(addRes.result).withContext('non-null add result').not.toBeNull();
    expect(addRes.result.RoleId).withContext('correct add result data').toEqual(opportunityRoles[0].RoleId);

    let readRes: ResponseData < OpportunityRole > = await client.get < OpportunityRole > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.RoleId).withContext('correct read result data').toEqual(opportunityRoles[0].RoleId);

    url = url + '/' + opportunityRoles[0].RoleId;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/opportunities/' + opportunity.OpportunityId + '/role';
    let deleteAllRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteAllRes.success).withContext('successful delete all ' + url).toBe(true);
  });

  it('should perform OpportunitySubmittalType CRUD', async () => {
    url = '/opportunities/submittaltype';
    let readAllRes: ResponseData < OpportunitySubmittalType[] > = await client.get < OpportunitySubmittalType[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let opportunitySubmittalTypes: OpportunitySubmittalType[] = readAllRes.result;

    url = '/opportunities/' + opportunity.OpportunityId + '/submittaltype';
    let addRes: ResponseData < OpportunitySubmittalType[] > = await client.post < OpportunitySubmittalType[] > (url, [opportunitySubmittalTypes[0]]);
    expect(addRes.success).withContext('successful add ' + url).toBe(true);
    expect(addRes.result).withContext('non-null add result').not.toBeNull();
    // TODO: OpportunitySubmittalType post currently returns a single OpportunitySubmittalType,
    // while we expect an array of OpportunitySubmittalTypes.
    // Update this when fixed.
    expect(( < any > addRes).result.SubmittalTypeId).withContext('correct add result size').toEqual(opportunitySubmittalTypes[0].SubmittalTypeId);

    let readRes: ResponseData < OpportunitySubmittalType > = await client.get < OpportunitySubmittalType > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.SubmittalTypeId).withContext('correct read result data').toEqual(opportunitySubmittalTypes[0].SubmittalTypeId);

    url = url + '/' + opportunitySubmittalTypes[0].SubmittalTypeId;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/opportunities/' + opportunity.OpportunityId + '/submittaltype';
    let deleteAllRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteAllRes.success).withContext('successful delete all ' + url).toBe(true);
  });

  it('should perform OpportunityStaffTeam CRUD', async () => {
    let personnel = < Personnel > {
      FirstName: 'UTPersonnel ' + uuid(),
      LastName: 'Young'
    };
    url = '/personnel';
    let personnelCreateRes: ResponseData < Personnel[] > = await client.post < Personnel[] > (url, [personnel]);
    expect(personnelCreateRes.success).withContext('successful create ' + url).toBe(true);
    expect(personnelCreateRes.result.length).withContext('correct create result size').toEqual(1);
    expect(personnelCreateRes.result[0].FirstName).withContext('correct data in create result').toEqual(personnel.FirstName);

    personnel = personnelCreateRes.result[0];

    url = '/opportunities/staffteam/staffteamroles';
    let readOptionsRes: ResponseData < OpportunityStaffRole[] > = await client.get < OpportunityStaffRole[] > (url);
    expect(readOptionsRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readOptionsRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readOptionsRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let opportunityStaffRoleOptions: OpportunityStaffRole[] = readOptionsRes.result;

    url = '/opportunities/' + opportunity.OpportunityId + '/staffteam';
    let staffteam: OpportunityStaffTeam = < OpportunityStaffTeam > {
      Personnel: personnel,
      StaffRole: opportunityStaffRoleOptions[0]
    };
    let addRes: ResponseData < OpportunityStaffTeam[] > = await client.post < OpportunityStaffTeam[] > (url, [staffteam]);
    expect(addRes.success).withContext('successful add ' + url).toBe(true);
    expect(addRes.result).withContext('non-null add result').not.toBeNull();
    expect(addRes.result.length).withContext('correct add result size').toEqual(1);

    let readRes: ResponseData < OpportunityStaffTeam[] > = await client.get < OpportunityStaffTeam[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.length).withContext('correct read result size').toEqual(1);

    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/personnel/' + personnel.PersonnelId;
    let personnelDeleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(personnelDeleteRes.success).withContext('successful delete ' + url).toBe(true);
  });

  it('should perform OpportunityStage CRUD', async () => {
    url = '/opportunities/stage/stagetype';
    let readStageTypeRes: ResponseData < OpportunityStageType[] > = await client.get < OpportunityStageType[] > (url);
    expect(readStageTypeRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readStageTypeRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readStageTypeRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let opportunityStageTypeOptions: OpportunityStageType[] = readStageTypeRes.result;

    url = '/opportunities/stage';
    let readStageOptionsRes: ResponseData < OpportunityStage[] > = await client.get < OpportunityStage[] > (url);
    expect(readStageOptionsRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readStageOptionsRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readStageOptionsRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let opportunityStageOptions: OpportunityStage[] = readStageOptionsRes.result;

    url = '/opportunities/' + opportunity.OpportunityId + '/stage';
    let stage: OpportunityStage = < OpportunityStage > {
      StageID: opportunityStageOptions[0].StageID,
      StageType: opportunityStageTypeOptions[0]
    };
    let addRes: ResponseData < OpportunityStage > = await client.post < OpportunityStage > (url, stage);
    expect(addRes.success).withContext('successful add ' + url).toBe(true);
    expect(addRes.result).withContext('non-null add result').not.toBeNull();
    // TODO: Currently, /opportunities/stage responses return a response with property name "StageID",
    // however /opportunities/id/stage (post and get) return a response with property name "StageId",
    // hence we must cast the result to any so that we can retrieve the same property because of the
    // error in capitalization
    expect(( < any > addRes.result).StageId).withContext('correct add result data').toEqual(opportunityStageOptions[0].StageID);

    let readRes: ResponseData < OpportunityStage[] > = await client.get < OpportunityStage[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(( < any > readRes.result).StageId).withContext('correct read result data').toEqual(opportunityStageOptions[0].StageID);
  });


  it('should perform Opportunity PrimaryCategory CRUD', async () => {
    url = '/opportunities/primarycategories';
    let readAllRes: ResponseData < PrimaryCategory[] > = await client.get < PrimaryCategory[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let opportunityPrimaryCategories: PrimaryCategory[] = readAllRes.result;

    url = '/opportunities/' + opportunity.OpportunityId + '/primarycategories';
    let addRes: ResponseData < PrimaryCategory[] > = await client.post < PrimaryCategory[] > (url, opportunityPrimaryCategories);
    expect(addRes.success).withContext('successful add ' + url).toBe(true);
    expect(addRes.result).withContext('non-null add result').not.toBeNull();
    expect(addRes.result.length).withContext('correct add result size').toEqual(opportunityPrimaryCategories.length);

    let readRes: ResponseData < PrimaryCategory[] > = await client.get < PrimaryCategory[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.length).withContext('correct read result size').toEqual(opportunityPrimaryCategories.length);

    url = url + '/' + opportunityPrimaryCategories[0].PrimaryCategoryId;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/opportunities/' + opportunity.OpportunityId + '/primarycategories';
    let deleteAllRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteAllRes.success).withContext('successful delete all ' + url).toBe(true);
  });

  it('should perform Opportunity SecondaryCategory CRUD', async () => {
    url = '/opportunities/secondarycategories';
    let readAllRes: ResponseData < SecondaryCategory[] > = await client.get < SecondaryCategory[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let opportunitySecondaryCategories: SecondaryCategory[] = readAllRes.result;

    url = '/opportunities/' + opportunity.OpportunityId + '/secondarycategories';
    let addRes: ResponseData < SecondaryCategory[] > = await client.post < SecondaryCategory[] > (url, opportunitySecondaryCategories);
    expect(addRes.success).withContext('successful add ' + url).toBe(true);
    expect(addRes.result).withContext('non-null add result').not.toBeNull();
    expect(addRes.result.length).withContext('correct add result size').toEqual(opportunitySecondaryCategories.length);

    let readRes: ResponseData < SecondaryCategory[] > = await client.get < SecondaryCategory[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.length).withContext('correct read result size').toEqual(opportunitySecondaryCategories.length);

    url = url + '/' + opportunitySecondaryCategories[0].SecondaryCategoryID;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/opportunities/' + opportunity.OpportunityId + '/secondarycategories';
    let deleteAllRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteAllRes.success).withContext('successful delete all ' + url).toBe(true);
  });

  it('should perform Opportunity ServiceType CRUD', async () => {
    url = '/opportunities/servicetypes';
    let readAllRes: ResponseData < ServiceType[] > = await client.get < ServiceType[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let opportunityServiceTypes: ServiceType[] = readAllRes.result;

    url = '/opportunities/' + opportunity.OpportunityId + '/servicetypes';
    let addRes: ResponseData < ServiceType[] > = await client.post < ServiceType[] > (url, opportunityServiceTypes);
    expect(addRes.success).withContext('successful add ' + url).toBe(true);
    expect(addRes.result).withContext('non-null add result').not.toBeNull();
    expect(addRes.result.length).withContext('correct add result size').toEqual(opportunityServiceTypes.length);

    let readRes: ResponseData < ServiceType[] > = await client.get < ServiceType[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.length).withContext('correct read result size').toEqual(opportunityServiceTypes.length);

    url = url + '/' + opportunityServiceTypes[0].ServiceTypeId;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/opportunities/' + opportunity.OpportunityId + '/servicetypes';
    let deleteAllRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteAllRes.success).withContext('successful delete all ' + url).toBe(true);
  });

  // Firm Orgs

  it('should perform Opportunity Division CRUD', async () => {
    url = '/opportunities/divisions';
    let readAllRes: ResponseData < Division[] > = await client.get < Division[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let opportunityDivisions: Division[] = readAllRes.result;

    url = '/opportunities/' + opportunity.OpportunityId + '/divisions';
    let addRes: ResponseData < Division[] > = await client.post < Division[] > (url, opportunityDivisions);
    expect(addRes.success).withContext('successful add ' + url).toBe(true);
    expect(addRes.result).withContext('non-null add result').not.toBeNull();
    expect(addRes.result.length).withContext('correct add result size').toEqual(opportunityDivisions.length);

    let readRes: ResponseData < Division[] > = await client.get < Division[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.length).withContext('correct read result size').toEqual(opportunityDivisions.length);

    url = url + '/' + opportunityDivisions[0].DivisionID;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/opportunities/' + opportunity.OpportunityId + '/divisions';
    let deleteAllRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteAllRes.success).withContext('successful delete all ' + url).toBe(true);
  });

  it('should perform Opportunity Office CRUD', async () => {
    url = '/opportunities/offices';
    let readAllRes: ResponseData < Office[] > = await client.get < Office[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let opportunityOffices: Office[] = readAllRes.result;

    url = '/opportunities/' + opportunity.OpportunityId + '/offices';
    let addRes: ResponseData < Office[] > = await client.post < Office[] > (url, opportunityOffices);
    expect(addRes.success).withContext('successful add ' + url).toBe(true);
    expect(addRes.result).withContext('non-null add result').not.toBeNull();
    expect(addRes.result.length).withContext('correct add result size').toEqual(opportunityOffices.length);

    let readRes: ResponseData < Office[] > = await client.get < Office[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.length).withContext('correct read result size').toEqual(opportunityOffices.length);

    url = url + '/' + opportunityOffices[0].OfficeID;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/opportunities/' + opportunity.OpportunityId + '/offices';
    let deleteAllRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteAllRes.success).withContext('successful delete all ' + url).toBe(true);
  });

  it('should perform Opportunity PracticeArea CRUD', async () => {
    url = '/opportunities/practiceareas';
    let readAllRes: ResponseData < PracticeArea[] > = await client.get < PracticeArea[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let opportunityPracticeAreas: PracticeArea[] = readAllRes.result;

    url = '/opportunities/' + opportunity.OpportunityId + '/practiceareas';
    let addRes: ResponseData < PracticeArea[] > = await client.post < PracticeArea[] > (url, opportunityPracticeAreas);
    expect(addRes.success).withContext('successful add ' + url).toBe(true);
    expect(addRes.result).withContext('non-null add result').not.toBeNull();
    expect(addRes.result.length).withContext('correct add result size').toEqual(opportunityPracticeAreas.length);

    let readRes: ResponseData < PracticeArea[] > = await client.get < PracticeArea[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.length).withContext('correct read result size').toEqual(opportunityPracticeAreas.length);

    url = url + '/' + opportunityPracticeAreas[0].PracticeAreaId;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/opportunities/' + opportunity.OpportunityId + '/practiceareas';
    let deleteAllRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteAllRes.success).withContext('successful delete all ' + url).toBe(true);
  });

  it('should perform Opportunity Studio CRUD', async () => {
    url = '/opportunities/studios';
    let readAllRes: ResponseData < Studio[] > = await client.get < Studio[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let opportunityStudios: Studio[] = readAllRes.result;

    url = '/opportunities/' + opportunity.OpportunityId + '/studios';
    let addRes: ResponseData < Studio[] > = await client.post < Studio[] > (url, opportunityStudios);
    expect(addRes.success).withContext('successful add ' + url).toBe(true);
    expect(addRes.result).withContext('non-null add result').not.toBeNull();
    expect(addRes.result.length).withContext('correct add result size').toEqual(opportunityStudios.length);

    let readRes: ResponseData < Studio[] > = await client.get < Studio[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.length).withContext('correct read result size').toEqual(opportunityStudios.length);

    url = url + '/' + opportunityStudios[0].StudioId;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/opportunities/' + opportunity.OpportunityId + '/studios';
    let deleteAllRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteAllRes.success).withContext('successful delete all ' + url).toBe(true);
  });

  it('should perform Opportunity Territory CRUD', async () => {
    url = '/opportunities/Territories';
    let readAllRes: ResponseData < Territory[] > = await client.get < Territory[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let opportunityTerritories: Territory[] = readAllRes.result;

    url = '/opportunities/' + opportunity.OpportunityId + '/territories';
    let addRes: ResponseData < Territory[] > = await client.post < Territory[] > (url, opportunityTerritories);
    expect(addRes.success).withContext('successful add ' + url).toBe(true);
    expect(addRes.result).withContext('non-null add result').not.toBeNull();
    expect(addRes.result.length).withContext('correct add result size').toEqual(opportunityTerritories.length);

    let readRes: ResponseData < Territory[] > = await client.get < Territory[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.length).withContext('correct read result size').toEqual(opportunityTerritories.length);

    url = url + '/' + opportunityTerritories[0].TerritoryID;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/opportunities/' + opportunity.OpportunityId + '/territories';
    let deleteAllRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteAllRes.success).withContext('successful delete all ' + url).toBe(true);
  });
});
