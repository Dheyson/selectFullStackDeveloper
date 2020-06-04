const express = require('express');
const usersController = require('../app/controllers/users.controller');
const sessionController = require('../app/controllers/session.controller');
const authMiddleware = require('../app/middlewares/auth.middleware');

const router = express.Router();

router.get('/users', usersController.getUsers);

router.get('/users/:id', usersController.getUser);

router.post('/users', usersController.createUser);

router.post('/sessions', sessionController.default);

router.use(authMiddleware);

router.put('/users/:id', usersController.update);

module.exports = router;
