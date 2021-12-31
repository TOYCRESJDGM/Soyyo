const router = require('express').Router();

const entitiesController = require('../../controllers/entities.controller');

router.post('/filter', entitiesController.filter);

module.exports = router;