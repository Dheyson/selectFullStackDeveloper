const express = require('express');
const userController = require('../controller/user.controller');

const router = express.Router();

router.post('/users', userController.createUser);

router.get('/users', userController.listUsers);

module.exports = router;
