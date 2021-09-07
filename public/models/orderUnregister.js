var mongoose = require("mongoose");

var orderUnregisterSchema= new mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    phone:{
        type: Number
    },
    whatsapp:{
        type: Number
    },
    address:{
        type: String
    },
    paymentMethod:{
        type: String,
    },
    id:{
        type: String
    },
    img:{
        type: String
    },
    title:{
        type: String
    },
    price:{
         type: String
    },
    quantity:{
        type: String
    },
    colors:{
        type: String
    },
    sizes:{
        type: String
    },
    message: {
        type: String
    }

})

var orderUnregisterDB = new mongoose.model("orderUnregister", orderUnregisterSchema);
module.exports= orderUnregisterDB;