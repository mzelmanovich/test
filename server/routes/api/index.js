const router = require('express').Router();
const testRoutes = require('./tests');

router.use('/tests', testRoutes);

module.exports = router;