import "jasmine";
import { ResponseData } from "../..";
import { EmailContact } from '../compass-models/email/email-contact';
import { Lead } from "../compass-models/lead/lead";
import { Opportunity } from "../compass-models/opportunity/opportunity";
import { Personnel } from "../compass-models/personnel";
import { Project } from "../compass-models/project";
import { Company } from './../compass-models/company/company';
import { Contact } from './../compass-models/contact/contact';
import { Email } from './../compass-models/email/email';
import { EmailCompany } from './../compass-models/email/email-company';
import { EmailLead } from './../compass-models/email/email-lead';
import { EmailOpportunity } from './../compass-models/email/email-opportunity';
import { EmailPersonnel } from './../compass-models/email/email-personnel';
import { EmailProject } from './../compass-models/email/email-project';
import { ClientConfig } from './../service-models/client-config';
import { Client } from './../services/client';
import { TestClientConfig as c } from "./test-client-config";

describe("EmailClient", () => {
  let client: Client = new Client(
    new ClientConfig(c.firmId, c.username, c.password, c.apiKey, c.compassUrl)
  );
  let aValidEmailId: number;

  beforeEach(async () => {
    client.config.firmId = c.firmId;
    client.config.username = c.username;
    client.config.password = c.password;
    client.config.apiKey = c.apiKey;
    client.config.compassUrl = c.compassUrl;

    jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;

    let res: ResponseData < Email[] > = await client.get < Email[] > ("/emails");
    if (res.success) aValidEmailId = res.result[0].Id;
  });

  it("Can read emails", async () => {
    let res: ResponseData < Email[] > = await client.get < Email[] > ("/emails");
    expect(res.success).toBeTruthy(res.message);
  });

  it("Can read emails for incorrect url", async () => {
    let mistypedUrls: string[] = ["/email", "/emailss", "/emalis"];
    mistypedUrls.forEach(async index => {
      let res: ResponseData < Email[] > = await client.get < Email[] >nextRes;
      expect(res.success).toBeFalsy(res.message);
    });
  });

  it("Can read an email", async () => {
    let url = "/emails/" + aValidEmailId;
    let res: ResponseData < Email > = await client.get < Email > (url);
    expect(res.success).toBeTruthy(res.message);
  });

  it("Can read an email for invalid id", async () => {
    let url: string = "/emails/5555444";
    let res: ResponseData < Email > = await client.get < Email > (url);
    expect(res.result).toBeNull(res.message);
  });

  it("Can add email/s with valid data", async () => {
    let url = "/emails/" + aValidEmailId;
    let resGet: ResponseData < Email > = await client.get < Email > (url);

    resGet.result.Subject = "In reference to our conversation";
    let exEmail: Email[] = [resGet.result];

    let resPost: ResponseData < Email[] > = await client.post < Email[] > (
      "/emails",
      exEmail
    );
    expect(resPost.success).toBeTruthy(resPost.message);
  });

  it("Can add email/s with invalid data", async () => {
    let url = "/emails/" + aValidEmailId;
    let resGet: ResponseData < Email > = await client.get < Email > (url);

    //not providing a mandatory field
    resGet.result.From = null;
    resGet.result.Body = "Some Random Body Text";
    let exEmail: Email[] = [resGet.result];

    let resPost: ResponseData < Email[] > = await client.post < Email[] > (
      "/emails",
      exEmail
    );
    expect(resPost.success).toBeFalsy(resPost.message);
  });

  it("Can update email with valid data", async () => {
    let urlGet = "/emails/" + aValidEmailId;
    let resGet: ResponseData < Email > = await client.get < Email > (urlGet);

    resGet.result.Body = "Please find attached";

    let exEmail: Email = resGet.result;
    let urlPut = "/emails/" + resGet.result.Id;

    let resPut: ResponseData < Email > = await client.put < Email > (urlPut, exEmail);
    expect(resPut.success).toBeTruthy(resPut.message);
  });

  it("Can delete an email with valid id", async () => {
    let url = "/emails/" + aValidEmailId;
    let res: ResponseData < Email > = await client.delete < Email > (url);
    expect(res.success).toBeTruthy(res.message);
  });

  it("Can delete an email with invalid id", async () => {
    let url: string = "/emails/12345";
    let res: ResponseData < Email > = await client.delete < Email > (url);
    expect(res.success).toBeFalsy(res.message);
  });

  it("Can fetch contacts associated to an Email", async () => {
    let url: string = "/emails/" + aValidEmailId + "/contacts";
    let res: ResponseData < EmailContact[] > = await client.get < EmailContact[] > (url);
    expect(res.success).toBeTruthy(res.message);
  });

  it("Can fetch personnel associated to an Email", async () => {
    let url: string = "/emails/" + aValidEmailId + "/personnel";
    let res: ResponseData < EmailPersonnel[] > = await client.get < EmailPersonnel[] > (url);
    expect(res.success).toBeTruthy(res.message);
  });

  it("Can fetch leads associated to an Email", async () => {
    let url: string = "/emails/" + aValidEmailId + "/leads";
    let res: ResponseData < EmailLead[] > = await client.get < EmailLead[] > (url);
    expect(res.success).toBeTruthy(res.message);
  });

  it("Can fetch opportunities associated to an Email", async () => {
    let url: string = "/emails/" + aValidEmailId + "/opportunities";
    let res: ResponseData < EmailOpportunity[] > = await client.get < EmailOpportunity[] > (url);
    expect(res.success).toBeTruthy(res.message);
  });

  it("Can fetch projects associated to an Email", async () => {
    let url: string = "/emails/" + aValidEmailId + "/projects";
    let res: ResponseData < EmailProject[] > = await client.get < EmailProject[] > (url);
    expect(res.success).toBeTruthy(res.message);
  });

  it("Can fetch companies associated to an Email", async () => {
    let url: string = "/emails/" + aValidEmailId + "/companies";
    let res: ResponseData < EmailCompany[] > = await client.get < EmailCompany[] > (url);
    expect(res.success).toBeTruthy(res.message);
  });

  it("Can associate contact/s to an email", async () => {
    let urlGet = '/contacts';
    let urlPost = '/emails/' + aValidEmailId + '/contacts';

    let resGet: ResponseData < Contact[] > = await client.get < Contact[] > (urlGet);
    let exEmailContact: EmailContact[] = [{
      ContactId: resGet.result[0].ContactId,
      FirstName: resGet.result[0].FirstName,
      LastName: resGet.result[0].LastName
    }];

    let resPost: ResponseData < EmailContact[] > = await client.post < EmailContact[] > (urlPost, exEmailContact);
    expect(resPost.success).toBeTruthy(resPost.message);
  });

  it("Can associate personnel to an email", async () => {
    let urlGet = '/personnel';
    let urlPost = '/emails/' + aValidEmailId + '/personnel';

    let resGet: ResponseData < Personnel[] > = await client.get < Personnel[] > (urlGet);
    let exEmailPersonnel: EmailPersonnel[] = [{
      PersonnelId: resGet.result[0].PersonnelId,
      FirstName: resGet.result[0].FirstName,
      MI: resGet.result[0].MI,
      LastName: resGet.result[0].LastName,
      Prefix: resGet.result[0].Prefix,
      Suffix: resGet.result[0].Suffix,
      Title: resGet.result[0].Title
    }];

    let resPost: ResponseData < EmailPersonnel[] > = await client.post < EmailPersonnel[] > (urlPost, exEmailPersonnel);
    expect(resPost.success).toBeTruthy(resPost.message);
  });

  it("Can associate lead/s to an email", async () => {
    let urlGet = '/leads';
    let urlPost = '/emails/' + aValidEmailId + '/leads';

    let resGet: ResponseData < Lead[] > = await client.get < Lead[] > (urlGet);
    let exEmailLead: EmailLead[] = [{
      LeadId: resGet.result[0].LeadId,
      LeadName: resGet.result[0].Name
    }];

    let resPost: ResponseData < EmailLead[] > = await client.post < EmailLead[] > (urlPost, exEmailLead);
    expect(resPost.success).toBeTruthy(resPost.message);
  });

  it("Can associate opportunity/s to an email", async () => {
    let urlGet = '/opportunities';
    let urlPost = '/emails/' + aValidEmailId + '/opportunities';

    let resGet: ResponseData < Opportunity[] > = await client.get < Opportunity[] > (urlGet);
    let exEmailOpportunity: EmailOpportunity[] = [{
      OpportunityId: resGet.result[0].OpportunityId,
      OpportunityName: resGet.result[0].OpportunityName
    }];

    let resPost: ResponseData < EmailOpportunity[] > = await client.post < EmailOpportunity[] > (urlPost, exEmailOpportunity);
    expect(resPost.success).toBeTruthy(resPost.message);
  });

  it("Can associate project/s to an email", async () => {
    let urlGet = '/projects';
    let urlPost = '/emails/' + aValidEmailId + '/projects';

    let resGet: ResponseData < Project[] > = await client.get < Project[] > (urlGet);
    let exEmailProject: EmailProject[] = [{
      ProjectId: resGet.result[0].ProjectId,
      ProjectName: resGet.result[0].ProjectName
    }];

    let resPost: ResponseData < EmailProject[] > = await client.post < EmailProject[] > (urlPost, exEmailProject);
    expect(resPost.success).toBeTruthy(resPost.message);
  });

  it("Can associate company/s to an email", async () => {
    let urlGet = '/companies';
    let urlPost = '/emails/' + aValidEmailId + '/companies';

    let resGet: ResponseData < Company[] > = await client.get < Company[] > (urlGet);
    let exEmailCompany: EmailCompany[] = [{
      CompanyId: resGet.result[0].CompanyId,
      Name: resGet.result[0].Name
    }];

    let resPost: ResponseData < EmailCompany[] > = await client.post < EmailCompany[] > (urlPost, exEmailCompany);
    expect(resPost.success).toBeTruthy(resPost.message);
  });

  /*it("Can remove contacts asscociated to an email", async () => {
    let url: string = "/emails/" + aValidEmailId + "/contacts";
    let res: ResponseData<EmailContact[]> = await client.delete<EmailContact[]>(url);
    expect(res.success).toBeTruthy(res.message);
  });

  it("Can remove personnel asscociated to an email", async () => {
    let url: string = "/emails/" + aValidEmailId + "/personnel";
    let res: ResponseData<EmailPersonnel[]> = await client.delete<EmailPersonnel[]>(url);
    expect(res.success).toBeTruthy(res.message);
  });

  it("Can remove leads asscociated to an email", async () => {
    let url: string = "/emails/" + aValidEmailId + "/leads";
    let res: ResponseData<EmailLead[]> = await client.delete<EmailLead[]>(url);
    expect(res.success).toBeTruthy(res.message);
  });

  it("Can remove opportunities asscociated to an email", async () => {
    let url: string = "/emails/" + aValidEmailId + "/opportunities";
    let res: ResponseData<EmailOpportunity[]> = await client.delete<EmailOpportunity[]>(url);
    expect(res.success).toBeTruthy(res.message);
  });

  it("Can remove projects asscociated to an email", async () => {
    let url: string = "/emails/" + aValidEmailId + "/projects";
    let res: ResponseData<EmailProject[]> = await client.delete<EmailProject[]>(url);
    expect(res.success).toBeTruthy(res.message);
  });
  
  it("Can remove companies asscociated to an email", async () => {
    let url: string = "/emails/" + aValidEmailId + "/companies";
    let res: ResponseData<EmailCompany[]> = await client.delete<EmailCompany[]>(url);
    expect(res.success).toBeTruthy(res.message);
  });*/
});
