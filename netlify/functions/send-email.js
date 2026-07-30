// Netlify serverless function — sends every form submission straight to
// info@probmatrix.io via SMTP, using the mailbox's own credentials.
//
// Requires these environment variables to be set in:
//   Netlify dashboard -> Site configuration -> Environment variables
//
//   SMTP_HOST   e.g. smtp.hostinger.com  (check your email host's docs)
//   SMTP_PORT   e.g. 465
//   SMTP_USER   info@probmatrix.io
//   SMTP_PASS   the mailbox's own password (or an app-specific password)

const nodemailer = require('nodemailer')

exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  let payload
  try {
    payload = JSON.parse(event.body || '{}')
  } catch (err) {
    return { statusCode: 400, body: 'Invalid JSON' }
  }

  const { formName, fields } = payload || {}

  if (!formName || !fields) {
    return { statusCode: 400, body: 'Missing formName or fields' }
  }

  const requiredEnv = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS']
  const missing = requiredEnv.filter((key) => !process.env[key])
  if (missing.length > 0) {
    console.error('Missing required SMTP environment variables:', missing.join(', '))
    return {
      statusCode: 500,
      body: JSON.stringify({ ok: false, error: `Server email config incomplete: missing ${missing.join(', ')}` }),
    }
  }

  const port = Number(process.env.SMTP_PORT)

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465, // true for port 465, false for 587/others (STARTTLS)
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  const bodyLines = Object.entries(fields)
    .filter(([key]) => key !== 'form-name' && key !== 'company_website')
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n')

  try {
    await transporter.sendMail({
      from: `"ProbMatrix Website" <${process.env.SMTP_USER}>`,
      to: 'info@probmatrix.io',
      replyTo: fields.email || undefined,
      subject: `New "${formName}" submission — probmatrix.io`,
      text: bodyLines,
    })

    return { statusCode: 200, body: JSON.stringify({ ok: true }) }
  } catch (err) {
    console.error('Email send failed:', err)
    return { statusCode: 500, body: JSON.stringify({ ok: false, error: String(err) }) }
  }
}
