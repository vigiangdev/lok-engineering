const nodemailer = require('nodemailer')
const { google } = require('googleapis')

// Integrate oAuth2 with nodemailer
// https://www.youtube.com/watch?v=-rcRf7yswfM

exports.sendEmail = async (req, res, next) => {
  try {
    let message = `
    <div style="max-width: 576px; background-color: #f9fafb; margin: 0 auto;">
      <div style="width: 100%;">
        <p style="display: block; font-size: 1.6rem; text-align: center; background-color: #2c3e50; color: #f9fafb; padding: 1rem">Lok Engineering</p>
      </div>
      <div style="padding: 0 2rem 2rem">
        <p style="font-size: 1.2rem">Thank you for contacting us, ${req.body.name}!</p>
        <p>We received your message and will get back to you as soon as possible.</p>
        <table>
          <thead style="font-size: 1.4rem">
            Summary
          </thead>
            <colgroup>
              <col span="1" style="width: 96px">
            </colgroup>`

    if (req.body.name) {
      message =
        message +
        `
        <tr>
          <td>Name:</td>
          <td>${req.body.name}</td>
        </tr>
      `
    }

    if (req.body.phone) {
      message =
        message +
        `
        <tr>
          <td>Phone:</td>
          <td>${req.body.phone}</td>
        </tr>
      `
    }

    if (req.body.email) {
      message =
        message +
        `
        <tr>
          <td>Email:</td>
          <td>${req.body.email}</td>
        </tr>
      `
    }

    if (req.body.location) {
      message =
        message +
        `
        <tr>
          <td>Location:</td>
          <td>${req.body.location}</td>
        </tr>
      `
    }

    if (req.body.description) {
      message =
        message +
        `
        <tr>
          <td>Description:</td>
          <td>${req.body.description}</td>
        </tr>
      `
    }

    if (req.body.clientDueDate) {
      message =
        message +
        `
        <tr>
          <td>Due Date:</td>
          <td>${req.body.clientDueDate}</td>
        </tr>
      `
    }

    if (req.body.clientBudget) {
      message =
        message +
        `
        <tr>
          <td>Budget:</td>
          <td>${req.body.clientBudget}</td>
        </tr>
      `
    }

    if (req.body.role) {
      message =
        message +
        `
        <tr>
          <td>Role:</td>
          <td>${req.body.role}</td>
        </tr>
      `
    }

    if (req.body.survey.length > 0) {
      let surveyText = ''
      for (const survey of req.body.survey) {
        surveyText = `${surveyText} ${survey} `
      }
      message =
        message +
        `
        <tr>
          <td>How did you hear about us?:</td>
          <td>${surveyText}</td>
        </tr>
      `
    }

    message = message + '</table></div></div>'

    const oAuth2Client = new google.auth.OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      process.env.REDIRECT_URI
    )

    oAuth2Client.setCredentials({
      refresh_token: process.env.REFRESH_TOKEN,
    })

    const accessToken = await oAuth2Client.getAccessToken()

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'oAuth2',
        user: process.env.CLIENT_EMAIL,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken,
      },
    })

    const mailOptions = {
      from: `Lok Engineering <${process.env.CLIENT_EMAIL}>`,
      to: req.body.email,
      bcc: process.env.CLIENT_EMAIL,
      subject: `Inquiry for Lok Engineering - ${req.body.name}`,
      html: message,
      attachments: [],
    }

    if (req.body.files.length > 0) {
      req.body.files.forEach((file) => {
        mailOptions.attachments.push({
          filename: file.originalname,
          path: file.path,
          contentType: file.mimetype,
        })
      })
    }

    await transport.sendMail(mailOptions)

    res.status(200).json({
      success: true,
      message: 'Successfully sent email.',
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'Error. Email failed to send.',
    })
  }
}
