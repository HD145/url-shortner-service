require("dotenv").config();
const express = require("express");
const { connectToDB } = require("./connection");
const { router } = require("./routes/url");

const app = express();

app.use(express.json());

connectToDB().then(()=>console.log("Connected to Database"));

app.use("/url", router)

app.listen(process.env.PORT, ()=>console.log(`Server is running on PORT ${process.env.PORT}`));