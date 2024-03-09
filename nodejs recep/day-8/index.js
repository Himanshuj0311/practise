const express=require("express");
const {connection}=require("./config/db");
const {UserRouter}=require("./routes/user")
require('dotenv').config()
const port=process.env.PORT
const app=express();

app.use(express.json());
app.get((req,res)=>{
res.status(200).send("Home Page")
})

app.use("/user",UserRouter)

app.listen(port,async()=>{
    try {
        await connection
        console.log("Data base connected");
        console.log("Server is runnig at port "+port);
    } catch (error) {
        console.log(error.message)
    }
})