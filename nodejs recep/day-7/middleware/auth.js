const jwt=require("jsonwebtoken");

const auth=(req,res,next)=>{
const token=req.headers.authorization;
if(token){
    const decoded=jwt.verify(token,"token")
    if(decoded){
        req.body.userID=decoded.userID
        console.log(decoded)
        next()
    }
    else{
        res.status(400).send({"msg":"Plase Login First"})
    }
}
else{
    res.status(400).send({"msg":"Plase Login First"})
}
}

module.exports={auth}