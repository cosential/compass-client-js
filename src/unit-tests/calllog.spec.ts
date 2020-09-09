import 'jasmine';
import { v4 as uuid } from 'uuid';
import { CallLog, CallLogRole } from '../compass-models/call-log/call-log';
import { ResponseData } from '../interfaces/response-data';
import { ClientConfig } from '../service-models/client-config';
import { Client } from '../services/client';
import { TestClientConfig as c } from './test-client-config';
import { MeetingPlan } from '../compass-models/call-log/meeting-plan';
import { Contact } from '../compass-models/contact/contact';
import { Company } from '../compass-models/company/company';
import { CallLogContact } from '../compass-models/call-log/call-log-contact';
import { Personnel } from '../compass-models/personnel';
import { CallLogPersonnel } from '../compass-models/call-log/call-log-personnel';
import { CallType } from '../compass-models/call-log/call-type';
import { CallDisposition } from '../compass-models/call-log/call-disposition';

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

  it('Should perform Meeting Plan CRUD', async () => {
    url = '/calllogs/' + calllog.id + '/meetingplan';
    const dummyMeetingPlan = < MeetingPlan > {};
    dummyMeetingPlan.PayoffsForMe = 'test';
    let response = await client.post < MeetingPlan > (url, dummyMeetingPlan);
    expect(response.success).withContext('successful post to call log meeting plan').toBe(true);
    expect(response.result).withContext('non-null post result').not.toBeNull();
    expect(response.result.PayoffsForMe).withContext('meeting plan property saved correctly on post').toEqual('test');

    dummyMeetingPlan.PayoffsForYou = 'test';
    response = await client.put < MeetingPlan > (url, dummyMeetingPlan);
    expect(response.success).withContext('successful put to call log meeting plan').toBe(true);
    expect(response.result).withContext('non-null put result').not.toBeNull();
    expect(response.result.PayoffsForYou).withContext('meeting plan property saved correctly on put').toEqual('test');

    response = await client.get < MeetingPlan > (url);
    expect(response.success).withContext('successful get to call log meeting plan').toBe(true);
    expect(response.result).withContext('non-null get result').not.toBeNull();
    expect(response.result.PayoffsForYou).withContext('meeting plan property read correctly on get').toEqual('test');
    expect(response.result.PayoffsForMe).withContext('meeting plan property read correctly on get').toEqual('test');

    response = await client.delete < MeetingPlan > (url);
    expect(response.success).withContext('successful delete to call log meeting plan').toBe(true);
    expect(response.result).withContext('null get result').toBeNull();
  });

  it('Should perform Call log Contact CRUD', async () => {
    let contactCompany = < Company > {
      Name: 'UTCompany ' + uuid()
    };
    url = '/companies';
    let contactCompanyCreateRes: ResponseData < Company[] > = await client.post < Company[] > (url, [contactCompany]);
    expect(contactCompanyCreateRes.success).withContext('successful create ' + url).toBe(true);
    expect(contactCompanyCreateRes.result).withContext('non-null create result').not.toBeNull();
    expect(contactCompanyCreateRes.result.length).withContext('correct create result size').toEqual(1);
    expect(contactCompanyCreateRes.result[0].Name).withContext('correct data in create result').toEqual(contactCompany.Name);

    contactCompany = contactCompanyCreateRes.result[0];

    let contact = < Contact > {
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

    url = '/calllogs/' + calllog.id + '/contacts';
    let payload: CallLogContact = {
      Contact: contact,
      role: CallLogRole.Attendee
    }
    let addContactRes = await client.post < CallLogContact[] > (url, [payload]);
    expect(addContactRes.success).withContext('successful add ' + url).toBe(true);
    expect(addContactRes.result).withContext('non-null add result').not.toBeNull();
    expect(addContactRes.result.length).withContext('correct add result size').toEqual(1);
    expect(addContactRes.result[0].Contact.FirstName).toEqual(contact.FirstName);

    let removeContactRes = await client.delete(url);
    expect(removeContactRes.success).withContext('successful remove').toBe(true);

    url = '/contacts/' + contact.ContactId;
    let contactDeleteRes = await client.delete(url);

    url = '/companies/' + contactCompany.CompanyId;
    let companyDeleteRes = await client.delete(url);
  });

  it('Should perform call log personnel CRUD', async () => {
    let personnel = < Personnel > {
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

    url = '/calllogs/' + calllog.id + '/personnel';
    const payload: CallLogPersonnel = {
      Personnel: personnel,
      role: CallLogRole.Attendee
    }
    let personnelAddRes: ResponseData < CallLogPersonnel[] > = await client.post (url, [payload]);
    expect(personnelAddRes.success).withContext('successful add ' + url).toBe(true);
    expect(personnelAddRes.result).withContext('non-null add result').not.toBeNull();
    // Personnel endpoint does not return the personel on post so we do not test

    // Personnel endpoint does not support removing personnel currently so we do not test
    // let personnelRemoveRes = await client.delete(url);
    // expect(personnelRemoveRes.success).withContext('Successful remove').toBe(true);

    url = '/personnel/' + personnel.PersonnelId;
    let personelDeleteRes = await client.delete(url);
  });

  it('Should perform Call Type CRUD', async () => {
    const payload: CallType = < CallType > {
      value: uuid()
    };
    url = '/calllogs/calltype';
    const createRes = await client.post < CallType[] >(url, [payload]);
    expect(createRes.success).withContext('successful create ' + url).toBe(true);
    expect(createRes.result).withContext('non-null create').not.toBeNull();
    const newCallType = createRes.result.find(calltype => calltype.value === payload.value && !calltype.deleteRecord && calltype.active);
    expect(newCallType).withContext('correct data in create result').not.toBeNull();

    url += ('/' + newCallType.id);
    let getRes = await client.get < CallType > (url);
    expect(getRes.success).withContext('successful get').toBe(true);
    expect(getRes.result).withContext('non-null get').not.toBeNull();
    expect(getRes.result.value).withContext('Correct data in get result').toEqual(payload.value);

    let deleteRes = await client.delete < CallType > (url);
    expect(deleteRes.success).withContext('successful delete').toBe(true);
  });

  it('Should perform Call disposition CRUD', async () => {
    const payload: CallDisposition = < CallDisposition > {
      value: uuid()
    };
    url = '/calllogs/calldisposition';
    const createRes = await client.post < CallDisposition[] >(url, [payload]);
    expect(createRes.success).withContext('successful create ' + url).toBe(true);
    expect(createRes.result).withContext('non-null create').not.toBeNull();
    const newCallDisposition = createRes.result.find(calldisposition => calldisposition.value === payload.value && !calldisposition.deleteRecord && calldisposition.active);
    expect(newCallDisposition).withContext('correct data in create result').toBeDefined();

    url += ('/' + newCallDisposition.id);
    let getRes = await client.get < CallDisposition > (url);
    expect(getRes.success).withContext('successful get').toBe(true);
    expect(getRes.result).withContext('non-null get').not.toBeNull();
    expect(getRes.result.value).withContext('Correct data in get result').toEqual(payload.value);

    let deleteRes = await client.delete < CallDisposition > (url);
    expect(deleteRes.success).withContext('successful delete').toBe(true);
  });
});
