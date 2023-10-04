const mongoose  = require("mongoose")

const mondbUrl="mongodb+srv://nirajpardhi19:HyijWuAymoU4iQHZ@cluster0.stikbhh.mongodb.net/?retryWrites=true&w=majority"

const connectDb=()=>{
    return mongoose.connect(mondbUrl);
}

module.exports={connectDb}