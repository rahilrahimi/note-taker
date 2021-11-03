const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const api = require('./routes/api.js');
const html = require('./routes/html.js');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//use apiRoutes
app.use('/api', api.js);
app.use('/', html.js);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
