const express = require('express')
const multer = require('multer')
const mime = require('mime-types')
const quoteController = require('../controllers/quoteController')
const router = express.Router()

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

const upload = multer({ storage })

router.route('/').get(quoteController.getQuotes).post(quoteController.addQuote)

router
  .route('/:quote_id')
  .get(quoteController.getQuote)
  .patch(quoteController.updateQuote)
  .delete(quoteController.deleteQuote)

router
  .route('/:quote_id/file-upload')
  .post(upload.any(), quoteController.addQuoteFiles)

router
  .route('/:quote_id/:file_id')
  .delete(quoteController.deleteFile, quoteController.deleteQuoteFile)

module.exports = router
