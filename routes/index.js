const router = require('express').Router();
const api = require('../routes/api');
const htmlRoutes = require('../routes/html');

router.use('/',htmlRoutes);
router.use('/api',api);

module.exports = router;