import { ContactRoleType } from './../compass-models/contact/contact-role-type';
import { ContactRole } from './../compass-models/contact/contact-role';
import 'jasmine';
import * as uuid from 'uuid/v4';
import { Contact } from '../compass-models/contact/contact';
import { ContactAddress } from '../compass-models/contact/contact-address';
import { ContactType } from '../compass-models/contact/contact-type';
import { Office } from '../compass-models/firmorgs/office';
import { Personnel } from '../compass-models/personnel';
import { PracticeArea } from '../compass-models/firmorgs/practice-area';
import { Social } from '../compass-models/shared-subitems/social';
import { Studio } from '../compass-models/firmorgs/studio';
import { Territory } from '../compass-models/firmorgs/territory';
import { ResponseData } from '../interfaces/response-data';
import { ClientConfig } from '../service-models/client-config';
import { ContactClient } from '../services/contact-client';
import { Company } from './../compass-models/company/company';
import { ContactCategory } from './../compass-models/contact/contact-category';
import { ContactRelationship } from './../compass-models/contact/contact-relationship';
import { ContactRelationshipOption } from './../compass-models/contact/contact-relationship-option';
import { ContactRelationshipStrength } from './../compass-models/contact/contact-relationship-strength';
import { Division } from '../compass-models/firmorgs/division';
import { ContactImageMetadata } from './../compass-models/images/contact-image-metadata';
import { Image } from './../compass-models/images/image';
import { TestClientConfig as c } from './test-client-config';
import { testImage } from './test-data';

describe('ContactClient', () => {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;

  let client: ContactClient = new ContactClient(
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
  let contact: Contact;

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

    contact = < Contact > {
      CompanyId: company.CompanyId,
      FirstName: 'UTContact ' + uuid(),
      LastName: 'McCoy'
    };
    url = '/contacts';
    let contactCreateRes: ResponseData < Contact[] > = await client.post < Contact[] > (url, [contact]);
    expect(contactCreateRes.success).withContext('successful create ' + url).toBe(true);
    expect(contactCreateRes.result).withContext('non-null create result').not.toBeNull();
    expect(contactCreateRes.result.length).withContext('correct create result size').toEqual(1);
    expect(contactCreateRes.result[0].FirstName).withContext('correct data in create result').toEqual(contact.FirstName);

    contact = contactCreateRes.result[0];
  })

  afterAll(async () => {
    url = '/contacts/' + contact.ContactId;
    let deleteContactRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteContactRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/companies/' + company.CompanyId;
    let deleteCompanyRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteCompanyRes.success).withContext('successful delete ' + url).toBe(true);
  })

  // Main type

  it('should perform Contact CRUD', async () => {
    url = '/contacts/' + contact.ContactId + '/_updatesearchindex';
    let updateSearchIndexRes: ResponseData < any > = await client.get < Contact > (url);
    expect(updateSearchIndexRes.success).withContext('successful search index update ' + url).toBe(true);

    url = '/contacts';
    let readAllRes: ResponseData < Contact[] > = await client.get < Contact[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);

    url = '/contacts/' + contact.ContactId;
    let readRes: ResponseData < Contact > = await client.get < Contact > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result.FirstName).withContext('correct read result data').toEqual(contact.FirstName);

    url = '/contacts';
    let searchQuery = 'FirstName:' + contact.FirstName;
    let searchRes: ResponseData < Contact[] > = await client.search < Contact[] > (url, searchQuery);
    expect(searchRes.success).withContext('successful search ' + url + ' ' + searchQuery).toBe(true);
    expect(searchRes.result).withContext('non-null search result').not.toBeNull();
    expect(searchRes.result.length).withContext('correct search result size').toEqual(1);
    expect(searchRes.result[0].ContactId).withContext('correct search result data').toEqual(contact.ContactId);

    url = '/contacts/' + contact.ContactId;
    contact.MiddleName = 'Colt';
    contact.ROW_VERSION = null;
    let updateRes: ResponseData < Contact > = await client.put < Contact > (url, contact);
    expect(updateRes.success).withContext('successful update ' + url).toBe(true);
    // TODO: Contact put currently returns an array of Contacts while we expect a single Contact.
    // Remove size check and type conversion once this inconsistency is fixed.
    expect(( < any > updateRes).result.length).withContext('correct update result size').toEqual(1);
    expect(( < any > updateRes).result[0].MiddleName).withContext('correct update result data').toEqual(contact.MiddleName);
  });

  // Images

  it('should perform Contact Image CRUD', async () => {
    let addRes: ResponseData < Image > = await client.updateContactImage(
      contact.ContactId,
      'ProfilePicture',
      'image/jpeg',
      testImage
    );
    expect(addRes.success).withContext('successful add image via updateContactImage').toBe(true);

    url = '/contacts/' + contact.ContactId + '/images';
    let metadataRes: ResponseData < ContactImageMetadata[] > = await client.get < ContactImageMetadata[] > (url);
    expect(metadataRes.success).withContext('successful read ' + url).toBe(true);
    expect(metadataRes.result).withContext('non-null metadata result').not.toBeNull();
    expect(metadataRes.result.length).withContext('correct metadata result size').toEqual(1);
    expect(metadataRes.result[0].ImageType).withContext('correct metadata result data').toEqual('ProfilePicture');

    let readRes: ResponseData < Image > = await client.getContactImage(
      contact.ContactId,
      'ProfilePicture'
    );
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result.Data).withContext('non-null read result data').not.toBeNull();
  });

  // Subitems

  it('should perform ContactAddress CRUD', async () => {
    url = '/contacts/' + contact.ContactId + '/addresses';
    let officeAddress: ContactAddress = < ContactAddress > {
      AddressType: 'Office',
      Country: 'United States',
      DefaultInd: true
    };
    let homeAddress: ContactAddress = < ContactAddress > {
      AddressType: 'Home',
      Country: 'United States'
    };
    let createRes: ResponseData < ContactAddress[] > = await client.post < ContactAddress[] > (url, [officeAddress, homeAddress]);
    expect(createRes.success).withContext('successful create ' + url).toBe(true);
    expect(createRes.result).withContext('non-null create result').not.toBeNull();
    expect(createRes.result.length).withContext('correct create result size').toEqual(2);
    expect(createRes.result[0].Country).withContext('correct create result data').toEqual(officeAddress.Country);
    officeAddress = createRes.result[0];

    url = '/contacts/' + contact.ContactId + '/addresses';
    let readAllRes: ResponseData < ContactAddress[] > = await client.get < ContactAddress[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toEqual(2);

    let readRes: ResponseData < ContactAddress > = await client.getContactAddress(contact.ContactId, 'Office');
    expect(readRes.success).withContext('successful read default address via getContactAddress').toBe(true);
    expect(readRes.result.DefaultInd).withContext('correct read result data').toEqual(true);
    expect(readRes.result.AddressType).withContext('correct read result data').toEqual(officeAddress.AddressType);

    url = '/contacts/' + contact.ContactId + '/addresses/' + officeAddress.AddressID;
    officeAddress.Address1 = '110 Inner Campus Drive';
    let updateRes: ResponseData < ContactAddress > = await client.put < ContactAddress > (url, officeAddress);
    expect(updateRes.success).withContext('successful update ' + url).toBe(true);
    expect(updateRes.result.Address1).withContext('correct data in update result').toEqual(officeAddress.Address1);

    url = '/contacts/' + contact.ContactId + '/addresses/' + officeAddress.AddressID;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/contacts/' + contact.ContactId + '/addresses'
    let deleteAllRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteAllRes.success).withContext('successful delete ' + url).toBe(true);
  });

  it('should perform ContactCategory CRUD', async () => {
    url = '/contacts/Contact_Category';
    let readAllRes: ResponseData < ContactCategory[] > = await client.get < ContactCategory[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let contactCategories: ContactCategory[] = readAllRes.result;

    url = '/contacts/' + contact.ContactId + '/Contact_Category';
    let addRes: ResponseData < ContactCategory[] > = await client.post < ContactCategory[] > (url, contactCategories);
    expect(addRes.success).withContext('successful add ' + url).toBe(true);
    expect(addRes.result).withContext('non-null add result').not.toBeNull();
    expect(addRes.result.length).withContext('correct add result size').toEqual(contactCategories.length);

    let readRes: ResponseData < ContactCategory[] > = await client.get < ContactCategory[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.length).withContext('correct read result size').toEqual(contactCategories.length);

    url = url + '/' + contactCategories[0].ContactCategoryID;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/contacts/' + contact.ContactId + '/Contact_Category';
    let deleteAllRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteAllRes.success).withContext('successful delete all ' + url).toBe(true);
  });

  it('should perform ContactRelationship CRUD', async () => {
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

    url = '/contacts/relationships/relationship';
    let readOptionsRes: ResponseData < ContactRelationshipOption[] > = await client.get < ContactRelationshipOption[] > (url);
    expect(readOptionsRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readOptionsRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readOptionsRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let contactRelationshipOptions: ContactRelationshipOption[] = readOptionsRes.result;

    url = '/contacts/relationships/relationshipstrength';
    let readStrengthsRes: ResponseData < ContactRelationshipStrength[] > = await client.get < ContactRelationshipStrength[] > (url);
    expect(readStrengthsRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readStrengthsRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readStrengthsRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let contactRelationshipStrengths: ContactRelationshipStrength[] = readStrengthsRes.result;

    url = '/contacts/' + contact.ContactId + '/relationships';
    let relationship: ContactRelationship = < ContactRelationship > {
      UserId: personnel.PersonnelId,
      Relationship: contactRelationshipOptions[0].Name,
      RelationshipStrength: contactRelationshipStrengths[0].Name
    };
    let addRes: ResponseData < ContactRelationship[] > = await client.post < ContactRelationship[] > (url, [relationship]);
    expect(addRes.success).withContext('successful add ' + url).toBe(true);
    expect(addRes.result).withContext('non-null add result').not.toBeNull();
    expect(addRes.result.length).withContext('correct add result size').toEqual(1);

    let readRes: ResponseData < ContactRelationship[] > = await client.get < ContactRelationship[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.length).withContext('correct read result size').toEqual(1);

    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/personnel/' + personnel.PersonnelId;
    let personnelDeleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(personnelDeleteRes.success).withContext('successful delete ' + url).toBe(true);
  });

  it('should perform ContactType CRUD', async () => {
    url = '/contacts/Contact_ContactTypes';
    let readAllRes: ResponseData < ContactType[] > = await client.get < ContactType[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let contactTypes: ContactType[] = readAllRes.result;

    url = '/contacts/' + contact.ContactId + '/Contact_ContactTypes';
    let addRes: ResponseData < ContactType[] > = await client.post < ContactType[] > (url, contactTypes);
    expect(addRes.success).withContext('successful add ' + url).toBe(true);
    expect(addRes.result).withContext('non-null add result').not.toBeNull();
    expect(addRes.result.length).withContext('correct add result size').toEqual(contactTypes.length);

    let readRes: ResponseData < ContactType[] > = await client.get < ContactType[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.length).withContext('correct read result size').toEqual(contactTypes.length);

    url = url + '/' + contactTypes[0].ContactTypeID;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/contacts/' + contact.ContactId + '/Contact_ContactTypes';
    let deleteAllRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteAllRes.success).withContext('successful delete all ' + url).toBe(true);
  });

  it('should perform Contact Social CRUD', async () => {
    let social: Social = < Social > {
      SocialNetworkId: 17,
      SocialNetworkName: 'Linkedin',
      Url: 'https://linkedin.com'
    };
    url = '/contacts/' + contact.ContactId + '/social';
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

  it('should perform Contact Division CRUD', async () => {
    url = '/contacts/divisions';
    let readAllRes: ResponseData < Division[] > = await client.get < Division[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let contactDivisions: Division[] = readAllRes.result;

    url = '/contacts/' + contact.ContactId + '/divisions';
    let addRes: ResponseData < Division[] > = await client.post < Division[] > (url, contactDivisions);
    expect(addRes.success).withContext('successful add ' + url).toBe(true);
    expect(addRes.result).withContext('non-null add result').not.toBeNull();
    expect(addRes.result.length).withContext('correct add result size').toEqual(contactDivisions.length);

    let readRes: ResponseData < Division[] > = await client.get < Division[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.length).withContext('correct read result size').toEqual(contactDivisions.length);

    url = url + '/' + contactDivisions[0].DivisionID;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/contacts/' + contact.ContactId + '/divisions';
    let deleteAllRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteAllRes.success).withContext('successful delete all ' + url).toBe(true);
  });

  it('should perform Contact Office CRUD', async () => {
    url = '/contacts/offices';
    let readAllRes: ResponseData < Office[] > = await client.get < Office[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let contactOffices: Office[] = readAllRes.result;

    url = '/contacts/' + contact.ContactId + '/offices';
    let addRes: ResponseData < Office[] > = await client.post < Office[] > (url, contactOffices);
    expect(addRes.success).withContext('successful add ' + url).toBe(true);
    expect(addRes.result).withContext('non-null add result').not.toBeNull();
    expect(addRes.result.length).withContext('correct add result size').toEqual(contactOffices.length);

    let readRes: ResponseData < Office[] > = await client.get < Office[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.length).withContext('correct read result size').toEqual(contactOffices.length);

    url = url + '/' + contactOffices[0].OfficeID;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/contacts/' + contact.ContactId + '/offices';
    let deleteAllRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteAllRes.success).withContext('successful delete all ' + url).toBe(true);
  });

  it('should perform Contact PracticeArea CRUD', async () => {
    url = '/contacts/practiceareas';
    let readAllRes: ResponseData < PracticeArea[] > = await client.get < PracticeArea[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let contactPracticeAreas: PracticeArea[] = readAllRes.result;

    url = '/contacts/' + contact.ContactId + '/practiceareas';
    let addRes: ResponseData < PracticeArea[] > = await client.post < PracticeArea[] > (url, contactPracticeAreas);
    expect(addRes.success).withContext('successful add ' + url).toBe(true);
    expect(addRes.result).withContext('non-null add result').not.toBeNull();
    expect(addRes.result.length).withContext('correct add result size').toEqual(contactPracticeAreas.length);

    let readRes: ResponseData < PracticeArea[] > = await client.get < PracticeArea[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.length).withContext('correct read result size').toEqual(contactPracticeAreas.length);

    url = url + '/' + contactPracticeAreas[0].PracticeAreaId;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/contacts/' + contact.ContactId + '/practiceareas';
    let deleteAllRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteAllRes.success).withContext('successful delete all ' + url).toBe(true);
  });

  it('should perform Contact Studio CRUD', async () => {
    url = '/contacts/studios';
    let readAllRes: ResponseData < Studio[] > = await client.get < Studio[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let contactStudios: Studio[] = readAllRes.result;

    url = '/contacts/' + contact.ContactId + '/studios';
    let addRes: ResponseData < Studio[] > = await client.post < Studio[] > (url, contactStudios);
    expect(addRes.success).withContext('successful add ' + url).toBe(true);
    expect(addRes.result).withContext('non-null add result').not.toBeNull();
    expect(addRes.result.length).withContext('correct add result size').toEqual(contactStudios.length);

    let readRes: ResponseData < Studio[] > = await client.get < Studio[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.length).withContext('correct read result size').toEqual(contactStudios.length);

    url = url + '/' + contactStudios[0].StudioId;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/contacts/' + contact.ContactId + '/studios';
    let deleteAllRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteAllRes.success).withContext('successful delete all ' + url).toBe(true);
  });

  it('should perform Contact Territory CRUD', async () => {
    url = '/contacts/Territories';
    let readAllRes: ResponseData < Territory[] > = await client.get < Territory[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);
    let contactTerritories: Territory[] = readAllRes.result;

    url = '/contacts/' + contact.ContactId + '/territories';
    let addRes: ResponseData < Territory[] > = await client.post < Territory[] > (url, contactTerritories);
    expect(addRes.success).withContext('successful add ' + url).toBe(true);
    expect(addRes.result).withContext('non-null add result').not.toBeNull();
    expect(addRes.result.length).withContext('correct add result size').toEqual(contactTerritories.length);

    let readRes: ResponseData < Territory[] > = await client.get < Territory[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.length).withContext('correct read result size').toEqual(contactTerritories.length);

    url = url + '/' + contactTerritories[0].TerritoryID;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/contacts/' + contact.ContactId + '/territories';
    let deleteAllRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteAllRes.success).withContext('successful delete all ' + url).toBe(true);
  });
});
