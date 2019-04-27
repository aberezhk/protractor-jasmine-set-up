# protractor-cheat-sheet
Setting up e2e tests with protractor with 
* typescript (commonjs / es2017)
* jasmine
* protractor-beautiful-reporter
* chrome direct connect

sample tests will open google start page and search for cats and goats

**1. Install Node.js (comes together with npm cli)**
````
download and execute binaries from https://nodejs.org/en/download/.
check installation by running 'node --version' from cli
````

**2. Install dependencies**
specified in package.json version of protractor will be installed
````
run 'npm install'
````

**3. Update webdriver-manager package**
it was installed automatically with protractor
````
run 'webdriver-manager update'
````

**5. Run tests**
````
run 'protractor'
````

**Note: how to install protractor globally or locally to your project**
for this project protractor was already in step 2
````
globally: npm install -g protractor
locally: npm install protractor
as a dependency (will add it to package.json): npm install -g -D protractor
check installation by running 'protractor --version' from cli
````
