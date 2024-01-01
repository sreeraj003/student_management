const { createToken } = require("../middlewares/jwt");
const User = require("../model/userModel");

const login = async (req, res) => {
  try {
    const { email, password } = req.query;
    const exist = await User.findOne({ email: email })
    if (exist) {
      if (exist.password === password) {
        const token = createToken(exist._id);
        exist.password = null
        res.json({ token: token ,user:exist});
      } else {
        res.status(401).json("incorrect password");
      }
    } else {
      res.status(401).json("Email not found");
    }
  } catch (error) {
    res.status(500).json("error" + error);
  }
};

const studentData = async (req, res) => {
  try {
    const userId = req._id;
    const userData = await User.find({ _id: userId},{password:0});
    if (userData) {
      res.status(200).json(userData);
    } else {
      res.status(404).json("user not found");
    }
  } catch (error) {
    res.status(500).json("error" + error);
  }
};

const taskUpdate = async (req, res) => {
  try {
    const { task, status } = req.body;
    const userId = req._id;
    const update = await User.findOneAndUpdate(
      { _id: userId, "tasks.task": task },
      { $set: { "tasks.$.status": status } }
    );
    if (update) {
      const user = await User.findOne({ _id: userId },{_id:0,password:0});
      res.status(200).json({ status: "success", user });
    } else {
      res.status(404).json("task not found");
    }
  } catch (error) {
    res.status(500).json("error" + error);
  }
};

module.exports = {
  login,
  studentData,
  taskUpdate,
};
