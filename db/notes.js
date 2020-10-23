const util = require("util");
const fs = require("fs");


const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

let deletedElement;

class Notes {
    constructor(){
        this.idnote = 0;
    }
    read(){
        return readFileAsync("db/db.json", "utf8");
    }
    writeNotes(note) {
        return writeFileAsync("db/db.json", JSON.stringify(note));
    }
    getNotes() {
        return this.read().then((notes) => {
            let parsedNotes;
            try {
                parsedNotes = [].concat(JSON.parse(notes));
            } catch (err) {
                parsedNotes = [];
            }
            return parsedNotes;
        })
    }
    addNote(note){
        const { title, text } = note;
        const newNote = {title, text, id: ++this.idnote};
        return this.getNotes()
        .then((notes) => [...notes, newNote])
        .then((updatedNotes) => this.writeNotes(updatedNotes))
        .then(() => newNote)
    }

    deleteNote(note){
        
       return this.getNotes().then((notes) => {
        notes.forEach(async function(element){
            if (element.id == note.id){
                deletedElement = element;
            }
        })
        const noteIndex = notes.indexOf(deletedElement);
        notes.splice(noteIndex, 1);
        this.writeNotes(notes);
        return notes;
    })
    }
}

module.exports = new Notes();
