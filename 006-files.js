const fs = require('fs');
const date = Date();

// reading files
/* fs.readFile('./docs/blog1.txt', (err, data) => {
    if(err){console.log(err);}
    console.log(data.toString());

});

console.log('last line'); */

// writing files
/* fs.writeFile('./docs/blog2.txt', 'guten nichtmittag', () => {
    console.log('Saved!! at ' + date);
}) */

// directories
/* if(!fs.existsSync('./js')) {
fs.mkdir('./js', (err) => {
    if(err){console.log(err);}
    console.log('Folder created!! ' + date);
})}
else {
    fs.rmdir('./assets', (err) => {
        if(err){console.log(err);}
        console.log('folder deleted! at' + date);
    })
} */

// deleting
if(fs.existsSync('./delete.txt')) {
    fs.unlink('./delete.txt', (err) => {
        if(err){console.log(err);}
        console.log('file deleted! at ' + date);
    })
}

