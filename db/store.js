const { text } = require('express');
const fs = require('fs');
const util = require('util');
const {v1:uuidv1} = require('uuid');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class Store {
    read() {
        return readFile('db/db.json', 'utf8')
    }

    write(note) {
        return writeFile('db/db.json', JSON.stringify(note))
    }

    getNotes() {
        return this.read().then(notes => {
            let parseNotes;

            try {
                parseNotes = [].concat(JSON.parse(notes));

            } catch (err) {
                parseNotes = [];
            }
            return parseNotes;
        })
    }

    postNote(note) {
        const { title, body } = note;
console.log(note, title, text);
        const newNote = { title, body, id: uuidv1() }

        return this.getNotes()
        .then((notes) => [...notes, newNote])
        .then((updatedNotes) => this.write(updatedNotes))
        .then(() => newNote);


    }

    deleteNote(id) {
        return this.getNotes()
            .then((notes) => notes.filter(note => note.id !== id))
            .then(filterNotes => this.write(filterNotes))


    }
}
module.exports = new Store();
