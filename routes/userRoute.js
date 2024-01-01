const express = require("express")
const userRoute = express()
const userController = require("../controller/userController")
const { validateToken } = require("../middlewares/jwt")

userRoute.get("/login",userController.login)
userRoute.get("/studentData",validateToken,userController.studentData)
userRoute.patch("/taskUpdate",validateToken,userController.taskUpdate)

module.exports = userRoute