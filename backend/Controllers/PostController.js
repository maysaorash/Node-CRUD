const mongoose = require('mongoose')
const Posts = mongoose.model('posts')


exports.baseRoute = async (req, res) => res.send('Server Running')

exports.getPosts = async (req, res) => {
    const posts = await Posts.find();
    res.json(posts);
 }

 exports.createPost = async(req, res) =>{
    await new Posts(req.body).save((err,data)=>{
      if(err){
        res.status(500).json({
          message:"Something went wrong, please try again later"
        });
      }else{
        res.status(200).json({
          message:"Post Created",
          data,
        });
      }
    });
    };  
    exports.getSinglePost = async(req, res) =>{
        let postID =req.params.id;
        await Posts.findByIdAndUpdate({_id: postID},{$set: req.body},(err,data)=>{
           if (err) {
             res.status(500).json({
               message:"Something went wrong, please try again later.", err
             });
           }else{
             res.status(200).json({
               message:"Post found",
               data,
             });
           }
         });
        };
        exports.updatePost = async(req, res) =>{
            let postID =req.params.id;
            await Posts.findByIdAndUpdate({_id: postID},{$set: req.body},(err,data)=>{
               if (err) {
                 res.status(500).json({
                   message:"Something went wrong, please try again later.", err
                 });
               }else{
                 res.status(200).json({
                   message:"Post Updated",
                   data,
                 });
               }
             });
            }; 

            exports.deletePost = async(req, res) =>{
                let postID =req.params.id;
                await Posts.deleteOne({_id: postID},{$set: req.body},(err,data)=>{
                   if (err) {
                     res.status(500).json({
                       message:"Something went wrong, please try again later.", err
                     });
                   }else{
                     res.status(200).json({
                       message:"Post Deleted",
                       data,
                     });
                   }
                 });
                }; 
