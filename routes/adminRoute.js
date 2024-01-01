const express = require("express")
const adminRoute = express()
const adminController = require("../controller/adminController")
const { validateToken } = require("../middlewares/jwt")

adminRoute.get('/login', adminController.login)
adminRoute.get('/allStudents',validateToken, adminController.allStudents)
adminRoute.post("/addStudent",validateToken,adminController.addStudent)
adminRoute.patch("/assignTask",validateToken,adminController.assignTask)
module.exports = adminRoute
