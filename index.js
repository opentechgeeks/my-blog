
const path = require('path')

const expressEdge = require ('express-edge')

const express = require('express')

const mongoose = require('mongoose')

const Post = require('./database/models/Post')

const bodyParser= require('body-parser')

const fileUpload = require('express-fileupload')

const createPostController = require('./controllers/createPost')

const homePageController = require("./controllers/homePage");

const getPostController = require("./controllers/getPost");


const storePostController = require("./controllers/storePost");

const app = express()


mongoose.connect('mongodb://localhost/my-blog')

app.use(fileUpload())

app.use(express.static('public'))

app.use(expressEdge)

app.set('views', `${__dirname}/views`)


app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))

const storePost = require("./middleware/storePost");


app.use("/posts/store", storePost)

app.get("/", homePageController);
app.get("/post/:id", getPostController);
app.get("/posts/new", createPostController);
app.post("/posts/store", storePostController);



app.listen(8080, ()=> {
    console.log('App listening on port 8080')
})

