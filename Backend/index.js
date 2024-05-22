const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./Routes/Flower-Routes');

const app = express();

mongoose.connect('mongodb://localhost:27017/FloralShop', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.use(cors());
app.use(express.json());
app.use('/api', productRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
