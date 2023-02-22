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
app.use(express.static(path.join(__dirname,'./salesapp_frontend/build')))


//routes
app.use("/api/v1/auth/", authRoutes)
app.use("/api/v1/sales/", salesRoutes)


//rest api
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'./salesapp_frontend/build/index.html'))
})

//port
const PORT = process.env.PORT||8000;

//run listen
app.listen(PORT, ()=>{
    console.log(`server running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white)
})


