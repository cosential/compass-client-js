import 'jasmine';
import * as uuid from 'uuid/v4';
import { ResponseData } from '../interfaces/response-data';
import { ClientConfig } from '../service-models/client-config';
import { CallLog } from './../compass-models/call-log';
import { Client } from './../services/client';
import { TestClientConfig as c } from './test-client-config';

describe('CallLogClient', () => {
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
  let calllog: CallLog;

  beforeAll(async () => {
    calllog = < CallLog > {
      subject: 'UTCallLog ' + uuid()
    };
    url = '/calllogs';
    let calllogCreateRes: ResponseData < CallLog[] > = await client.post < CallLog[] > (url, [calllog]);
    expect(calllogCreateRes.success).withContext('successful create ' + url).toBe(true);
    expect(calllogCreateRes.result.length).withContext('correct create result size').toEqual(1);
    expect(calllogCreateRes.result[0].subject).withContext('correct data in create result').toEqual(calllog.subject);

    calllog = calllogCreateRes.result[0];
  })

  afterAll(async () => {
    url = '/calllogs/' + calllog.id;
    let deleteRes: ResponseData < any > = await client.delete < any > (url);
    expect(deleteRes.success).withContext('successful delete ' + url).toBe(true);
  })

  // Main type

  it('should perform CallLog CRUD', async () => {
    url = '/calllogs/' + calllog.id + '/_updatesearchindex';
    let updateSearchIndexRes: ResponseData < any > = await client.get < CallLog > (url);
    expect(updateSearchIndexRes.success).withContext('successful search index update ' + url).toBe(true);

    url = '/calllogs';
    let readAllRes: ResponseData < CallLog[] > = await client.get < CallLog[] > (url);
    expect(readAllRes.success).withContext('successful read all ' + url).toBe(true);
    expect(readAllRes.result).withContext('non-null read all result').not.toBeNull();
    expect(readAllRes.result.length).withContext('correct read all result size').toBeGreaterThan(0);

    url = '/calllogs/' + calllog.id;
    let readRes: ResponseData < CallLog > = await client.get < CallLog > (url);
    expect(readRes.success).withContext('successful read ' + url).toBe(true);
    expect(readRes.result.subject).withContext('correct read result data').toEqual(calllog.subject);

    url = '/calllogs';
    let searchQuery = 'subject:' + calllog.subject;
    let searchRes: ResponseData < CallLog[] > = await client.search < CallLog[] > (url, searchQuery);
    expect(searchRes.success).withContext('successful search ' + url + ' ' + searchQuery).toBe(true);
    expect(searchRes.result).withContext('non-null search result').not.toBeNull();
    expect(searchRes.result.length).withContext('correct search result size').toEqual(1);
    expect(searchRes.result[0].id).withContext('correct search result data').toEqual(calllog.id);

    url = '/calllogs/' + calllog.id;
    calllog.comments = 'alright alright alright';
    let updateRes: ResponseData < CallLog > = await client.put < CallLog > (url, calllog);
    expect(updateRes.success).withContext('successful update ' + url).toBe(true);
    expect(updateRes.result.comments).withContext('correct update result data').toEqual(calllog.comments);
  });
});
