const fs = require('fs');

const readStream = fs.createReadStream('./docs/data.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./docs/data01.txt');

readStream.on('data', (chunk) => {
    console.log('--------- NEW CHUNK ---------');
    console.log(chunk/* .toString() */);
    writeStream.write('\nNEW CHUNK\n');
    writeStream.write(chunk);
});