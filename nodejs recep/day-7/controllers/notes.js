const {noteModel} = require("../models/notes")

const add=async(req,res)=>{
    try {
        const {title,dis,sub}=req.body;
        const notes=new noteModel({title,dis,sub});
        await notes.save();
        res.status(200).send({"msg":" notes has been  added",notes})

    } catch (error) {
        res.stutas(400).send(error.message)

    }
}

const Getnote=async(req,res)=>{
    try {
        //const {title,dis,sub}=req.body;
        const notes=await noteModel.find({userID});
       // await notes.save();
       res.status(200).send({"msg":"getall notes",notes})

    } catch (error) {
        res.stutas(400).send(error.message)

    }
}

module.exports={add,Getnote}