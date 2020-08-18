const cucumberJiraReporter=require('../function');


const options={
    cucumberJsonFilePath:'./resources/',
    reportFile : 'cucumber_report.json',
    uri:'https://jira.walmart.com/rest/raven/1.0/import/execution/cucumber',
    authorization:'Basic dm41MGljODpXZWxjb21lQDY='
};
cucumberJiraReporter.report(options);
