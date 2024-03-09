const mongoose = require("mongoose");

const noteSchema=mongoose.Schema({
    title:String,
    dis:String,
    sub:String,
    userID:String
})

const noteModel=mongoose.model("Notes",noteSchema);

module.exports={noteModel}