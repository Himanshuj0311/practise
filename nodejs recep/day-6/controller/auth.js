const{userModel} =require("../model/user")
const bcrypt = require("bcrypt");
const jwt=require("jsonwebtoken")
const res=async(req,res)=>{
    try {
        const { username,email,role,password}=req.body
        const user=await userModel.findOne({email});

        if (user)return res.status(402).send({"mgs":"user is already funnd please loging  "});

        const hashPass= await bcrypt.hash(password,8);

        const newuser=new userModel({username,email,password:hashPass,role});

       const saveuser= await newuser.save();

       res.status(200).send({"msg":"user is register",saveuser})
       


    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
}

const login=async(req,res)=>{
    try {
        const { email,password}=req.body
        const user=await userModel.findOne({email});

        if (!user)return res.status(402).send({"mgs":"user is not funnd please register  "});

        const hashPass= await bcrypt.compare(password,user.password);

        if(!hashPass)return res.status(402).send({"msg":"email or password is not correct"})

        const token = jwt.sign({password:user.password,email:user.email},"token");

        res.status(200).send({"msg":"login has been done" ,"token":token})

 

      // res.status(200).send({"msg":"user is register",saveuser})
       


    } catch (error) {
        res.status(500).send(error.message)
    }
}


module.exports={res,login}