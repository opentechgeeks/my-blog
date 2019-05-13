
const path = require('path')

const expressEdge = require ('express-edge')

const express = require('express')

const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://localhost/my-blog')

app.use(express.static('public'))

app.use(expressEdge)

app.set('views', `${__dirname}/views`)

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/post/new', (req, res) => {
    res.render('create')
})


app.get('/about', (req, res) => {
    res.render('about')

})

app.get('/post', (req, res) => {
    res.render('post')

})

app.get('/contact', (req, res) => {
    res.render('contact')

})



app.listen(8080, ()=> {
    console.log('App listening on port 8080')
})

