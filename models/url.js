const mongoose = require("mongoose");

const urlSchema = mongoose.Schema({
    shortUrl:{
        type:String, 
        required:true, 
        unique:true
    },
    redirectUrl:{
        type:String, 
        required:true, 
    },
    logHistory:[
        {
            timeStamp :{
                type:String
            }
        }
    ]
})

const URL = mongoose.model("URL", urlSchema);

module.exports={
    URL
}