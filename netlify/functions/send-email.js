// Netlify serverless function — sends every form submission to
// info@probmatrix.io via Resend's transactional email API.
//
// We switched away from direct SMTP to Microsoft 365 because M365's
// tenant-wide "Security Defaults" policy blocks all basic-auth SMTP
// logins (like nodemailer's user/pass auth) regardless of per-mailbox
// settings. Resend uses a simple API key instead, so it sidesteps that
// restriction entirely and is the standard way to send transactional
// emails from a website anyway.
//
// Requires this environment variable to be set in:
//   Netlify dashboard -> Site configuration -> Environment variables
//
//   RESEND_API_KEY   the API key from resend.com -> API Keys
//
// Sending domain: until you verify probmatrix.io with Resend (Domains ->
// Add Domain -> add their DNS records), emails must be sent FROM
// Resend's shared address (onboarding@resend.dev) — Resend blocks
// sending from any custom domain that isn't verified. The "to" address
// is unaffected either way, so info@probmatrix.io still receives it
// normally. Once probmatrix.io is verified in Resend, change FROM_EMAIL
// below (or add it as another env var) to something like
// "ProbMatrix Website <noreply@probmatrix.io>".

const FROM_EMAIL = 'ProbMatrix Website <noreply@probmatrix.io>'
const TO_EMAIL = 'info@probmatrix.io'

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

  if (!process.env.RESEND_API_KEY) {
    console.error('Missing RESEND_API_KEY environment variable')
    return {
      statusCode: 500,
      body: JSON.stringify({ ok: false, error: 'Server email config incomplete: missing RESEND_API_KEY' }),
    }
  }

  const bodyLines = Object.entries(fields)
    .filter(([key]) => key !== 'form-name' && key !== 'company_website')
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n')

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: fields.email || undefined,
        subject: `New "${formName}" submission — probmatrix.io`,
        text: bodyLines,
      }),
    })

    const data = await res.json()

    if (!res.ok) {
      console.error('Resend API error:', data)
      return { statusCode: 500, body: JSON.stringify({ ok: false, error: data }) }
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true, id: data.id }) }
  } catch (err) {
    console.error('Email send failed:', err)
    return { statusCode: 500, body: JSON.stringify({ ok: false, error: String(err) }) }
  }
}