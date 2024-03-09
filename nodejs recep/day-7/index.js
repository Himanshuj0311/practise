const express = require ("express");
const {connection} =require ("./config/db")
const {userRouter} = require ("./routes/Users");
const {notesRouter} = require ("./routes/notes");
const {auth} = require ("./middleware/auth");

const app=express();
app.use(express.json());


app.use("/user",userRouter)

app.use(auth)
app.use("/note",notesRouter)

app.listen(5000,async()=>{
    try {
        await connection
        console.log("Data base connected");
        console.log("Server is runnig at port 5000");
    } catch (error) {
        console.log(error.message)
    }
})