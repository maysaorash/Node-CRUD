const express = require('express')
const router = express.Router()
const postController = require('../Controllers/PostController')

router.get('/', postController.baseRoute);

router.post('/create', postController.createPost);

router.get('/getPosts', postController.getPosts);

router.get('/getPost/:id', postController.getSinglePost);
router.put('/post/:id/update', postController.updatePost);
router.delete('/delete/:id', postController.deletePost);



module.exports = router;
