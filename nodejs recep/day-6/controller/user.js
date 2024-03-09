const{userModel} =require("../model/user")

const Allusers=async(req,res)=>{
    const query=req.query
    try {
        const users= await userModel.find(query);
        res.status(200).send({"msg":users})
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message) 
    }
}


module.exports={Allusers}