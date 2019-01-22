# compass.js

Version: **ALPHA**

Description: A Client library written in JS for Compass (Cosential's general purpose RESTful API).

It is highly recommended to test the library on the UAT Environment before moving to PROD.

## Getting Started (Install using npm)

```
npm install compass-client-js --save
```

###### https://www.npmjs.com/package/compass-client-js

## Initialize the client and get the authenticated user

```
import * as compass from 'compass-client-js';

let client = new compass.Client({
    ApiKey: '68BC02D5-5C17-4A40-8043-942B79DA34B7',
    CompassURL: 'https://compass.uat.cosential.com/api',
    FirmId: 1234,
    Username: 'john',
    Password: 'P@sSw0rd!'
});

client.get('/user').then(function(response){
    if (response.Success) {
        //Success
        var user = response.Result[0];
        document.write('<h2>Hi, '+ user.FirstName +'</h2>');
    } else {
        //Error
        document.write('<h2>Error</h2><div>'+response.Message+'</div>');
    }
});
```

## Using compass.js from HTML

Download the latest [compass.js](./dist/compass.zip)

```
<script src="compass.js"></script>
<script>
    let client = new compass.Client({
        ApiKey: '68BC02D5-5C17-4A40-8043-942B79DA34B7',
        CompassURL: 'https://compass.uat.cosential.com/api',
        FirmId: 1234,
        Username: 'john',
        Password: 'P@sSw0rd!'
    });
    
    client.get('/user').then(function(response){
        if (response.Success) {
            //Success
            var user = response.Result[0];
            document.write('<h2>Hi, '+ user.FirstName +'</h2>');
        } else {
            //Error
            document.write('<h2>Error</h2><div>'+response.Message+'</div>');
        }
    });
</script>
```

## Building compass.js:

- Clone the project '**cosential-client-js**'.
- From within the project folder '**cosential-client-js**' run the command '**npm install**'.
- Rename the file '**TestClientConfig.ts.example**' to '**TestClientConfig.ts**' in the '**./src/services**' folder.
- Open file '**TestClientConfig.ts**' from the '**./src/services**' folder. Enter your API Key, and credentials for a test firm and **save** the file.
- From within the project folder '**cosential-client-js**' run the command '**npm run build**'.
- From within the project folder '**cosential-client-js**' run the command '**npm run test**'.


**If** tests pass, authentication and comunication with Compass was successful.

## Folder Structure:

**./src** - Contains the source code (**.ts**) and unit test spec (**.spec.ts**) files. This is where developers should work.

**./dist** - Contains the compiled (**.js**) files (UMD Bundles). These files will be used for consumption. 

**./lib** - Contains the compiled (**.js**) files (ES5 commonjs), along with typescript definitions.

**./lib-esm** - Contains the compiled (**.js**) files (ES5 esmodule), along with typescript definitions.