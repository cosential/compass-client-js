import { Greeter } from './Greeter';
import 'jasmine';

describe('Greeter.greet()', () => {

    it('should return Hello, Stranger!', () => {
        
        const greeter = new Greeter('Stranger');
        const result = greeter.greet();
        expect(result).toEqual('Hello, Stranger!');
    
    });

});
