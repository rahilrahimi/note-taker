const express = require('express');
const router = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();
const routes = require('./routes');
const html = require('./routes/html');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//use apiRoutes
 app.use(routes);
// app.use('/', html);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
