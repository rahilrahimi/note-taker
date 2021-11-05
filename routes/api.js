const router = require("express").Router();
const express = require('fs');
// const { filterByQuery, createNewNoteText, validateNoteText, } = require("../lib/api.js");
// const { noteText } = require("../db/db.json"); "destructuring" won't work here. This is not an object with noteText property.
const dbData = require("../db/db.json");
const fs = require("fs")

// /api/notes
router.get("/notes", (req, res) => {
  //give the frontend ALL NOTES.
    //2. TEST this: check if data is correct in terminal, then res.json.
    res.json(dbData) //will this work?
  // })
});


router.post("/notes", (req, res) => {
  console.log("you hit POST /api/notes")
  console.log(req.body)
const input = req.body;
  let oldNote =JSON.parse(fs.readFileSync(path.join(__dirname,"../db/db.json"),"utf-8")) 
  oldNote.push(newNote)
  fs.writeFileSync("./db/db.json",JSON.stringify(oldNote))
  res.json(oldNote)

  //2. ADD to the db.json array

  //3. WRITE back into db.json

  //4. res.json() (send something back up to frontend!)

});

module.exports = router;


// router.post("./js/index.js", (req, res) => {
//   req.body = noteText.length.toString();

//   // if any data in req.body is incorrect, send 400 error back
//   if (!validatenoteText(req.body)) {
//     res.status(400).send("The noteText is not properly formatted.");
//   } else {
//     const noteText = createNewnoteText(req.body, noteText);
//     res.json(index.js);
//   }
// });


