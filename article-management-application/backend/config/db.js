const mongoose = require("mongoose");
require("dotenv").config();

const connection = ()=>{
    mongoose.connect(process.env.MONGO_URI);
    console.log("Database Connected...");
}

module.exports = connection;