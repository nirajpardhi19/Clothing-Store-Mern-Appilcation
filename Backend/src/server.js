//id=nirajpardhi19
// password=HyijWuAymoU4iQHZ
//152.58.31.193/32

const  app  = require(".");
const { connectDb } = require("./config/db");
//const { connectDb } = require("./config/db");

const PORT=5454;
app.listen(PORT,async ()=>{
    await connectDb();
    console.log("ecommerce api listing on port ",PORT)
})