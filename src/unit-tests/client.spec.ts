import 'jasmine';
import { Contact } from '../compass-models/contact/contact';
import { User } from '../compass-models/user';
import { UserFeature } from '../compass-models/user-feature';
import { ResponseData } from '../interfaces/response-data';
import { ClientConfig } from '../service-models/client-config';
import { Client } from '../services/client';
import { TestClientConfig as c } from './test-client-config';

describe("CompassClient", () => {

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

  it('should validate ClientConfig values', async () => {
    let clientConfig: ClientConfig = new ClientConfig(
      c.firmId,
      c.username,
      c.password,
      c.apiKey,
      c.compassUrl
    );

    try {
      clientConfig.apiKey = 'invalidkey';
    } catch (e) {
      expect(e.message).withContext('correct apiKey error message').toEqual('apiKey config property value [invalidkey] is not valid.');
    }

    try {
      clientConfig.compassUrl = 'invalidurl';
    } catch (e) {
      expect(e.message).withContext('correct compassUrl error message').toEqual('compassUrl config property value [invalidurl] is not valid.')
    }

    try {
      clientConfig.firmId = null;
    } catch (e) {
      expect(e.message).withContext('correct firmId error message').toEqual('Please use a valid firmId.');
    }
  });

  it('should get User and UserFeatures', async () => {
    url = '/user';
    let userRes: ResponseData < User > = await client.get < User > (url);
    expect(userRes.success).withContext('successful read result ' + url).toBe(true);

    url = '/user/features';
    let userFeaturesRes: ResponseData < UserFeature[] > = await client.get < UserFeature[] > (url);
    expect(userFeaturesRes.success).withContext('successful read result ' + url).toBe(true);
    expect(userFeaturesRes.result).withContext('non-null read result').not.toBeNull();
    expect(userFeaturesRes.result.length).withContext('correct read result size').toBeGreaterThan(0);
  });

  it('should return correct response data from server for invalid API calls', async () => {
    url = '/invalid';
    let invalidUrlRes: ResponseData < any > = await client.get < any > (url);
    expect(invalidUrlRes.success).withContext('unsuccessful invalid url result ' + url).toBe(false);
    expect(invalidUrlRes.status).withContext('correct invalid url status').toEqual(404);

    url = '/contacts';
    let payload: any = {
      InvalidProp: 'InvalidData'
    };
    let invalidPayloadRes: ResponseData < Contact[] > = await client.post < Contact[] > (url, [payload]);
    expect(invalidPayloadRes.success).withContext('unsuccessful invalid payload result ' + url).toBe(false);
    expect(invalidPayloadRes.status).withContext('correct invalid payload result status').toBe(500);
    expect(invalidPayloadRes.error).withContext('correct invalid payload result error').not.toBeNull();
  });
});
