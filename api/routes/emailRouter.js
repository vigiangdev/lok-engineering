const express = require('express')
const router = express.Router()
const csrf = require('csurf')
const csrfProtection = csrf({ cookie: true })
const emailController = require('../controllers/emailController')

router.route('/').post(csrfProtection, emailController.sendEmail)

module.exports = router
