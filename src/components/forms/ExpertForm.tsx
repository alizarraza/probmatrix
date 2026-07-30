import { useNetlifyForm } from '../../lib/useNetlifyForm'
import { Honeypot, FormStatusMessages } from './FormControls'

export default function ExpertForm({ onSuccess }: { onSuccess?: () => void }) {
  const { status, errorMsg, handleSubmit } = useNetlifyForm('expert-request', onSuccess)

  return (
    <form
      name="expert-request"
      onSubmit={handleSubmit}
      className="card"
      style={{ maxWidth: 560, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 20 }}
    >
      <Honeypot />

      <div className="form-field">
        <label htmlFor="xp-name">Full Name*</label>
        <input id="xp-name" name="name" type="text" required placeholder="Your full name" />
      </div>

      <div className="form-field">
        <label htmlFor="xp-company">Company Name*</label>
        <input id="xp-company" name="company" type="text" required placeholder="Your company name" />
      </div>

      <div className="form-field">
        <label htmlFor="xp-email">Email*</label>
        <input id="xp-email" name="email" type="email" required placeholder="Your email address" />
      </div>

      <div className="form-field">
        <label htmlFor="xp-cell">Cell Number*</label>
        <input id="xp-cell" name="cell_number" type="tel" required placeholder="Cell / WhatsApp Number" />
      </div>

      <div className="form-field">
        <label htmlFor="xp-requirements">Your Requirements*</label>
        <textarea id="xp-requirements" name="requirements" required placeholder="Share your requirements" />
      </div>

      <button type="submit" className="btn-primary btn-block" disabled={status === 'sending'}>
        {status === 'sending' ? 'Submitting…' : 'Submit'}
      </button>

      <FormStatusMessages status={status} errorMsg={errorMsg} />
    </form>
  )
}
