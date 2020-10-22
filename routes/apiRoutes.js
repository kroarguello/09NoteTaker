const router = require("express").Router();
const fs = require('fs');
const util = require('util');
const noteData = require("../db/db.json");

//read db.json and return all saved
router.get('/api/notes', function(req, res){
console.log("here");
//var temp = JSON.parse(noteList);
//noteData.getNotes()
 //.then((notes)=>res.json(temp))
 //.catch((err) =>res.status(500).json(err))
//fs.readFile('db/db.json', "utf8").then((noteList) => {
 

}) 
//});

// received a new notes to save in the request body and 
//add in db.json
// and return new note to the client

router.post('/api/notes',function(req,res){
 
    noteData.saveNote()
    .then((notes)=>res.json(temp))
    .catch((err) =>res.status(500).json(err))

//    fs.writeFileSync('./db/db.json',JSON.stringify(data));

    //handleNoteSave -> svedNote -->getAndrenderNotes and renderActiveNote

});

//this api delete with id 
router.delete('/api/notes/:d',function(req,res){


});

module.exports = router;