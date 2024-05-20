const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000;
app.use(cors());


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})






//Database Connection

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Data').then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log('Error: ', err);
}) 

const userschema = new mongoose.Schema({
    name: String,
    email: String,
}) 
const User = mongoose.model('User', userschema);

app.get('/', (req, res) => {
    const data = User.find().then((data) => {
        console.log(data);
        res.json(data);
    })

})