const express=require("express");
const {connection}=require("./db");
const {user}=require("./db")


const app=express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Home Page")
})

app.post("/add",async(req,res)=>{
    const payload=req.body;
    const data=new user(payload);
    await data.save()
    res.status(200).send({"msg":"add Page",data})
})


app.listen(8000,async()=>{

    try {
        await connection

        console.log("Server is runing at port 80000");
    } catch (error) {
        console.log(error.message)
    }
})