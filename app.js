require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./db/conn");
const cookieParser = require("cookie-parser");


const products = require("./models/productsSchema");
// const DefaultData = require("./defaultdata");
const cors = require("cors");
const router = require("./routes/router");


// const jwt = require("jsonwebtoken");


// middleware
app.use(express.json());
app.use(cookieParser(""));
app.use(cors());
app.use(router);

const port = process.env.PORT || 5007;
// app.get("/",(req,res)=>{
//     res.send("your server is running");
// });


if(process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));
}

app.listen(port,()=>{
    console.log(`your server is running on port ${port} `);
});

// DefaultData();