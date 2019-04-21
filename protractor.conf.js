// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

// runtime test reporter in console https://www.npmjs.com/package/jasmine-spec-reporter
const {SpecReporter} = require('jasmine-spec-reporter/built/main');
// html test reporter https://www.npmjs.com/package/protractor-jasmine2-html-reporter
let Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

module.exports.config = {
    allScriptsTimeout: 11000,
    // path to files with tests.
    // In current set up will include all files that end .e2e-spec.ts that are located in src/e2e/tests folder
    specs: [
        '**/**/*.e2e-spec.ts'
    ],
    // will use chrome browser
    capabilities: {
        browserName: 'chrome',
        // chromeOptions: {
        //   args: [
        //     '--no-sandbox',
        //     '--disable-gpu',
        //     '--headless',
        //     '--disable-software-rasterizer',
        //     '--window-size = 1920, 1080',
        //   ]
        // },
    },
    // protractor will connect directly to chrome driver
    // no selenium server shall be started (do not run 'webdriver-manager start')
    directConnect: true,
    // start url
    baseUrl: 'https://www.google.com/',
    // jasmine is default framework, no need to explicitly specify
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        // print: function () {
        // }
    },

    // true by default. Set to false if async/await syntax is used
    SELENIUM_PROMISE_MANAGER: false,

    // when uncommented, protractor is the only global variable, so no confusion for $
    // noGlobals: true,

    onPrepare() {
        // disabled waiting for angular on the page
        // https://www.protractortest.org/#/api?view=ProtractorBrowser.prototype.waitForAngularEnabled
        browser.waitForAngularEnabled(false);
        // link to tsconfig file. Needed for typescript
        // https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
        require('ts-node/dist/index').register({
            project: 'tsconfig.json',
        });
        // initialize html reporter
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
          savePath: 'out',
          fileName: 'index',
        }));
        // initialize runtime console reporter
        jasmine.getEnv().addReporter(new SpecReporter({spec: {displayStacktrace: true}}));
    }
};
