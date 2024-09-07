const mongoose = require("mongoose");
require("dotenv").config();

const connectToDB = ()=>{
    return mongoose.connect(process.env.MONGO_URI);
}

module.exports = {
    connectToDB
}