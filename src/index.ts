import express from "express"
import http from "http"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import compression from "compression"
import cors from "cors"
import mongoose from "mongoose"
import router from "./router"

const app = express()

app.use(cors({ credentials:true }))
app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())

const server = http.createServer(app)

server.listen(8080,()=>{
    console.log("server is running on http://localhost:8080")
})
const MONGO_URL= "mongodb+srv://admin:admin123@cluster0.luk8wua.mongodb.net/test"

mongoose.Promise = Promise
mongoose.connect(MONGO_URL)
mongoose.connection.on("connected",(data) => console.log("mongodb is connected successfully"))
mongoose.connection.on("error",(error:Error) => console.log(error))

app.use("/",router());
