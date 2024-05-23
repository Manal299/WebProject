const express = require('express');
const router = express.Router();
const { loginUser, verifyToken, getUser,signupUser, upload } = require('../Controllers/user-controller');

router.post('/login', loginUser);
router.get('/profile', verifyToken, getUser);
router.post('/signup', upload.single('image'), signupUser);

module.exports = router;
