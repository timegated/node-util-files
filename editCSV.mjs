import { createObjectCsvWriter } from 'csv-writer';
import csv from 'csv-parser';
import fs from 'fs';

const config = {
  input: '',
  output: '',
};

const inputCsv = [];
const modifiedCsv = [];

const csvWriter = createObjectCsvWriter({
  path: '',
  header: [],
  alwaysQuote: true,
});

function init () {
  console.log('Initializing...');
  console.log(`Preparing to parse CSV file --- ${config.input}`);

  fs.createReadStream(config.inputFile)
    .pipe(csv())
    .on('data', () => inputCsv.push(data))
    .on('end', () => {
      modifiedCsv = inputCsv;

      console.log('Finished!');
      initFunctions();
    });
};

function initFunctions() {
  console.log('Initializing Script Functionality');

  // Do stuff with csv file in here
}

function writeDataToFile() {
  console.log('Writing data');
  csvWriter.writeRecords(modifiedCsv)
    .then(() => {
      console.log('CSV write success!');
      console.log('Finished');
    });
}