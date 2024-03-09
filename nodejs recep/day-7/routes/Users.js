const express= require ("express");
const {register,login}=require("../controllers/Users")
//const { authenticate }=require("../midlleware/authenticator")
const userRouter=express.Router();

//userRouter.use(authenticate)

userRouter.post("/register",register);
userRouter.post("/login",login);


module.exports={userRouter}
