var mongoose= require("mongoose");
var db="mongodb+srv://ecomm:webworkfirst@cluster0.dhd9e.mongodb.net/db?retryWrites=true&w=majority"

mongoose.connect(db,
    {useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
    }
)
.then(console.log("DATABASE CONNECTED"))
.catch((e)=>{console.log(e)});

