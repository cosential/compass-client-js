# cosential-client-js

Version: **ALPHA**

Description: A Client library written in JS for Compass (Cosential's general purpose RESTful API).

It is highly recommended to test the library on the UAT Environment before moving to PROD.

## Getting started:

- Clone the project '**cosential-client-js**'.
- From within the project folder '**cosential-client-js**' run the command '**npm install**'.
- Rename the file '**Config.ts.example**' to '**Config.ts**' in the '**./src**' folder.
- Open file '**Config.ts**' from the '**./src**' folder. Please enter credentials for the firm and **save** the file.
- From within the project folder '**cosential-client-js**' run the command '**npm run test**'.

**If** authentication is successful, the unit testing should pass.

## Folder structure:

**./src** - Contains the source code (**.ts**) and unit test spec (**.spec.ts**) files. This is where developers should work.

**./_bundles** - Contains the compiled (**.js**) files (UMD library). These files will be used for consumption. 

**./lib** - Contains the compiled (**.js**) files, along with typescript definitions.

## Compile and generate './_bundles' and './lib' files:

- From within the project folder '**cosential-client-js**' run the command '**npm run build**'.

## Run unit testing

- From within the project folder '**cosential-client-js**' run the command '**npm run test**'.

## To Do:

- [ ] How to consume the UMD client library?
- [ ] How to consume from a typescript npm project
- [ ] Complete the client library.
