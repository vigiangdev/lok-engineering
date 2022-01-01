const mongoose = require('mongoose')
const express = require('express')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const helmet = require('helmet')
const csrf = require('csurf')
const config = require('./config/db')

const csrfProtection = csrf({ cookie: true })

const app = express()

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}

app.use(
  helmet({
    contentSecurityPolicy: {
      useDefaults: true,
      directives: {
        'style-src': 'self',
      },
    },
    frameguard: {
      action: 'deny',
    },
    hsts: {
      maxAge: 15552000,
    },
    referrerPolicy: {
      policy: ['strict-origin-when-cross-origin'],
    },
  })
)

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const emailRouter = require('./routes/emailRouter')
const quoteRouter = require('./routes/quoteRouter')
const recaptchaRouter = require('./routes/recaptchaRouter')

app.use('/v1/csrftoken', csrfProtection, function (req, res) {
  return res.json({ csrfToken: req.csrfToken() })
})
app.use('/v1/email', emailRouter)
app.use('/v1/quotes', quoteRouter)
app.use('/v1/recaptcha', recaptchaRouter)

mongoose.connect(config.database)

module.exports = {
  path: '/api',
  handler: app,
}
