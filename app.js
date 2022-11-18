const express = require("express")
const dotenv = require("dotenv")
const bodyParser = require("body-parser")

const connect = require("./utils/service")
const userRoutes = require("./routes/user")

const app = express()
dotenv.config()

app.set("view engine","ejs")
app.set("views","views")

//middlewares
app.use(bodyParser.json()) //can use express.json() instead?

app.use("/api",userRoutes)


app.listen(process.env.PORT||5000,()=>{
    connect()
    console.log(`server started at port 5000`);
})