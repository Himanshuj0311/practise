const mongoose = require ("mongoose");

const userSchema=new mongoose.Schema({
    username:String,
    email:String,
    role:{type:String,enum:["Admin","Explorer"]},
    password:String
    
})

const userModel=mongoose.model("User",userSchema)

module.exports={userModel}