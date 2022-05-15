const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    title:String,
    content:String,
    Date:Date,
})

const Post = mongoose.model('Post', PostSchema)

module.exports = Post