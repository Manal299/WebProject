const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    _id: Number,
    name: String,
    description: String,
    price: Number,
    imageUrl: String,
    category: String,
    stock: Number
});

const Flowers = mongoose.model('Flowers', productSchema);

module.exports = Flowers;
