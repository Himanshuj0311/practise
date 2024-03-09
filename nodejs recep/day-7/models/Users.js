const mongoose = require("mongoose");

const userSchema=mongoose.Schema({
    username:String,
    email:String,
    role:{type:String,enum:["Admin","Explorer"]},
    password:String
    
})

const userModel=mongoose.model("Users",userSchema);

module.exports={userModel}