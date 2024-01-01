const User = require("../model/userModel.js");
const admin = require("../model/adminModel");
const { createToken } = require("../middlewares/jwt.js");
const login = async (req, res) => {
  try {
    const { email, password } = req.query;
    const exist = await admin.findOne({ email: email });
    if (exist) {
      if (exist.password === password) {
        const token = createToken(exist._id);
        res.status(200).json({ token: token });
      } else {
        res.status(401).json("incorrect password");
      }
    } else {
      res.json("admin not found");
    }
  } catch (error) {
    res.json("Error" + error);
  }
};

const addStudent = async (req, res) => {
  try {
    const { name, email, department, password } = req.body;
    const exist = await User.findOne({ email: email });
    if (exist) {
      return res.status(409).json("user exist");
    } else {
      const user = new User({
        name: name,
        email: email,
        department: department,
        password: password,
      });
      const upload = await user.save();
      if (upload) {
        res.status(200).json("success");
      } else {
        res.json("failed to upload");
      }
    }
  } catch (error) {
    res.json("error" + error);
  }
};

const allStudents = async (req, res) => {
  try {
    const userData = await User.find({});
    if (userData) {
      res.status(200).json(userData);
    } else {
      res.json("No Data");
    }
  } catch (error) {
    res.json("error" + error);
  }
};
const assignTask = async (req, res) => {
  try {
    const { userId, task,date } = req.body;
    const result = await User.findOneAndUpdate(
      { _id: userId },
      { $addToSet: { tasks: { task: task, status: "pending", due:date } } }
    );
    if (!result.tasks.includes(task)) {
      res.json("not updated");
    } else {
      res.json("updated");
    }
  } catch (error) {
    res.json("error" + error);
  }
};
module.exports = {
  login,
  addStudent,
  allStudents,
  assignTask,
};
