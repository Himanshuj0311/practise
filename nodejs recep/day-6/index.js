const express = require ("express");
const {connection}=require("./db")
const {userRouter}=require("./routes/user")
const {user2Router}=require("./routes/users2")
const app = express();

app.use(express.json());

app.use("/auth",userRouter)
app.use("/user",user2Router)

app.get("/",(req,res)=>{
    res.send("Home Page")
})


app.listen(1000,async()=>{
    try {
        await connection;
        console.log("mongodb is connected")
        console.log("Server is runing at 1000")
    } catch (error) {
        console.error(error.message)
    }
})