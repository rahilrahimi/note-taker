const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const api = require('./routes/api');
const html = require('./routes/html');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//use apiRoutes
// app.use('/api', api);
// app.use('/', html);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
