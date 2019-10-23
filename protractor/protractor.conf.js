// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');
const tsConfig = require("./tsconfig.json");

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './specs/**/*.e2e-spec.ts'
  ],
  suites: {
    ex1: './specs/exercises/ex1.e2e-spec.ts',
    ex2: './specs/exercises/ex2.e2e-spec.ts',
    ex3: './specs/exercises/ex3.e2e-spec.ts',
    ex4: './specs/exercises/ex4.e2e-spec.ts',
    exercises: './specs/exercises/*.ts',
    answers: './specs/answers/*.ts',
    anonymous: './specs/anonymous/*.ts',
    authenticated: './specs/authenticated/*.ts'
  },
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4201',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    require('tsconfig-paths').register({
      project: 'protractor/tsconfig.json',
      baseUrl: 'protractor/',
      paths: tsConfig.compilerOptions.paths
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
