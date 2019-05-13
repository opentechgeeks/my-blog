const mongoose = require('mongoose')

const Post = require('./database/models/Post')

mongoose.connect('mongodb://localhost/my-blog')

Post.create ({
    title: 'Automation Testing',
    description: 'Automation testing of REST APIs',
    content: 'Best tools for Rest APIs automation testing are Postman or Rest Assured Framework'
}, (error, post) => {
    console.log (error, post)
})

Post.find({}, (error, post) => {

console.log (error, post)
})

