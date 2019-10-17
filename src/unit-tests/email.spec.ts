import 'jasmine';
import * as uuid from 'uuid/v4';
import { Company } from '../compass-models/company/company';
import { Contact } from '../compass-models/contact/contact';
import { Email } from '../compass-models/email/email';
import { EmailAttachment } from '../compass-models/email/email-attachment';
import { EmailCompany } from '../compass-models/email/email-company';
import { EmailContact } from '../compass-models/email/email-contact';
import { EmailLead } from '../compass-models/email/email-lead';
import { EmailOpportunity } from '../compass-models/email/email-opportunity';
import { EmailPersonnel } from '../compass-models/email/email-personnel';
import { EmailProject } from '../compass-models/email/email-project';
import { Lead } from '../compass-models/lead/lead';
import { Opportunity } from '../compass-models/opportunity/opportunity';
import { Personnel } from '../compass-models/personnel';
import { Project } from '../compass-models/project';
import { ResponseData } from '../interfaces/response-data';
import { ClientConfig } from '../service-models/client-config';
import { EmailClient } from '../services/email-client';
import { TestClientConfig as c } from './test-client-config';

describe('EmailClient', () => {

  jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;

  let client: EmailClient = new EmailClient(
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
  let contactCompany: Company;
  let contact: Contact;
  let lead: Lead;
  let opportunity: Opportunity;
  let personnel: Personnel;
  let project: Project;
  let email: Email;
  let companyEmail: Email;

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

    // Associating an email to a Contact automatically associates it to the Contact's Company, hence
    // we need two companies to test with: one for testing direct EmailCompany association, and one
    // for testing EmailCompany association via EmailContact association
    contactCompany = < Company > {
      Name: 'UTCompany ' + uuid()
    };
    url = '/companies';
    let contactCompanyCreateRes: ResponseData < Company[] > = await client.post < Company[] > (url, [contactCompany]);
    expect(contactCompanyCreateRes.success).withContext('successful create ' + url).toBe(true);
    expect(contactCompanyCreateRes.result).withContext('non-null create result').not.toBeNull();
    expect(contactCompanyCreateRes.result.length).withContext('correct create result size').toEqual(1);
    expect(contactCompanyCreateRes.result[0].Name).withContext('correct data in create result').toEqual(contactCompany.Name);

    contactCompany = contactCompanyCreateRes.result[0];

    contact = < Contact > {
      CompanyId: contactCompany.CompanyId,
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

    email = < Email > {
      From: 'Mack Brown',
      EmailGuid: uuid(),
      ExternalId: 'UTEmail ' + uuid(),
      SentDate: (new Date()).toISOString()
    };
    url = '/emails';
    let emailCreateRes: ResponseData < Email[] > = await client.post < Email[] > (url, [email]);
    expect(emailCreateRes.success).withContext('successful create ' + url).toBe(true);
    expect(emailCreateRes.result).withContext('non-null create result').not.toBeNull();
    expect(emailCreateRes.result.length).withContext('correct create result size').toEqual(1);
    expect(emailCreateRes.result[0].ExternalId).withContext('correct data in create result').toEqual(email.ExternalId);

    email = emailCreateRes.result[0];

    companyEmail = < Email > {
      From: 'Vince Young',
      EmailGuid: uuid(),
      ExternalId: 'UTEmail ' + uuid(),
      SentDate: (new Date()).toISOString()
    };
    url = '/emails';
    let companyEmailCreateRes: ResponseData < Email[] > = await client.post < Email[] > (url, [companyEmail]);
    expect(companyEmailCreateRes.success).withContext('successful create ' + url).toBe(true);
    expect(companyEmailCreateRes.result).withContext('non-null create result').not.toBeNull();
    expect(companyEmailCreateRes.result.length).withContext('correct create result size').toEqual(1);
    expect(companyEmailCreateRes.result[0].ExternalId).withContext('correct data in create result').toEqual(companyEmail.ExternalId);

    companyEmail = companyEmailCreateRes.result[0];
  })

  afterAll(async () => {
    url = '/emails/' + email.Id;
    let deleteEmailRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteEmailRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/emails/' + companyEmail.Id;
    let deleteCompanyEmailRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteCompanyEmailRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/companies/' + company.CompanyId;
    let deleteCompanyRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteCompanyRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/contacts/' + contact.ContactId;
    let deleteContactRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteContactRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/companies/' + contactCompany.CompanyId;
    let deleteContactCompanyRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteContactCompanyRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/leads/' + lead.LeadId;
    let deleteLeadRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteLeadRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/opportunities/' + opportunity.OpportunityId;
    let deleteOpportunityRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteOpportunityRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/personnel/' + personnel.PersonnelId;
    let deletePersonnelRes: ResponseData < any > = await client.delete < any > (url);
    expect(deletePersonnelRes.success).withContext('successful delete ' + url).toBe(true);

    url = '/projects/' + project.ProjectId;
    let deleteProjectRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteProjectRes.success).withContext('successful delete ' + url).toBe(true);
  })

  // Main type

  it('should perform Email CRUD', async () => {
    url = '/emails';
    let readAllRes: ResponseData < Email[] > = await client.get < Email[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);

    url = '/emails/' + email.Id;
    let readRes: ResponseData < Email > = await client.get < Email > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result.ExternalId).withContext('correct read result data').toEqual(email.ExternalId);

    url = '/emails';
    let searchQuery = 'ExternalId:' + email.ExternalId;
    let searchRes: ResponseData < Email[] > = await client.getSearch < Email[] > (url, searchQuery);
    expect(searchRes.success).withContext('successful search ' + url + ' ' + searchQuery).toBe(true);
    expect(searchRes.result).withContext('non-null search result').not.toBeNull();
    expect(searchRes.result.length).withContext('correct search result size').toEqual(1);
    expect(searchRes.result[0].Id).withContext('correct search result data').toEqual(email.Id);

    url = '/emails/' + email.Id;
    email.Subject = 'Bevo';
    let updateRes: ResponseData < Email > = await client.put < Email > (url, email);
    expect(updateRes.success).withContext('successful update ' + url).toBe(true);
    expect(updateRes.result.Subject).withContext('correct update result data').toEqual(email.Subject);
  });

  // Associations

  it('should perform EmailCompany association', async () => {
    let emailCompany: EmailCompany = < EmailCompany > {
      CompanyId: company.CompanyId
    };
    url = '/emails/' + companyEmail.Id + '/companies';
    let associateRes: ResponseData < EmailCompany[] > = await client.post < EmailCompany[] > (url, [emailCompany]);
    expect(associateRes.success).withContext('successful associate ' + url).toBe(true);
    expect(associateRes.result).withContext('non-null associate result').not.toBeNull();
    expect(associateRes.result.length).withContext('correct associate result size').toBeGreaterThan(0);
    expect(associateRes.result[0].CompanyId).withContext('correct associate result data').toEqual(company.CompanyId);

    let readRes: ResponseData < EmailCompany[] > = await client.get < EmailCompany[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.length).withContext('correct read result size').toBeGreaterThan(0);

    url = '/emails/' + companyEmail.Id + '/companies/' + company.CompanyId;
    let disassociateRes: ResponseData < any > = await client.delete < any > (url);
    expect(disassociateRes.success).withContext('successful disassociate ' + url).toBe(true);
  });

  it('should perform EmailContact association', async () => {
    let emailContact: EmailContact = < EmailContact > {
      ContactId: contact.ContactId
    };
    url = '/emails/' + email.Id + '/contacts';
    let associateRes: ResponseData < EmailContact[] > = await client.post < EmailContact[] > (url, [emailContact]);
    expect(associateRes.success).withContext('successful associate ' + url).toBe(true);
    expect(associateRes.result).withContext('non-null associate result').not.toBeNull();
    expect(associateRes.result.length).withContext('correct associate result size').toEqual(1);
    expect(associateRes.result[0].ContactId).withContext('correct associate result data').toEqual(contact.ContactId);

    let readContactRes: ResponseData < EmailContact[] > = await client.get < EmailContact[] > (url);
    expect(readContactRes.success).withContext('successful read ' + url).toBe(true);
    expect(readContactRes.result).withContext('non-null read result').not.toBeNull();
    expect(readContactRes.result.length).withContext('correct read result size').toEqual(1);
    expect(readContactRes.result[0].ContactId).withContext('correct read result data').toEqual(contact.ContactId);

    url = '/emails/' + email.Id + '/contacts/' + contact.ContactId;
    let disassociateRes: ResponseData < any > = await client.delete < any > (url);
    expect(disassociateRes.success).withContext('successful disassociate ' + url).toBe(true);
  });

  it('should perform EmailLead association', async () => {
    let emailLead: EmailLead = < EmailLead > {
      LeadId: lead.LeadId
    };
    url = '/emails/' + email.Id + '/leads';
    let associateRes: ResponseData < EmailLead[] > = await client.post < EmailLead[] > (url, [emailLead]);
    expect(associateRes.success).withContext('successful associate ' + url).toBe(true);
    expect(associateRes.result).withContext('non-null associate result').not.toBeNull();
    expect(associateRes.result.length).withContext('correct associate result size').toEqual(1);
    expect(associateRes.result[0].LeadId).withContext('correct associate result data').toEqual(lead.LeadId);

    let readRes: ResponseData < EmailLead[] > = await client.get < EmailLead[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.length).withContext('correct read result size').toEqual(1);
    expect(readRes.result[0].LeadId).withContext('correct read result data').toEqual(lead.LeadId);

    url = '/emails/' + email.Id + '/leads/' + lead.LeadId;
    let disassociateRes: ResponseData < any > = await client.delete < any > (url);
    expect(disassociateRes.success).withContext('successful disassociate ' + url).toBe(true);
  });

  it('should perform EmailOpportunity association', async () => {
    let emailOpportunity: EmailOpportunity = < EmailOpportunity > {
      OpportunityId: opportunity.OpportunityId
    };
    url = '/emails/' + email.Id + '/opportunities';
    let associateRes: ResponseData < EmailOpportunity[] > = await client.post < EmailOpportunity[] > (url, [emailOpportunity]);
    expect(associateRes.success).withContext('successful associate ' + url).toBe(true);
    expect(associateRes.result).withContext('non-null associate result').not.toBeNull();
    expect(associateRes.result.length).withContext('correct associate result size').toEqual(1);
    expect(associateRes.result[0].OpportunityId).withContext('correct associate result data').toEqual(opportunity.OpportunityId);

    let readRes: ResponseData < EmailOpportunity[] > = await client.get < EmailOpportunity[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.length).withContext('correct read result size').toEqual(1);
    expect(readRes.result[0].OpportunityId).withContext('correct read result data').toEqual(opportunity.OpportunityId);

    url = '/emails/' + email.Id + '/opportunities/' + opportunity.OpportunityId;
    let disassociateRes: ResponseData < any > = await client.delete < any > (url);
    expect(disassociateRes.success).withContext('successful disassociate ' + url).toBe(true);
  });

  it('should perform EmailPersonnel association', async () => {
    let emailPersonnel: EmailPersonnel = < EmailPersonnel > {
      PersonnelId: personnel.PersonnelId
    };
    url = '/emails/' + email.Id + '/personnel';
    let associateRes: ResponseData < EmailPersonnel[] > = await client.post < EmailPersonnel[] > (url, [emailPersonnel]);
    expect(associateRes.success).withContext('successful associate ' + url).toBe(true);
    expect(associateRes.result).withContext('non-null associate result').not.toBeNull();
    expect(associateRes.result.length).withContext('correct associate result size').toEqual(1);
    expect(associateRes.result[0].PersonnelId).withContext('correct associate result data').toEqual(personnel.PersonnelId);

    let readRes: ResponseData < EmailPersonnel[] > = await client.get < EmailPersonnel[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.length).withContext('correct read result size').toEqual(1);
    expect(readRes.result[0].PersonnelId).withContext('correct read result data').toEqual(personnel.PersonnelId);

    url = '/emails/' + email.Id + '/personnel/' + personnel.PersonnelId;
    let disassociateRes: ResponseData < any > = await client.delete < any > (url);
    expect(disassociateRes.success).withContext('successful disassociate ' + url).toBe(true);
  });

  it('should perform EmailProject association', async () => {
    let emailProject: EmailProject = < EmailProject > {
      ProjectId: project.ProjectId
    };
    url = '/emails/' + email.Id + '/projects';
    let associateRes: ResponseData < EmailProject[] > = await client.post < EmailProject[] > (url, [emailProject]);
    expect(associateRes.success).withContext('successful associate ' + url).toBe(true);
    expect(associateRes.result).withContext('non-null associate result').not.toBeNull();
    expect(associateRes.result.length).withContext('correct associate result size').toEqual(1);
    expect(associateRes.result[0].ProjectId).withContext('correct associate result data').toEqual(project.ProjectId);

    let readRes: ResponseData < EmailProject[] > = await client.get < EmailProject[] > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result).withContext('non-null read result').not.toBeNull();
    expect(readRes.result.length).withContext('correct read result size').toEqual(1);
    expect(readRes.result[0].ProjectId).withContext('correct read result data').toEqual(project.ProjectId);

    url = '/emails/' + email.Id + '/projects/' + project.ProjectId;
    let disassociateRes: ResponseData < any > = await client.delete < any > (url);
    expect(disassociateRes.success).withContext('successful disassociate ' + url).toBe(true);
  });

  // Attachments

  it('should add EmailAttachments', async () => {
    const data: string = "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";
    let emailAttachment: EmailAttachment = < EmailAttachment > {
      filename: 'test.gif',
      data: data
    };
    let addRes: ResponseData < EmailAttachment > = await client.addAttachment(email.Id, [emailAttachment]);
    expect(addRes.success).withContext('successful add via addAttachment').toBe(true);
    expect(addRes.message).withContext('correct add message').toEqual('Attachments created successfully.');
  });
});
