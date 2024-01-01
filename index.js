const mongo = require("./config/mongodb")
const express = require('express')
const app = express()

const adminRoute = require("./routes/adminRoute.js")
const userRoute = require("./routes/userRoute")

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/', userRoute)
app.use('/admin', adminRoute)

app.listen(3000,()=>{
    console.log('server running');
    mongo.connect()
})