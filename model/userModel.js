const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    tasks:{
        type:Array,
    }
})

module.exports = mongoose.model("User",userSchema)