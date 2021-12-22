const axios = require('axios')

exports.verifyToken = async (req, res, next) => {
  // console.log('Verifying reCAPTCHA Token.');
  try {
    if (!req.params.token) {
      res.status(200).json({
        success: false,
        message: 'Invalid token.',
      })
      return next()
    }
    const response = await axios(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${req.params.token}`
    )
    res.status(200).json({
      data: response.data,
    })
  } catch (err) {
    res.status(200).json({
      success: false,
      message: 'Unable to validate token.',
    })
  }
}
