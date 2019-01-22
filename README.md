# compass.js

Version: **ALPHA**

Description: A Client library written in JS for Compass (Cosential's general purpose RESTful API).

It is highly recommended to test the library on the UAT Environment before moving to PROD.

## Getting Started

```
npm install compass-client-js --save
```

```
// Example
import * as client from 'compass-client-js';

client.Config.CompassURL = 'https://compass.uat.cosential.com/api';
client.Config.ApiKey = 'BFD55F74-BB52-4BBB-AB13-763A12EC09C6';

let client = new client.CompassClient(1234, 'john', 'P@sSw0rd!');

client.get('/user').then(function(response){
    if (response.Success) {
        //Success
        var user = response.Result[0];
        document.write('<h2>Hi, '+ user.FirstName +'</h2>');
    } else {
        //Error
        document.write('<h2>Error</h2><div>'+JSON.stringify(response)+'</div>');
    }
});
```
###### https://www.npmjs.com/package/compass-client-js

## Using compass.js from HTML

Download the latest [compass.js](./dist/compass.zip)

```
<script src="compass.js"></script>
<script>
    compass.Config.ApiKey = 'BFD55F74-BB52-4BBB-AB13-763A12EC09C6';
    compass.Config.CompassURL = 'https://compass.uat.cosential.com/api';

    var username = 'john';
    var password = 'P@sSw0rd!';
    var firmId = 1234;

    var client = new compass.CompassClient(firmId, username, password);
    
    client.get('/user').then(function(response){
        if (response.Success) {
            //Success
            var user = response.Result[0];
            document.write('<h2>Hi, '+ user.FirstName +'</h2>');
        } else {
            //Error
            document.write('<h2>Error</h2><div>'+JSON.stringify(response)+'</div>');
        }
    });
</script>
```

## Building compass.js:

- Clone the project '**cosential-client-js**'.
- From within the project folder '**cosential-client-js**' run the command '**npm install**'.
- Rename the file '**Config.spec.ts.example**' to '**Config.spec.ts**' in the '**./src**' folder.
- Open file '**Config.spec.ts**' from the '**./src**' folder. Enter your API Key, and credentials for a test firm and **save** the file.
- From within the project folder '**cosential-client-js**' run the command '**npm run build**'.
- From within the project folder '**cosential-client-js**' run the command '**npm run test**'.


**If** tests pass, authentication and comunication with Compass was successful.