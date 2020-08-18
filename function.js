const fs = require('fs');
const path = require('path');
const axios = require('axios');


function report(options){
    const jsonFilePath=options.cucumberJsonFilePath;
    const reportJsonFile = options.reportFile;
    const globalRoot = path.resolve(__dirname, jsonFilePath);
    const restUri=options.uri;
    const authorization=options.authorization;
    console.log('globalRoot: ' + globalRoot);
    
    console.log('jsonReportFile: ' + globalRoot + '\\' + reportJsonFile);
    const rawdata = await fs.readFileSync(globalRoot + '\\' + reportJsonFile);
    const reportJsonData = JSON.parse(rawdata);
    console.log('reportJsonData: ' + reportJsonData);
      
    const dt = reportJsonData;
    console.log('dt2: ' + dt);
    const uri = restUri;

    const axiosConfig = {
      headers: {
        Authorization: authorization,
        'Content-Type': 'application/json',
      },
    };
    try {
      const returnValue = await axios.post(uri, JSON.stringify(dt), axiosConfig);
      console.log('Request result', returnValue.data);
      return await returnValue.data;
    } catch (error) {
      console.error(`Request error: ${error.message}`);
      return null;
    }    
}
module.exports={
    report:report
};

