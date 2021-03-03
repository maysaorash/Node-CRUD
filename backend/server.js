const mongoose = require("mongoose");
require("dotenv").config({path:'.env'});

 require('./Models/Posts')
 const app = require("./app");
 
  mongoose.connect(process.env.DATABASE,
  {
      useUnifiedTopology:true,
      useNewUrlParser:true
  });
  mongoose.Promise = global.Promise;// tell Mongoose to use ES6 promises
  mongoose.connection.on("error",(err)=>{
      console.error(`Database Connection Error -> ${err.message}`)
  })
const server = app.listen(3000,()=> {
  console.log("Express running PORT ${server.address().port}")
})