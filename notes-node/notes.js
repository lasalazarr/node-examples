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

  notes.push(note);
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
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
