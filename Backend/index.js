const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./Routes/User-Routes.js');
require('dotenv').config();
const cookieParser = require('cookie-parser');

const app = express();

mongoose.connect('mongodb://localhost:27017/UserInfo', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use('/api', userRoutes);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});