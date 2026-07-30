import { useNetlifyForm } from '../../lib/useNetlifyForm'
import { RadioGroup, Honeypot, FormStatusMessages } from './FormControls'

export default function EnrollmentForm({ onSuccess }: { onSuccess?: () => void }) {
  const { status, errorMsg, handleSubmit } = useNetlifyForm('enrollment', onSuccess)

  return (
    <form
      name="enrollment"
      onSubmit={handleSubmit}
      className="card"
      style={{ maxWidth: 640, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 20 }}
    >
      <Honeypot />

      <div className="form-field">
        <label htmlFor="enr-name">Full Name*</label>
        <input id="enr-name" name="name" type="text" required placeholder="Your full name" />
      </div>

      <div className="form-field">
        <label htmlFor="enr-email">Email Address*</label>
        <input id="enr-email" name="email" type="email" required placeholder="Your email address" />
      </div>

      <div className="form-field">
        <label htmlFor="enr-contact">Contact Number*</label>
        <input id="enr-contact" name="contact_number" type="tel" required placeholder="Contact number" />
      </div>

      <div className="form-field">
        <label htmlFor="enr-org">Organization / Company Name / University*</label>
        <input id="enr-org" name="organization" type="text" required placeholder="Your answer" />
      </div>

      <RadioGroup
        legend="Which best describes you"
        name="describes_you"
        required
        options={['Student', 'Employed (full-time)', 'Employed (part-time)', 'Self-employed', 'Freelancer / Contractor']}
      />

      <div className="form-field">
        <label htmlFor="enr-job-title">If employed add Job Title</label>
        <input id="enr-job-title" name="job_title" type="text" placeholder="Your answer" />
      </div>

      <RadioGroup
        legend="How familiar are you with IFRS 9?"
        name="ifrs9_familiarity"
        required
        options={['Beginner', 'Intermediate', 'Advanced']}
      />

      <div className="form-field">
        <label htmlFor="enr-why">Why do you want to join this course?</label>
        <textarea id="enr-why" name="motivation" placeholder="Your answer" />
      </div>

      <RadioGroup
        legend="How did you hear about this course?"
        name="referral_source"
        options={['LinkedIn', 'WhatsApp Groups', 'Colleague / Friend']}
      />

      <button type="submit" className="btn-primary btn-block" disabled={status === 'sending'}>
        {status === 'sending' ? 'Submitting…' : 'Submit'}
      </button>

      <FormStatusMessages status={status} errorMsg={errorMsg} />
    </form>
  )
}
