const nodemailer = require('nodemailer')
const { google } = require('googleapis')

// Integrate oAuth2 with nodemailer
// https://www.youtube.com/watch?v=-rcRf7yswfM

exports.sendEmail = async (req, res, next) => {
  // console.log('Sending Email');
  // console.log(req.body);
  try {
    const oAuth2Client = new google.auth.OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      process.env.REDIRECT_URI
    )

    oAuth2Client.setCredentials({
      refresh_token: process.env.REFRESH_TOKEN,
    })

    const accessToken = await oAuth2Client.getAccessToken()

    // console.log('Access Token', accessToken);

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
      text: `Thanks for contacting us, ${req.body.name}! We received your message and will get back to you as soon as possible. Summary: Name: ${req.body.name} Phone: ${req.body.phone} Email: ${req.body.email} Project Description: ${req.body.description} Budget: ${req.body.clientBudget} Role: ${req.body.role} Location: ${req.body.location} Due Date: ${req.body.clientDueDate} How did you hear about us?: ${req.body.survey}`,
      html: `<p>Thanks for contacting us, ${req.body.name}!</p><p>We received your message and will get back to you as soon as possible.</p><br/><h3>Summary:</h3><p>Name: ${req.body.name}</p><p>Phone: ${req.body.phone}</p><p>Email: ${req.body.email}</p><p>Project Description: ${req.body.description}</p><p>Budget: ${req.body.clientBudget}</p><p>Role: ${req.body.role}</p><p>Location: ${req.body.location}</p><p>Due Date: ${req.body.clientDueDate}</p><p>How did you hear about us?: ${req.body.survey}</p>`,
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
