const express=require("express");
const UserRouter=express.Router();
const {registertion,login}=require("../controller/User")

UserRouter.post("/resgister",registertion);
UserRouter.post("/login",login);


module.exports={UserRouter}