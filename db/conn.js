const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>console.log("connection of mongo is successfully done")).catch((error)=>console.log("error hai" + error.message))