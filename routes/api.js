const router = require("express").Router();
const { filterByQuery, createNewNoteText, validateNoteText, } = require("../lib/api.js");
const { noteText } = require("../db/db.json");

router.get("/", (req, res) => {
  let results = db.json;
  if (req.query) {
    results = filterByQuery(req.query, results);
  }
  res.json(db.json);
});


router.post("./js/index.js", (req, res) => {
  req.body = noteText.length.toString();

  // if any data in req.body is incorrect, send 400 error back
  if (!validatenoteText(req.body)) {
    res.status(400).send("The noteText is not properly formatted.");
  } else {
    const noteText = createNewnoteText(req.body, noteText);
    res.json(index.js);
  }
});

module.exports = router;