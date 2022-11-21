const User = require("../models/user")

const controller = (req,res)=>{
    try{
        //logic
        res.status(200).render("welcome")
    }catch(err){
        console.log(err);
        res.status(500).json("internal server error")
    }
}

module.exports = controller