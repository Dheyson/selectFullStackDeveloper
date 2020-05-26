const express = require('express');

const router = express.Router();

router.get('/user', (request, response) => {
	response.status(200).send({
		success: 'true',
		message: 'The user info has been requested'
	});
})
