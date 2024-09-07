const mongoose = require("mongoose");
require("dotenv").config();

const connectToDB = ()=>{
    return mongoose.connect(`mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.uk3x6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
}

module.exports = {
    connectToDB
}