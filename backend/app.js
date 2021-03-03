const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const routes = require('./Routes/PostsRoutes')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.use(express.bodyParser());
app.use('/', routes);

module.exports = app;
