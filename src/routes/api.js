const router = require('express').Router();
const entitiesRouter = require('./api/entities');

router.use('/entities', entitiesRouter);

module.exports = router;