const fs = require("fs");
const path = require("path");

function filterByQuery(query, noteList) {
    let noteTitle = [];
    let filteredResults = noteList;
    if (query.notText) {
      if (typeof query.notText === 'string') {
        noteTitle = [query.notText];
      } else {
        noteTitle = query.notText;
      }
      console.log(noteTitle);
      noteTitle.forEach(noteTitle => {
        filteredResults = filteredResults.filter(
          noteText => noteText.noteList.indexOf(noteTitle) !== -1
        );
      });
    }
    if (query.saveNoteBtn) {
      filteredResults = filteredResults.filter(noteText => noteText.saveNoteBtn === query.saveNoteBtn);
    }
    if (query.newNoteBtn) {
      filteredResults = filteredResults.filter(noteText => noteText.newNoteBtn === query.newNoteBtn);
    }
    if (query.name) {
      filteredResults = filteredResults.filter(noteText => noteText.name === query.name);
    }
    return filteredResults;
  }
  

  function createNewnoteText(body, noteList) {
    const noteText = body;
    noteList.push(noteText);
    fs.writeFileSync(
      path.join(__dirname, './db/db.json'),
      JSON.stringify({noteText: noteList}, null, 2)
    );
    return noteText;
  }
  
  function validatenoteText(noteText) {
    if (!noteText.name || typeof noteText.name !== 'string') {
      return false;
    }
    if (!noteText.newNoteBtn || typeof noteText.newNoteBtn !== 'string') {
      return false;
    }
    if (!noteText.saveNoteBtn || typeof noteText.saveNoteBtn !== 'string') {
      return false;
    }
    if (!noteText.noteList || !Array.isArray(noteText.noteList)) {
      return false;
    }
    return true;
  }

  module.exports = {
      filterByQuery,
      createNewnoteText,
      validatenoteText
  };