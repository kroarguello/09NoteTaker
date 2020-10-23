const router = require("express").Router();
const fs = require('fs');
const util = require('util');
const noteData = require("../db/notes.js");

//read db.json and return all saved
router.get('/notes', function(req, res){
console.log("here");

  noteData.getNotes()
 .then((notes)=>res.json(notes))
 .catch((err) =>console.log(err))

}) 


// received a new notes to save in the request body and 
//add in db.json
// and return new note to the client

router.post('/notes',function(req,res){
 
    noteData.addNote(req.body)
    .then((notes)=>res.json(notes))
    .catch((err) =>console.log(err))

});

//this api delete with id 
router.delete('/notes/:id',function(req,res){

    noteData.deleteNote(req.params)
    .then((note)=>res.json(note))
    .catch((err) =>console.log(err))

});

module.exports = router;