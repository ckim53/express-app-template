const { Router } = require('express');
const usersController = require('../controllers/usersController');
const router = Router();

router.get('/', usersController.displayMessages);

module.exports = router;