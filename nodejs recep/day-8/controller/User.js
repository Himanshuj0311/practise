const {UserModel}=require("../model/User");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");
require('dotenv').config()


const registertion=async(req,res)=>{
    try {
        const {name,email,password,gebder,age,is_married,city}=req.body;
        const user=await UserModel.find({email});
        if(user)return req.status(402).send({"msg":"User already exist, please login"});
        const hashpass=await bcrypt.hash(password,7)
        const newuser=new userModel({name,email,password:hashpass,gebder,age,is_married,city});
       const saveuser= await newuser.save();

       res.status(200).send({"msg":"user is register",saveuser})

    } catch (error) {
        console.log(error.message)
     res.status(400).send(error.message);   
    }
}

const login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const user=await UserModel.find({email});
        if(!user)return req.status(402).send({"msg":"User is not  exist, please register"});
        const correctpassword=await bcrypt.compare(password,user.password);
        if(!correctpassword)return req.status(402).send({"msg":"Wrong Credential"});
        const token = jwt.sign({"userID":user._id},process.env.Secret_token);

        res.status(200).send({"msg":"login has been done" ,"token":token})


    } catch (error) {
        console.log(error.message)

        res.status(400).send(error.message);   

    }
}

module.exports={registertion,login}