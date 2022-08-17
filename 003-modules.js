//  way 1 to export
/* const xyz = require('./people');

console.log(xyz);
console.log(xyz.people, xyz.age); */

//console.log(people);

//  way to export
const { people, ages} = require('./004-people');

console.log(people, ages);
