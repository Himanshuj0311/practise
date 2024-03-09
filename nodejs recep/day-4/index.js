const express=require("express");

const app=express();
app.use(express.json());

app.use((req,res,next)=>{
    console.log("Hello from middleware")
next()
})

app.get("/",(req,res)=>{
    res.send("Home Page")
})

app.get("/about",(req,res)=>{
    res.send("About Page")
})



app.listen(3000,()=>{
    console.log("servcer is runing at 3000")
})