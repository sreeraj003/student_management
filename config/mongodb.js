require("dotenv").config();
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@studentmanagement.1lvp5wc.mongodb.net/student_management?retryWrites=true&w=majority`;
console.log(uri);
const connect = () => {
    const mongoose = require("mongoose");
    mongoose
    .connect(uri)
    .then(() => console.log("mongo connected"))
    .catch((error) => {
      console.error("MongoDB connection error:", error);
    });
};
module.exports = {
    connect
};
