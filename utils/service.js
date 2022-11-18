const mongoose = require("mongoose")

const connect = async ()=>{
    try{
        await mongoose.connect(process.env.URL)
        console.log("connected to mongoDB")
    }catch(err){
        console.log(err);
        throw err
    }
}

mongoose.connection.on("connected",()=>{
    console.log("connected to mongoDB")
})

mongoose.connection.on("disconnected",()=>{
    console.log("disconnected from mongoDB")
})

module.exports = connect