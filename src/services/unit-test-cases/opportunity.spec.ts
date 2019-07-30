import 'jasmine';
import { ResponseData } from '../..';
import { Opportunity } from "../../compass-models/opportunity";
import { ClientConfig } from '../../service-models/client-config';
import { Client } from '../client';
import { TestClientConfig as c } from '../test-client-config';

describe("OpportunityClient", () => {

  let client: Client = new Client(new ClientConfig(c.firmId, c.username, c.password, c.apiKey, c.compassUrl));
  let aValidOpportunityId: number;

  beforeEach(async () => {
    client.config.firmId = c.firmId;
    client.config.username = c.username;
    client.config.password = c.password;
    client.config.apiKey = c.apiKey;
    client.config.compassUrl = c.compassUrl;

    jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;

    let res: ResponseData < Opportunity[] > = await client.get < Opportunity[] > ('/opportunities');
    if (res.success) aValidOpportunityId = res.result[0].OpportunityId;
  });

  it("Can read opportunities", async () => {
    let res: ResponseData < Opportunity[] > = await client.get < Opportunity[] > ('/opportunities');
    expect(res.success).toBeTruthy(res.message);
  });

  it("Can read opportunities for incorrect url", async () => {
    let mistypedUrls: string[] = ['/opportunity', '/opportunitiess', '/opportuniites'];
    mistypedUrls.forEach(async (index) => {
      let res: ResponseData < Opportunity[] > = await client.get < Opportunity[] > (index);
      expect(res.success).toBeFalsy(res.message);
    });
  });

  it("Can read an opportunity", async () => {
    let url = '/opportunities/' + aValidOpportunityId;
    let res: ResponseData < Opportunity > = await client.get < Opportunity > (url);
    expect(res.success).toBeTruthy(res.message);
  });

  it("Can read an opportunity for invalid id", async () => {
    let url: string = '/opportunities/5555444';
    let res: ResponseData < Opportunity > = await client.get < Opportunity > (url);
    expect(res.success).toBeFalsy(res.message);
  });

  it("Can add opportunity/s with valid data", async () => {
    let url = '/opportunities/' + aValidOpportunityId;
    let resGet: ResponseData < Opportunity > = await client.get < Opportunity > (url);

    resGet.result.OpportunityName = 'A sample opportunity';
    resGet.result.Address1 = '12610 Bay Area';
    let exOpportunity: Opportunity[] = [resGet.result];

    let resPost: ResponseData < Opportunity[] > = await client.post < Opportunity[] > ('/opportunities', exOpportunity);
    expect(resPost.success).toBeTruthy(resPost.message);
  });

  it("Can update opportunity with valid data", async () => {
    let urlGet = '/opportunities/' + aValidOpportunityId;
    let resGet: ResponseData < Opportunity > = await client.get < Opportunity > (urlGet);

    resGet.result.OpportunityName = 'An open opportunity';
    resGet.result.Note = 'Some random note';
    resGet.result.ROW_VERSION = '';

    let exOpportunity: Opportunity = resGet.result;
    let urlPut = '/opportunities/' + resGet.result.OpportunityId;

    let resPut: ResponseData < Opportunity > = await client.put < Opportunity > (urlPut, exOpportunity);
    expect(resPut.success).toBeTruthy(resPut.message);
  });

  it("Can update opportunity with invalid data", async () => {
    let urlGet = '/opportunities/' + aValidOpportunityId;
    let resGet: ResponseData < Opportunity > = await client.get < Opportunity > (urlGet);

    resGet.result.Note = 'A random note';
    //Not clearing off the existing row_version

    let exOpportunity: Opportunity = resGet.result;
    let urlPut = '/opportunities/' + resGet.result.OpportunityId;

    let resPut: ResponseData < Opportunity > = await client.put < Opportunity > (urlPut, exOpportunity);
    expect(resPut.success).toBeFalsy(resPut.message);
  });

  it("Can delete an opportunity with valid id", async () => {
    let url = '/opportunities/' + aValidOpportunityId;
    let res: ResponseData < Opportunity > = await client.delete < Opportunity > (url);
    expect(res.success).toBeTruthy(res.message);
  });

  it("Can delete an opportunity with invalid id", async () => {
    let url: string = '/opportunities/5555999';
    let res: ResponseData < Opportunity > = await client.delete < Opportunity > (url);
    expect(res.success).toBeFalsy(res.message);
  });

  it("Search opportunity/s using valid params", async () => {
    let searchQuery = 'OpportunityName:An open opportunity AND Probability:20';
    let res: ResponseData < Opportunity[] > = await client.search < Opportunity[] > ('/opportunities', searchQuery);
    expect(res.success).toBeTruthy(res.message);
  });

  it("Search opportunity/s for invalid params", async () => {
    let searchQuery = 'test:abc';
    let res: ResponseData < Opportunity[] > = await client.search < Opportunity[] > ('/opportunities', searchQuery);
    //return all or none on empty or invalid params
    expect(res.success).toBeTruthy(res.message);
  });
});
