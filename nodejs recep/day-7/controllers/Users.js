const {userModel} = require ("../models/Users");
const bcrypt = require ("bcrypt");
const jwt = require ("jsonwebtoken");


const register=async(req,res)=>{

    try {
        const { username,email,role,password} = req.body

        const user= await userModel.findOne({email});
        if(user)return res.stutas(402).send({"msg":"Please Login"});
        const hashPass= await bcrypt.hash(password,8);

        const newuser=new userModel({username,email,password:hashPass,role});

       const saveuser= await newuser.save();

       res.status(200).send({"msg":"user is register",saveuser})
        
    } catch (error) {
        res.stutas(400).send(error.message)
    }
}

const login=async(req,res)=>{
    try {
        const { email,password}=req.body
        const user=await userModel.findOne({email});

        if (!user)return res.status(402).send({"mgs":"user is not funnd please register  "});

        const hashPass= await bcrypt.compare(password,user.password);

        if(!hashPass)return res.status(402).send({"msg":"email or password is not correct"})

        const token = jwt.sign({"userID":user._id},"token");

        res.status(200).send({"msg":"login has been done" ,"token":token})

 

      // res.status(200).send({"msg":"user is register",saveuser})
       


    } catch (error) {
        res.status(500).send(error.message)
    }
}


module.exports={register,login}