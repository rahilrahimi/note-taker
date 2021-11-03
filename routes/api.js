const router = require("express").Router();
const { text } = require("express");
const { filterByQuery, createNewText, validateText, } = require("../../lib/text");
const { text } = require("./db/db.json");

router.get("/text", (req, res) => {
  let results = text;
  if (req.query) {
    results = filterByQuery(req.query, results);
  }
  res.json(results);
});


router.post("/text", (req, res) => {
  req.body = text.length.toString();

  // if any data in req.body is incorrect, send 400 error back
  if (!validateText(req.body)) {
    res.status(400).send("The text is not properly formatted.");
  } else {
    const text = createNewText(req.body, text);
    res.json(text);
  }
});

module.exports = router;