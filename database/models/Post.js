const mongoose = require ('mongoose')

const PostSchema = new mongoose.Schema ({

    title: String,
    Description: String,
    content: String
    
})  


const Post = mongoose.model('Post', PostSchema)

module.exports = Post

