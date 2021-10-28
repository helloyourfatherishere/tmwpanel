var mongoose = require("mongoose");
var bcrypt= require("bcryptjs");
var jwt= require("jsonwebtoken");

var mainSchema= new mongoose.Schema({
    poster:{
        type: Array
    },
    sell:{
        type: Boolean
    },
    discount: {
        type: Boolean
    },
    pass:{
        type: String
    },
    cate:{
        type: Array
    },
    brand:{
        type: Array
    },
    code:{
        type: String
    },
    tokens:[{
        token:{
            type: Object,
        }
    }],

})

mainSchema.pre("save", async function(next){
    try{
        if(this.isModified("pass") && this.isModified("code")){
            console.log("REACHED");
            console.log(this.isModified("pass") + " " + this.isModified("code"))
            this.pass= await bcrypt.hash(this.pass, 10);
            this.code= await bcrypt.hash(this.code, 10)
            console.log(`PASSWORD: ${this.pass} && CODE: ${this.code}`)
        }
        next();
    }catch{
        (e)=>{console.log(e)}
    }
})


mainSchema.methods.generate= async function(){
    try{
        let token= await jwt.sign({_id: this._id}, process.env.KEY);
        this.tokens= this.tokens.concat({token: token});
        await this.save();
        return token;
    }   
    catch{
        (e)=>{console.log(e)}
    }
}


var main = new mongoose.model("main", mainSchema);
module.exports= main;