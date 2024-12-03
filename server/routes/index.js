const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

/**
 * App Routes yo
*/
router.get('/', mainController.homepage);
router.get('/about', mainController.about);

module.exports = router;