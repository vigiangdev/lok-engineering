const mongoose = require('mongoose')
const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize')
const rateLimit = require('express-rate-limit')
const cors = require('cors')
const config = require('./config/db')

const app = express()

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}

app.enable('trust proxy')
app.disable('x-powered_by')

app.use(cors())
app.options('*', cors())
app.use(helmet())
app.use(
  '/api',
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5000,
  })
)
app.use(mongoSanitize())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const emailRouter = require('./routes/emailRouter')
const quoteRouter = require('./routes/quoteRouter')
const recaptchaRouter = require('./routes/recaptchaRouter')

app.use('/v1/email', emailRouter)
app.use('/v1/quotes', quoteRouter)
app.use('/v1/recaptcha', recaptchaRouter)

mongoose.connect(config.database)

module.exports = {
  path: '/api',
  handler: app,
}
