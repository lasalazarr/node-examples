// var obj = {
//     name: 'Alberto'
// };
// var stringObje = JSON.stringify(obj);
// console.log(typeof stringObje);
// console.log(stringObje);

// var personString = '{"name": "Alberto", "age": 15}';

// var person = JSON.parse(personString);

// console.log(typeof person);
// console.log(person);
// console.log(person.age);

const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body : 'Some body'
};
var originatNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originatNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);