const express = require('express')
const app = express()
const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const PostsSchema = new mongoose.Schema({
    title: {
        type: String
    },
    author: {
        type: String
    },
    desc: {
        type: String
    }
});

let Posts = mongoose.model('posts',PostsSchema);


app.get('/', (req, res) => res.send('Server is Running'))

app.get('/getPosts', async (req, res) => {
    const posts = await Posts.find();
    res.json(posts);
 })

module.exports = app;
