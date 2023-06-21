const User = require("../model/user-model");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    //generate new password : using bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedpswd = await bcrypt.hash(password, salt);
    const isUserExist = await User.findOne({ email });
    if (isUserExist)
      return res.status(402).json({ error: "user email already exist" });
    //create new user :
    const newUser = await new User({
      username,
      email,
      password: hashedpswd,
    });

    //save user and response
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "API failed" });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    //checking onlu email:
    if (!user) {
      res.status(404).json("User not Found");
    }
    const validPswd = await bcrypt.compare(password, user.password);
    if (!validPswd) {
      res.status(401).json("Invalid Password");
    }
    // window.location.replace("/home");// trying
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { registerUser, loginUser };
