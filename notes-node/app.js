console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var user = os.userInfo();

console.log(user);

fs.appendFile('hola.txt', `Hello ${user.username} ! Your are ${notes.age}`, function(err){
    if(err){
        console.log('No pudo abrir');
    }
});

var res = notes.addNote();
console.log(res);

console.log('Result:', notes.add(9, -2));