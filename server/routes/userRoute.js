const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/signup', userController.signup);
router.get('/user', userController.login);

module.exports = router;
