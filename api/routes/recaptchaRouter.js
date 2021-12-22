const express = require('express')
const recaptchaController = require('../controllers/recaptchaController')
const router = express.Router()

router.route('/:token').get(recaptchaController.verifyToken)

module.exports = router
