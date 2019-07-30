import 'jasmine';
import { ContactRelationship } from '../../compass-models/contact/contact-relationship';
import { Personnel } from '../../compass-models/personnel';
import { ResponseData } from '../../interfaces/response-data';
import { ClientConfig } from '../../service-models/client-config';
import { Client } from '../client';
import { TestClientConfig as c } from '../test-client-config';
import { Contact } from './../../../lib/compass-models/contact/contact.d';
import { ContactRelationshipOption } from './../../compass-models/contact/contact-relationship-option';
import { ContactRelationshipStrength } from './../../compass-models/contact/contact-relationship-strength';

describe("ContactRelationshipClient", () => {

  let client: Client = new Client(new ClientConfig(c.firmId, c.username, c.password, c.apiKey, c.compassUrl));
  let aValidRelationshipOption: ContactRelationshipOption;
  let aValidRelationshipStrength: ContactRelationshipStrength;
  let aValidPersonnelId: number;
  let aValidContactId: number;

  beforeEach(async () => {
    client.config.firmId = c.firmId;
    client.config.username = c.username;
    client.config.password = c.password;
    client.config.apiKey = c.apiKey;
    client.config.compassUrl = c.compassUrl;

    let optionRes: ResponseData < ContactRelationshipOption[] > = await client.get < ContactRelationshipOption[] > ('/contacts/relationships/relationship');
    if (optionRes.success) {
      aValidRelationshipOption = optionRes.result[0];
    }
    let strengthRes: ResponseData < ContactRelationshipStrength[] > = await client.get < ContactRelationshipStrength[] > ('/contacts/relationships/relationshipstrength');
    if (strengthRes.success) {
      aValidRelationshipStrength = strengthRes.result[0];
    }
    let personnelRes: ResponseData < Personnel[] > = await client.get < Personnel[] > ('/personnel');
    if (personnelRes.success) {
      aValidPersonnelId = personnelRes.result[0].PersonnelId;
    }
    let contactRes: ResponseData < Contact[] > = await client.get < Contact[] > ('/contacts');
    if (contactRes.success) {
      aValidContactId = contactRes.result[0].ContactId;
    }
  });

  it('Can read contact relationship options', async () => {
    let res: ResponseData < ContactRelationshipOption[] > = await client.get < ContactRelationshipOption[] > ('/contacts/relationships/relationship');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can read contact relationship strengths', async () => {
    let res: ResponseData < ContactRelationshipStrength[] > = await client.get < ContactRelationshipStrength[] > ('/contacts/relationships/relationshipstrength');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can read a contacts relationships', async () => {
    let res: ResponseData < ContactRelationship[] > = await client.get < ContactRelationship[] > ('/contacts/' + aValidContactId + '/relationships');
    expect(res.success).toBeTruthy(res.message);
  });

  it('Can add a relationship to a contact', async () => {
    const payload = [{
      UserId: aValidPersonnelId,
      Relationship: aValidRelationshipOption.Name,
      RelationshipStrength: aValidRelationshipStrength.Name
    }];
    let res: ResponseData < ContactRelationship[] > = await client.post < ContactRelationship[] > ('/contacts/' + aValidContactId + '/relationships', < ContactRelationship[] > payload);
    expect(res.success).toBeTruthy(res.message);
  });
});
