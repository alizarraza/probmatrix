import { useState } from 'react'
import type { FormEvent } from 'react'

export type SubmitStatus = 'idle' | 'sending' | 'success' | 'error'

function encodeForNetlify(data: Record<string, string>): string {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

/**
 * Shared submit handler for every form on the site.
 *
 * On submit this does two things in parallel:
 *   1. Posts to Netlify Forms (so submissions still show up in the
 *      Netlify dashboard under Forms, same as before).
 *   2. Calls our own /.netlify/functions/send-email function, which sends
 *      the submission straight to info@probmatrix.io via SMTP. This does
 *      NOT depend on Netlify's own Forms notification settings at all —
 *      it's a direct, guaranteed send as long as the SMTP environment
 *      variables are configured in the Netlify dashboard.
 *
 * `formName` must exactly match:
 *   1. The `name` attribute on the <form> in the React component
 *   2. The `name` attribute on the matching hidden static form in index.html
 */
export function useNetlifyForm(formName: string, onSuccess?: () => void) {
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>, honeypotField = 'company_website') {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    // Honeypot spam check — real users never fill this hidden field.
    if (String(data.get(honeypotField) || '').length > 0) {
      setStatus('success')
      form.reset()
      onSuccess?.()
      return
    }

    setStatus('sending')
    setErrorMsg('')

    try {
      const payload: Record<string, string> = { 'form-name': formName }
      data.forEach((value, key) => {
        // Checkbox groups reuse the same `name` for multiple checked boxes —
        // FormData.forEach fires once per checked value, so concatenate them
        // into a single comma-separated string per field instead of only
        // keeping the last one.
        if (payload[key]) {
          payload[key] = `${payload[key]}, ${String(value)}`
        } else {
          payload[key] = String(value)
        }
      })

      const results = await Promise.allSettled([
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encodeForNetlify(payload),
        }),
        fetch('/.netlify/functions/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ formName, fields: payload }),
        }),
      ])

      const [netlifyFormsResult, emailFunctionResult] = results
      const emailSucceeded = emailFunctionResult.status === 'fulfilled' && emailFunctionResult.value.ok

      if (!emailSucceeded) {
        // The email function is the one that actually guarantees delivery
        // to the inbox — if it failed, surface an error even if Netlify
        // Forms itself accepted the submission.
        console.error('Email function failed:', emailFunctionResult)
        throw new Error('Something went wrong sending your message. Please try again or email us directly.')
      }

      if (netlifyFormsResult.status === 'rejected') {
        console.warn('Netlify Forms submission failed (non-blocking):', netlifyFormsResult.reason)
      }

      setStatus('success')
      form.reset()
      onSuccess?.()
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  return { status, errorMsg, handleSubmit }
}
