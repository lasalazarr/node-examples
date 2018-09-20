console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var user = os.userInfo();

//console.log(user);

fs.appendFile('hola.txt', `Hello ${user.username} !`, function(err){
    if(err){
        console.log('No pudo abrir');
    }
});