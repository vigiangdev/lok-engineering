const fs = require('fs')
const multer = require('multer')
const mime = require('mime-types')

const Quote = require('../models/Quote')

exports.addQuote = async (req, res, next) => {
  try {
    const quoteInfo = {
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      role: req.body.role,
      location: req.body.location,
      description: req.body.description,
      clientDueDate: req.body.clientDueDate,
      clientBudget: req.body.clientBudget,
      survey: req.body.survey,
    }
    const quote = await Quote.create(quoteInfo)
    res.status(201).json({
      success: true,
      quote,
      message: 'Successfully added record.',
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'Error. Failed to save quote.',
    })
  }
}

exports.getQuote = async (req, res, next) => {
  try {
    const quote = await Quote.findById(req.params.quote_id)
    res.status(200).json({
      success: true,
      quote,
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    })
  }
}

exports.getQuotes = async (req, res, next) => {
  try {
    const quotes = await Quote.find(req.query)
    res.status(200).json({
      success: true,
      quotes,
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    })
  }
}

exports.updateQuote = async (req, res, next) => {
  try {
    const quote = await Quote.findByIdAndUpdate(req.params.quote_id, req.body, {
      new: true,
    })
    if (quote) {
      res.status(200).json({
        success: true,
        quote,
        message: 'Successfully updated record.',
      })
    } else {
      res.status(404).json({
        success: false,
        message: 'Quote not found.',
      })
    }
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    })
  }
}

exports.addFiles = (req, res, next) => {
  const storage = multer.diskStorage({
    destination: 'uploads/tmp/',
    filename(req, file, cb) {
      cb(
        null,
        `${file.fieldname}-${Date.now()}-${Math.round(
          Math.random() * 1e9
        )}.${mime.extension(file.mimetype)}`
      )
    },
  })

  multer({ storage }).any()
  return next()
}

exports.addQuoteFiles = async (req, res, next) => {
  try {
    const newFiles = []
    const quote = await Quote.findById(req.params.quote_id)
    req.files.forEach((file) => {
      quote.files.push(file)
      newFiles.push(file)
    })

    await Quote.findByIdAndUpdate(req.params.quote_id, quote)

    res.status(200).json({
      success: true,
      files: newFiles,
      message: 'Successfully updated files record.',
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    })
  }
}

exports.deleteQuote = async (req, res, next) => {
  try {
    await Quote.findByIdAndDelete(req.params.quote_id)
    res.status(200).json({
      success: true,
      message: 'Successfully deleted record.',
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'Error. Failed to delete record.',
    })
  }
}

exports.deleteFile = async (req, res, next) => {
  try {
    const quote = await Quote.findById(req.params.quote_id)
    if (quote) {
      quote.files.forEach(async (file) => {
        if (file._id.toString() === req.params.file_id) {
          await fs.unlink(file.path, (err) => {
            if (err) console.log(err)
          })
        }
      })
      return next()
    } else {
      res.status(404).json({
        success: false,
        message: 'Quote not found.',
      })
    }
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'Failed to delete file.',
    })
  }
}

exports.deleteQuoteFile = async (req, res, next) => {
  try {
    const quote = await Quote.findById(req.params.quote_id)
    if (quote) {
      const removedFile = quote.files.filter((file) => {
        return file._id.toString() === req.params.file_id
      })

      if (removedFile.length === 0) {
        res.status(404).json({
          status: false,
          message: 'File does not exist.',
        })
        return next()
      }

      const updatedFiles = quote.files.filter((file) => {
        return file._id.toString() !== req.params.file_id
      })

      quote.files = updatedFiles

      await Quote.findByIdAndUpdate(req.params.quote_id, quote, {
        new: true,
      })

      res.status(200).json({
        success: true,
        quote: removedFile,
        message: 'Successfully deleted file record.',
      })
    } else {
      res.status(404).json({
        success: false,
        message: 'Quote not found.',
      })
    }
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    })
  }
}
