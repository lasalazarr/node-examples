console.log('Starting notes.js');

//module.exports.age = 25;

// module.exports.addNote = () =>{
//     console.log('addNote');
//     return 'New note';
// };

// module.exports.add = (a,b) =>{
//     return a+b;
// };

var addNote =(title, body) => {
    console.log('Adding note', title, body);
};

module.exports = {
    addNote
};