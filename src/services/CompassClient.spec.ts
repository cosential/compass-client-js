import 'jasmine';
import { CompassClient } from './CompassClient';
import { User } from '../model/User';
import { Config } from '../Config';

describe("CompassClient", () => {

    it("Can connect to compass and read a user", async () => {

        var client = new CompassClient(Config.TestFirmId, Config.TestUsername, Config.TestPassword);        
        var res = await client.get<User[]>('/user');
        expect(res.Result).toBeDefined();
        expect(res.Result.length).toEqual(1);
    });

});