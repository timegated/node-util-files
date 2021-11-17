import parse from 'csv-parse';
import fs from 'fs';

const csvData = [];

const createUrls = (path) => {
  fs.createReadStream(path)
    .pipe(parse({ delimiter: ":" }))
    .on('data', (csvrow) => {
      const link = `https://gsi.learnbyloci.com/${csvrow[0].replace(/\s/g, '').toLowerCase()}`
      csvData.push(link);
    })
    .on('end', () => {
      console.log('Finished');
      console.log(csvData);
      fs.writeFile('./out/school-urls.csv', csvData, 'utf8', function (err) {
        if (err) {
          console.log('Some error occured - file either not saved or corrupted file saved.');
        } else{
          console.log('It\'s saved!');
        }
      });
    });
};

createUrls('./csv-xlsx/hubspots-contacts.csv');