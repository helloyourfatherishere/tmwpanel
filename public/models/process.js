var mongoose = require("mongoose");

var processSchema= new mongoose.Schema({
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

var processDB = new mongoose.model("process", processSchema);
module.exports= processDB;