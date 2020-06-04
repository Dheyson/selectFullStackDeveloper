const express = require('express');
const postController = require('../app/controllers/posts.controller');

const router = express.Router();

router.get('/posts', postController.listPosts);

router.get('/posts/:id', postController.findPostsById);

router.post('/posts', postController.createPost);

router.put('/posts/:id', postController.updatePostById);

router.delete('/posts/:id', postController.deletePostById);

module.exports = router;
