var mongoose = require("mongoose");

var cartSchema= new mongoose.Schema({
    
    userId:{
        type: String
    },
    productId: {
        type: Array
    },
    img:{
        type: String
    },
    title: {
        type: String
    }
})

var cartDB = new mongoose.model("cart", cartSchema);
module.exports= cartDB;