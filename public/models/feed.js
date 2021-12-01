var mongoose = require("mongoose");

var feedSchema= new mongoose.Schema({  
    email:{
        type: String
    },
    message: {
        type: String
    },
    sub:{
        type: String
    },
    date:{
        type: Date, default: new Date().toLocaleDateString()
    }
})

var feed = new mongoose.model("feed", feedSchema);
module.exports= feed;