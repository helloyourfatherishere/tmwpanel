var mongoose= require("mongoose");
var db= "mongodb+srv://ecom:ecom123@db.gby5k.mongodb.net/db?retryWrites=true&w=majority"

mongoose.connect("mmongodb://localhost:27017/db",
    {useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
    }
)
.then(console.log("DATABASE CONNECTED"))
.catch((e)=>{console.log(e)});

