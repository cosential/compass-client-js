import 'jasmine';
import { Schema } from '../compass-models/schema';
import { ResponseData } from '../interfaces/response-data';
import { ClientConfig } from '../service-models/client-config';
import { Client } from '../services/client';
import { TestClientConfig as c } from './test-client-config';

describe("SchemaClient", () => {
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

  it("should read schema for all major types", async () => {
    url = '/calllogs/schema';
    let res: ResponseData < Schema[] > = await client.get < Schema[] > (url);
    expect(res.success).withContext('successful read ' + url).toBe(true);
    expect(res.result).withContext('non-null read result').not.toBeNull();
    expect(res.result.length).withContext('correct read result size').toBeGreaterThan(0);
    expect(res.result[0].PropertyName).withContext('correct read result data').not.toBeNull();

    url = '/companies/schema';
    res = await client.get < Schema[] > (url);
    expect(res.success).withContext('successful read ' + url).toBe(true);
    expect(res.result).withContext('non-null read result').not.toBeNull();
    expect(res.result.length).withContext('correct read result size').toBeGreaterThan(0);
    expect(res.result[0].PropertyName).withContext('correct read result data').not.toBeNull();

    url = '/contacts/schema';
    res = await client.get < Schema[] > (url);
    expect(res.success).withContext('successful read ' + url).toBe(true);
    expect(res.result).withContext('non-null read result').not.toBeNull();
    expect(res.result.length).withContext('correct read result size').toBeGreaterThan(0);
    expect(res.result[0].PropertyName).withContext('correct read result data').not.toBeNull();
    
    url = '/emails/schema';
    res = await client.get < Schema[] > (url);
    expect(res.success).withContext('successful read ' + url).toBe(true);
    expect(res.result).withContext('non-null read result').not.toBeNull();
    expect(res.result.length).withContext('correct read result size').toBeGreaterThan(0);
    expect(res.result[0].PropertyName).withContext('correct read result data').not.toBeNull();

    url = '/leads/schema';
    res = await client.get < Schema[] > (url);
    expect(res.success).withContext('successful read ' + url).toBe(true);
    expect(res.result).withContext('non-null read result').not.toBeNull();
    expect(res.result.length).withContext('correct read result size').toBeGreaterThan(0);
    expect(res.result[0].PropertyName).withContext('correct read result data').not.toBeNull();

    url = '/opportunities/schema';
    res = await client.get < Schema[] > (url);
    expect(res.success).withContext('successful read ' + url).toBe(true);
    expect(res.result).withContext('non-null read result').not.toBeNull();
    expect(res.result.length).withContext('correct read result size').toBeGreaterThan(0);
    expect(res.result[0].PropertyName).withContext('correct read result data').not.toBeNull();

    url = '/projects/schema';
    res = await client.get < Schema[] > (url);
    expect(res.success).withContext('successful read ' + url).toBe(true);
    expect(res.result).withContext('non-null read result').not.toBeNull();
    expect(res.result.length).withContext('correct read result size').toBeGreaterThan(0);
    expect(res.result[0].PropertyName).withContext('correct read result data').not.toBeNull();
  });
});
