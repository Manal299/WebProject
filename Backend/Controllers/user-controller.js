const jwt = require('jsonwebtoken');
const User = require('../Models/user-model');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Update the path to the frontend public directory
    cb(null, path.join(__dirname, '../../Frontend/public/TestimonialImages'));
  },
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}`);
  }
});

const upload = multer({ storage });

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log("Received email and password:", email, password);
  
  try {
    const existingUser = await User.findOne({ email: email });
    console.log("Existing user:", existingUser);
    
    if (!existingUser) {
      return res.status(400).json({ message: "User not found, Please sign up." });
    }

    if (password !== existingUser.password) {
      return res.status(400).json({ message: "Invalid Email/Password" });
    }
    
    const token = jwt.sign({ email: existingUser.email }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h" // 1 hour expiration
    });

    console.log("Generated Token:", token);

    res.cookie('token', token, {
      httpOnly: true,
      sameSite: 'lax',
      maxAge: 1000 * 60 * 60 // 1 hour
    });

    return res.status(200).json({ message: "Successfully Logged In", user: existingUser, token });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error. Please try again later." });
  }
};

const verifyToken = (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
  console.log("Token:", token);
  if (!token) {
    return res.status(401).json({ message: "Authentication failed. No token provided." });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Authentication failed. Invalid token." });
    }
    req.email = decoded.email;
    next();
  });
};

const getUser = async (req, res) => {
  const userEmail = req.email;
  console.log("Fetching user with email:", userEmail);

  try {
    const user = await User.findOne({ email: userEmail });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ user });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error. Please try again later." });
  }
};

const signupUser = async (req, res) => {
  const { firstName, lastName, contact, address, password, email, gender, dob } = req.body;
  const image = req.file ? `${req.file.filename}` : null; 
  console.log("hallooo",image)

  console.log("Received signup data:", firstName, lastName, contact, image, address, password, email, gender, dob);

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new User({
      firstName,
      lastName,
      contact,
      image,
      address,
      password,
      email,
      gender,
      dob
    });

    await newUser.save();

    const token = jwt.sign({ email: newUser.email }, process.env.JWT_SECRET_KEY, {
      expiresIn: '1h'
    });

    res.status(201).json({ user: newUser, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};

exports.loginUser = loginUser;
exports.verifyToken = verifyToken;
exports.getUser = getUser;
exports.signupUser = signupUser;
exports.upload = upload;
