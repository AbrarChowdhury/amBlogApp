const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    comment:String,
    parentId:String,
    userName:String,
    postId : String,
},{timestamps: true})

const Comment = mongoose.model('Comment', CommentSchema)

module.exports = Comment