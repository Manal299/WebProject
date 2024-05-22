const express = require('express');
const router = express.Router();
const { loginUser } = require('../Controllers/user-controller');

router.post('/login', loginUser);

module.exports = router;
