# Cosential compass.js

Author: [Cosential, Inc.](https://www.cosential.com/)

Description: A Client library written in JS for Compass (Cosential's general purpose RESTful API).

It is highly recommended to test the library on the UAT Environment before moving to our production environment.

## Getting Started (Install using npm)

```
npm install compass-client-js --save
```

###### https://www.npmjs.com/package/compass-client-js

## Full Library Reference

[https://cosential.github.io/compass-client-js](https://cosential.github.io/compass-client-js)


## Initialize the client and get the authenticated user

```
import * as compass from 'compass-client-js';

let client = new compass.Client({
    apiKey: '68BC02D5-5C17-4A40-8043-942B79DA34B7',
    compassUrl: 'https://compass.uat.cosential.com/api',
    firmId: 1234,
    username: 'john',
    password: 'P@sSw0rd!'
});

client.get<User[]>('/user').then(res => { 
      if (res.success) { 
          //The API call was successful
 
          //This api endpoint always returns a single element array
          let user = res.result[0]; 
 
          //Because user is an API response object, properties are proper case, not camel case.
          document.write('<h2>Hi, ' + user.FirstName + '! You are authenticated</h2>'); *          
      } else {
          //Something went wrong
          document.write('<h2>Error</h2><div>' + res.message + '</div>');
      }
 });
```

## Reconfigure the client with a new user / pass

```
client.config.username = 'Jane';
client.config.password = '0th3Rp@Ss!';

client.get('/user').then( //... );
```

## Using compass.js from HTML

Download the latest [compass.js](./dist/compass.zip)

```
<script src="compass.js"></script>
<script>
    let client = new compass.Client({
        apiKey: '68BC02D5-5C17-4A40-8043-942B79DA34B7',
        compassUrl: 'https://compass.uat.cosential.com/api',
        firmId: 1234,
        username: 'john',
        password: 'P@sSw0rd!'
    });

    client.get<User[]>('/user').then(res => { 
        if (res.success) { 
            //The API call was successful
    
            //This api endpoint always returns a single element array
            let user = res.result[0]; 
    
            //Because user is an API response object, properties are proper case, not camel case.
            document.write('<h2>Hi, ' + user.FirstName + '! You are authenticated</h2>'); *          
        } else {
            //Something went wrong
            document.write('<h2>Error</h2><div>' + res.message + '</div>');
        }
    });
</script>
```

## Building compass.js:

- Clone the project.
- From within the project folder run the command '**npm install**'.
- Rename the file '**test-client-config.ts.example**' to '**test-client-config.ts**' in the '**./src/services**' folder.
- Open file '**test-client-config.ts**' from the '**./src/services**' folder. Enter your API Key, and credentials for a test firm and **save** the file.
- From within the project folder run the command '**npm run build**'.
- From within the project folder run the command '**npm run test**'.
- To run an individual unit test, from within the project folder run the command '**npx ts-node node_modules/jasmine/bin/jasmine src/services/unit-test-cases/schema.spec.ts**'.


**If** tests pass, authentication and comunication with Compass was successful.

## Folder Structure:

**./src** - Contains the source code (**.ts**) and unit test spec (**.spec.ts**) files. This is where developers should work.

**./dist** - Contains the compiled (**.js**) files (UMD Bundles). These files will be used for consumption. 

**./lib** - Contains the compiled (**.js**) files (ES5 commonjs), along with typescript definitions.

**./lib-esm** - Contains the compiled (**.js**) files (ES5 esmodule), along with typescript definitions.