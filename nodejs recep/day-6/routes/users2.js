const express = require ("express");
const {Allusers}=require("../controller/user");
const { authenticate }=require("../midlleware/authenticator");
const {validateRole}=require("../midlleware/validator")
const {userLogger}=require("../midlleware/userLogger")
const user2Router=express.Router();

user2Router.use(authenticate);
// user2Router.use(validateRole);
user2Router.use(userLogger)



user2Router.get("/",Allusers);
//userRouter.post("/login",login);


module.exports={user2Router}
