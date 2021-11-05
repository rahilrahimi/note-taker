const express = require('express');
const router = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();
// const routes = require('./routes');
const htmlRoutes = require('./routes/html');
const apiRoutes = require('./routes/api');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//use apiRoutes
 app.use('/api', apiRoutes);
 app.use('/', htmlRoutes);
// app.use('/', html);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
