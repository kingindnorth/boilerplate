const express = require("express")
const dotenv = require("dotenv")

const connect = require("./utils/service")
const userRoutes = require("./routes/user")

const app = express()
dotenv.config()

app.set("view engine","ejs")
app.set("views","views")

//middlewares
app.use(express.static(__dirname+"public"))
app.use(express.json())

app.use("/api",userRoutes)


app.listen(process.env.PORT||5000,()=>{
    connect()
    console.log(`server started at port 5000`);
})