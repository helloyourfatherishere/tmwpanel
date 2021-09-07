var mongoose = require("mongoose");

var orderSchema= new mongoose.Schema({
    
    userId:{
        type: String
    },
    userDetails:{
        type: Object
    },
    orderDetails: {
        type: Array
    },
    paymentMethod:{
        type: String
    }
})

var orderDB = new mongoose.model("order", orderSchema);
module.exports= orderDB;