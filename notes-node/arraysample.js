console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');

//var user = os.userInfo();

console.log(_.isString(true));
console.log(_.isString('Andrew'));

var filteredArray = _.uniq(['Luis', 1, "Andrew", 2,3,4,4,5]);
console.log(filteredArray);

// console.log(user);

// fs.appendFile('hola.txt', `Hello ${user.username} ! Your are ${notes.age}`, function(err){
//     if(err){
//         console.log('No pudo abrir');
//     }
// });

// var res = notes.addNote();
// console.log(res);

// console.log('Result:', notes.add(9, -2));