const Post = require('../models/post.model');

const getPosts = ((req, res) => {
    Post.find({})
        .then(result => res.status(200).json({ result }))
        .catch(error => res.status(500).json({msg: error}))
})

const createPost = ((req, res) => {
    Post.create(req.body)
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(500).json({msg:  error }))
})

const getPost = ((req, res) => {
    Product.findOne({ _id: req.params.postId })
        .then(result => res.status(200).json({ result }))
        .catch(() => res.status(404).json({msg: 'Post not found'}))
})


module.exports = { getPosts, createPost, getPost }