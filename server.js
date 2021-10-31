const express = require('express');
const { note } = require('./db/db.json');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());