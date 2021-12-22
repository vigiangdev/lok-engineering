const mongoose = require('mongoose')

const fileSchema = new mongoose.Schema({
  fieldname: String,
  originalname: String,
  encoding: String,
  mimetype: String,
  destination: String,
  filename: String,
  path: String,
  size: Number,
})

const QuoteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  clientDueDate: {
    type: String,
  },
  clientBudget: {
    type: String,
  },
  quoteDate: {
    type: Date,
    default: Date.now,
  },
  survey: [
    {
      type: String,
    },
  ],
  files: [fileSchema],
})

const Quote = mongoose.model('Quote', QuoteSchema)
module.exports = Quote
