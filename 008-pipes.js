const fs = require('fs');

const readStream = fs.createReadStream('./docs/data.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./docs/data01.txt');

readStream.pipe(writeStream);
