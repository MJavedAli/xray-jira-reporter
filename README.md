# `xray-jira-reporter`

[![NPM version](https://img.shields.io/npm/v/xray-jira-reporter.svg)](https://www.npmjs.com/package/xray-jira-reporter)

A wrapper over xray jira reporter with axios library

## Installation

```shell
$ npm install --save xray-jira-reporter
```

## API

### Create A Client

```js
const cucumberJiraReporter = require("xray-jira-reporter");

// Initialize
const options = {
  cucumberJsonFilePath: "./resources/",
  reportFile: "cucumber_report.json",
  uri: "https://jira.company.com/restUri",
  authorization: "Basic dm4198jkjgXZWxjb21lQDY=",
};
cucumberJiraReporter.report(options);
```

## License

Copyright (c) 2020, Javed Ali (MIT License)
