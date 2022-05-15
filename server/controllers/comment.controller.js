const Comment = require('../models/comment.model');

const createComment = ((req, res) => {
    Comment.create(req.body)
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(500).json({msg:  error }))
})

const getComments = ((req, res) => {
    Comment.findOne({ postId: req.params.postId })
        .then(result => res.status(200).json({ result }))
        .catch(() => res.status(404).json({msg: 'comment not found'}))
})

module.exports = { createComment, getComments }