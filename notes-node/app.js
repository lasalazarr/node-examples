console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

var command = process.argv[2];
console.log('Command: ', command);

// if (command === 'add'){
//     console.log('Adding new note');
// } else if (command === 'list'){
//     console.log('List all notes');
// } else if (command === 'remove'){
//     console.log('Remove all notes');
// } else if (command === 'read'){
//     console.log('Read all notes');
// } else {
//     console.log('No define');
// }