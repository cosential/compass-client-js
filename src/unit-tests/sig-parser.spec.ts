import 'jasmine';
import { Client } from '../services/client';
import { ClientConfig } from '../service-models/client-config';
import { TestClientConfig as c } from './test-client-config';
import { SigParserRequest } from '../compass-models/sig-parser/sig-parser-request';
import { SigParserResult } from '../compass-models/sig-parser/sig-parser-result';
import { ResponseData } from '../interfaces/response-data';

describe('SigParserClient', () => {
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

  it('should successfully parse signiture', async () => {
    url = '/emails/parsesignatures';
    const request: SigParserRequest[] = [{ Sender: 'test', Body: 'test' }]
    let res: ResponseData < SigParserResult[] > = await client.post(url, <any[]> request);
    expect(res.success).toEqual(true);
    expect(res.result).withContext('non-null read result').not.toBeNull();
    expect(res.result.length).withContext('correct read result size').toBeGreaterThan(0);
    expect(res.result[0].Data).withContext('correct read result data').not.toBeNull();
  })
});
