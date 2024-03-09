const express= require("express")

const app=express()

app.use(express.json())



app.listen(2000,()=>{
    console.log("server is runing at 2000")
})