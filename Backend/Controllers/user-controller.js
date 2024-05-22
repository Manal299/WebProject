const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../Models/user-model');

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log("yahan aa bhi raha hai?", email, password);
  let existingUser;
  try {
      existingUser = await User.findOne({email: email});
  } catch (err) {
      console.log(err);
  }
  console.log("user ata hai?",existingUser)
  if (!existingUser) {
      return res.status(400).json({message: "User not found, Please sign up."})
  }
  const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
  if(!isPasswordCorrect){
      return res.status(400).json({message: "Invaild Email/Password"})
  }
  const token = jwt.sign({id: existingUser._id}, process.env.JWT_SECRET_KEY,{
      expiresIn: "35s" //1hr
  });
  console.log("Generated Token\n", token);
  if (req.cookies[`${existingUser._id}`]) {
      req.cookies[`${existingUser._id}`] = ""
  }
  res.cookie(String(existingUser._id), token, {
      path:"/",
      expires: new Date(Date.now() + 1000 * 30),
      httpOnly: true,
      sameSite: "lax",
  })

  return res
  .status(200)
  .json({message: "Successfully Logged In", user: existingUser, token});
}