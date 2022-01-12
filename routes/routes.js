const router = require('express').Router();

const recordController = require('../controllers/recordController');

router.use('/records', recordController);

module.exports = router;
