var mongoose = require("mongoose");
var user_Schema= new mongoose.Schema({
   name:{
       type: String,
       lowercase: true
   },
   email:{
       type: String,
       unique: true,
   },
   contact_email:{
       type: String,
   },
   pass:{
        type: String,
   },
   phone: {
       type: Number,
   },
   address:{
       type: String
   },
   security_code:{
       type: String
   },
   cart:{
       type: Array
   },
   order:{
       type: Array
   }, 
   received:{
       type: Array
   },
   tokens:[{
       token:{
           type: Object,
       }
   }],
})


var user = new mongoose.model("user", user_Schema);
module.exports= user;