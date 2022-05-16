const { createComment, getComments } = require('../controllers/comment.controller');
const express = require('express')
const router = express.Router();

router.route('/api/comment')
    .post(createComment)

router.route('/api/comments/:postId')
    .get( getComments )

module.exports = router;