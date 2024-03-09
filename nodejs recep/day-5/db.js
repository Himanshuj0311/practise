const mongoose=require("mongoose");

const connection=mongoose.connect("mongodb://127.0.0.1:27017/test");

const userSchema=mongoose.Schema({
    name:String,
    age:Number,
    is_married:Boolean
})

const user=mongoose.model("User",userSchema)

module.exports={connection,user}