console.log("Starting notes.js");

//module.exports.age = 25;

// module.exports.addNote = () =>{
//     console.log('addNote');
//     return 'New note';
// };

// module.exports.add = (a,b) =>{
//     return a+b;
// };

const fs = require("fs");

var addNote = (title, body) => {
  console.log("Adding note", title, body);
  var notes = [];
  var note = {
    title,
    body
  };

  try {
    var notesString = fs.readFileSync("notes-data.json");
    notes = JSON.parse(notesString);
  } catch (e) {
      //console.log(e);
  }

//   var duplicateNotes = notes.filter((note) => {
//         return note.title === title;
//   });

  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length == 0){
    notes.push(note);
    fs.writeFileSync("notes-data.json", JSON.stringify(notes));
  } else {
      console.log('Repeat title');
  }

  
};

var getAll = () => {
  console.log("Get all");
};

var remove = title => {
  console.log("Remove note", title);
};

var read = title => {
  console.log("read note", title);
};
module.exports = {
  addNote,
  getAll,
  remove,
  read
};
