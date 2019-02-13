import 'jasmine';
import { ResponseData } from '../..';
import { Image } from '../../compass-models/images/image';
import { PersonnelImageMetadata } from '../../compass-models/images/personnel-image-metadata';
import { Personnel } from '../../compass-models/personnel';
import { ClientConfig } from '../../service-models/client-config';
import { PersonnelClient } from '../personnel-client';
import { TestClientConfig as c } from '../test-client-config';

describe("PersonnelImageClient", () => {

    let personnelClient: PersonnelClient = new PersonnelClient(new ClientConfig(c.firmId, c.username, c.password, c.apiKey, c.compassUrl));
    let aValidPersonnelId: number;

    beforeEach(async () => {
        personnelClient.config.firmId = c.firmId;
        personnelClient.config.username = c.username;
        personnelClient.config.password = c.password;
        personnelClient.config.apiKey = c.apiKey;
        personnelClient.config.compassUrl = c.compassUrl;

        let personnel: ResponseData<Personnel[]> = await personnelClient.get<Personnel[]>('/personnel');
        if(personnel.success) aValidPersonnelId = 1110076; //personnel.result[0].PersonnelId;
    });

    it("Can fetch personnel images metadata for a valid id", async () => {
        let metadataUrl: string = '/personnel/' + aValidPersonnelId + '/images';
        let res: ResponseData<PersonnelImageMetadata[]> = await personnelClient.get<PersonnelImageMetadata[]>(metadataUrl);
        expect(res.success).toBeTruthy(res.message);
    });

    it("Can fetch personnel images metadata for an invalid id", async () => {
        let metadataUrl: string = '/personnel/5556666/images';
        let res: ResponseData<PersonnelImageMetadata[]> = await personnelClient.get<PersonnelImageMetadata[]>(metadataUrl);
        expect(res.success).toBeFalsy(res.message);
    });

    it("Can fetch primary photo for a personnel", async () => {
        let res: ResponseData<Image> = await personnelClient.getPersonnelImages<Image>(aValidPersonnelId, true);
        expect(res.success).toBeTruthy(res.message);
    });

    it("Can fetch all images for a personnel", async () => {
        let res: ResponseData<any> = await personnelClient.getPersonnelImages<any>(aValidPersonnelId);
        expect(res.success).toBeTruthy(res.message);
    });

    it("Can fetch all images for a personnel", async () => {
        let res: ResponseData<any> = await personnelClient.getPersonnelImages<any>(aValidPersonnelId, false);
        expect(res.success).toBeTruthy(res.message);
    });

    it("Can fetch photo for an invalid id", async () => {
        let res: ResponseData<Image> = await personnelClient.getPersonnelImages<Image>(5556666);
        //returns success as true with resultset as null
        expect(res.success).toBeTruthy(res.message);
    });
});