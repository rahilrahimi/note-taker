const fs = require('fs');
const util = require('util');
const uuid = require('uuid');

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

        // if (!title || !body) {
        //     throw new Error('title & body can not be blanck');
        // }

        const newNote = { title, body, id: uuid() }

        return this.getNotes()
            .then(notes => [...notes, newNote])
            .then(updateNote => this.write(updateNote))
            .then(() => newNote)


    }

    deleteNote(id) {
        return this.getNotes()
            .then((notes) => notes.filter(note => note.id !== id))
            .then(filterNotes => this.write(filterNotes))


    }
}
module.exports = new Store();
