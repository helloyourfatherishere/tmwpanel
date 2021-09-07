var mongoose = require("mongoose");

var delieveredSchema= new mongoose.Schema({  
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
    },
    date:{
        type: Date, default: Date.now()
    }
})

var delieveredDB = new mongoose.model("delievered", delieveredSchema);
module.exports= delieveredDB;