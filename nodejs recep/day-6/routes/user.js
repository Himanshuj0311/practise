const express = require ("express");
const {res,login}=require("../controller/auth");
//const { authenticate }=require("../midlleware/authenticator")
const userRouter=express.Router();

//userRouter.use(authenticate)

userRouter.post("/register",res);
userRouter.post("/login",login);


module.exports={userRouter}
