// typescript version of protractor.conf.js
// tsconfig.json shall be present in root dir
// 'npm run tsc' shall be executed before the tests to create js conf file
// https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

// TODO: find out how to register specific tsconfig file

import { browser, Config } from 'protractor';
import { SpecReporter } from "jasmine-spec-reporter";
import { Jasmine2HtmlReporter } from 'protractor-jasmine2-html-reporter';

export let config: Config = {
    allScriptsTimeout: 11000,
    specs: [
        '../**/**/*.e2e-spec.ts'
    ],
    capabilities: {
        browserName: 'chrome',
    },
    directConnect: true,
    baseUrl: 'https://www.google.com/',
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        // print: function () {
        // }
    },

    SELENIUM_PROMISE_MANAGER: false,

    onPrepare: () => {
        // disabled waiting for angular on the page
        // https://www.protractortest.org/#/api?view=ProtractorBrowser.prototype.waitForAngularEnabled
        browser.waitForAngularEnabled(false);
        // link to tsconfig file. Needed for typescript
        // https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
        // require('ts-node/dist/index').register({
        //     project: 'src/e2e/tsconfig.e2e.json',
        // });
        // initialize html reporter
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
          savePath: 'out',
          fileName: 'index',
        }));
        // initialize runtime console reporter
        jasmine.getEnv().addReporter(new SpecReporter({spec: {displayStacktrace: true}}));
    }
};
