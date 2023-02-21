const express = require("express")
const dotenv = require('dotenv')
const path = require('path')

const authRoutes = require("./routes/authRoutes")
const salesRoutes = require("./routes/salesRoutes")
const connectDB = require("./config/db")
const cors = require("cors")


//configure env
dotenv.config()

//database config
connectDB()

//test object
const app = express()

//middleware
app.use(express.json())
app.use(cors())



//routes
app.use("/api/v1/auth/", authRoutes)
app.use("/api/v1/sales/", salesRoutes)

if(process.env.NODE_ENV==='production'){
app.use(express.static(path.join(__dirname,'/salesapp_frontend/build')))
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,"salesapp_frontend","build","index.html"))
})
}else{
app.get("/",(req,res)=>{
    res.send("<h1>hello from Node Server vai nodemon</h1>")
})
}

//port
const PORT = process.env.PORT||8000
app.listen(PORT, ()=>{
    console.log(`server running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white)
})


