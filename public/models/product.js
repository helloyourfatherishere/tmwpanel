var mongoose = require("mongoose");

var product_Schema= new mongoose.Schema({
    title:{
        type: String,
        trim: true,
        lowercase: true
    },
    main_img:{
        type: Object,
    },
    images:{
        type: Array,
    },
    link: {
        type: String,
    },
    price: {
        type: String,
    },
    cut_price: {
        type: String,
    },
    sell_price:{
        type: String,
    },
    discount:{
        type: Boolean,
    },
    visiblity: {
        type: Boolean,
    },
    sell:{
        type: Boolean,
    },
    brand:{
        type: Boolean,
    },
    brand_name:{
        type: String,
        default: "null",
        lowercase: true,
    },
    colors:{
        type: String,
        lowercase: true,
    },
    sizes: {
        type: String,
        lowercase: true,
    },
    search_keyword:{
        type: String,
        lowercase: true
    },
    category:{
        type: String,
        lowercase: true
    },
    type:{
        type: String,
        lowercase: true
    },
    colors:{
        type: String,
        lowercase: true,
    },
    sizes:{
        type: String,
        lowercase: true,
    },
    keywords:{
        type: String,
        lowercase: true,
    },
    table:{
        type: Object,
        lowercase: true,
    },
    date:{
        type: Date,
        default: Date.now()
    },
    des:{
        type: String,
        trim: true,
        lowercase: true
    },
    note:{
        type: String,
        trim: true,
        lowercase: true
    },
    comments: {
       type: Array,
    }
})

var product = new mongoose.model("product", product_Schema);
module.exports= product;