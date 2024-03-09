const express= require ("express");
const {add,Getnote}=require("../controllers/notes")
//const { authenticate }=require("../midlleware/authenticator")
const notesRouter=express.Router();

//userRouter.use(authenticate)

notesRouter.post("/add",add);
notesRouter.get("/",Getnote);


module.exports={notesRouter}
