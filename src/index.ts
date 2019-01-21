import { CompassClient } from './services/CompassClient';
import { User } from './model/User';

var client = new CompassClient(256, 'dwarren', 'warren11');

client.get<User[]>('/user').then((res) =>{
    if (res.Success) console.log(JSON.stringify(res.Result[0]));
    else console.log(res.Error);
});

/** 
 * Basic ZHdhcnJlbjp3YXJyZW4xMQ==
 * Basic ZHdhcnJlbjp3YXJyZW4xMQ==
 * 
*/