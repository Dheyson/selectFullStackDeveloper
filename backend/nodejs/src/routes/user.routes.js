const express = require('express');
const usersController = require('../controller/users.controller');
const sessionController = require('../controller/session.controller');
const authMiddleware = require('../app/middleware/auth');

const router = express.Router();

router.get('/users', usersController.getUsers);

router.get('/users/:id', usersController.getUser);

router.post('/users', usersController.createUser);

router.put('/users/:id', usersController.update);

router.post('/sessions', sessionController.default);

// router.put('/users', authMiddleware, usersController.createUser);

module.exports = router;
