const Post = require('../models/post.model');
const chunk = (arr, size) => arr.reduce((acc, e, i) => (i % size ? acc[acc.length - 1].push(e) : acc.push([e]), acc), []);
const sendPostsInChunks= (res,page=1)=>{
    Post.find({})
    .then(result => {
        const pages = Math.ceil(result.length/4)
        result = result.reverse()
        result=chunk( result, 4 )[page-1]
        res.status(200).json({ result, pages })
    })
    .catch(error => res.status(500).json({msg: error}))
}
const getPosts = ((req, res) => {
    Post.find({})
        .then(result => res.status(200).json({ result }))
        .catch(error => res.status(500).json({msg: error}))
})

const createPost = ((req, res) => {
    Post.create(req.body)
        .then(sendPostsInChunks(res))
        .catch((error) => res.status(500).json({msg:  error }))
})

const getPost = ((req, res) => {
    Post.findOne({ _id: req.params.postId })
        .then(result => res.status(200).json({ result }))
        .catch(() => res.status(404).json({msg: 'Post not found'}))
})

const getPostsByPage = ((req, res) => {
    sendPostsInChunks(res,req.params.page)
})

module.exports = { getPosts, createPost, getPost, getPostsByPage }