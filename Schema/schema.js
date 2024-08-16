// Import mongoose
const mongoose = require('mongoose');


// Connect to MongoDB
const connection = mongoose.connect('mongodb+srv://JayShukla:jayshukla@cluster0.9zippbx.mongodb.net/SunilElectronics?retryWrites=true&w=majority')


// Define the Product schema
const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  buyingPrice: {
    type: Number,
    required: true,
    min: 0
  },
  wholesalePrice: {
    type: Number,
    required: true,
    min: 0
  },
  retailPrice: {
    type: Number,
    required: true,
    min: 0
  },
  image: {
    type: String,
    trim: true
  }
});

// Create a model from the schema
const Product = mongoose.model('Product', productSchema);

// Export the model
module.exports ={connection ,Product}

