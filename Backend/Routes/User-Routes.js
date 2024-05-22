const express = require('express');
const router = express.Router();
const { loginUser, verifyToken, getUser } = require('../Controllers/user-controller');

router.post('/login', loginUser);
router.get('/profile', verifyToken, getUser);

module.exports = router;
