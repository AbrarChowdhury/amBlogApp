const { getPosts, getPostsByPage, createPost, getPost } = require('../controllers/post.controller');
const express = require('express')
const router = express.Router();

router.route('/api/:page')
    .get(getPostsByPage)

router.route('/api/post')
    .get(getPosts)
    .post(createPost)

router.route('/api/post/:postId')
    .get( getPost )

module.exports = router;