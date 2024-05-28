const express=require('express')
const cors=require('cors')
const cookieParser = require('cookie-parser')


const authRoutes=require('./routes/auth')
const propertyRoutes=require('./routes/property')

const PORT = 8000

//requiring db for enabling mongoDB connection
require('./db')


const app=express()
app.use(express.json())
app.use(cors())
app.listen(PORT,(req,res)=>{
    console.log('App is listenin at port 8000')
})

app.use("/auth",authRoutes)
app.use("/v1",propertyRoutes)


