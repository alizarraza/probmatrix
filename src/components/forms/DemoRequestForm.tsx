import { useNetlifyForm } from '../../lib/useNetlifyForm'
import { RadioGroup, CheckboxGroup, Honeypot, FormStatusMessages } from './FormControls'

export default function DemoRequestForm({ onSuccess }: { onSuccess?: () => void }) {
  const { status, errorMsg, handleSubmit } = useNetlifyForm('demo-request', onSuccess)

  return (
    <form
      name="demo-request"
      onSubmit={handleSubmit}
      className="card"
      style={{ maxWidth: 640, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 20 }}
    >
      <Honeypot />

      <div className="form-field">
        <label htmlFor="dm-name">Full Name*</label>
        <input id="dm-name" name="name" type="text" required placeholder="Your Full Name" />
      </div>

      <div className="form-field">
        <label htmlFor="dm-job-title">Job Title*</label>
        <input id="dm-job-title" name="job_title" type="text" required placeholder="Your Job" />
      </div>

      <div className="form-field">
        <label htmlFor="dm-department">Department / Function*</label>
        <input id="dm-department" name="department" type="text" required placeholder="Current Department" />
      </div>

      <div className="form-field">
        <label htmlFor="dm-email">Work Email*</label>
        <input id="dm-email" name="email" type="email" required placeholder="Your Company Email Address" />
      </div>

      <div className="form-field">
        <label htmlFor="dm-phone">Phone Number*</label>
        <input id="dm-phone" name="phone" type="tel" required placeholder="Phone number" />
      </div>

      <div className="form-field">
        <label htmlFor="dm-country">Country*</label>
        <input id="dm-country" name="country" type="text" required placeholder="Your Country Name" />
      </div>

      <div className="form-field">
        <label htmlFor="dm-legal-entity">Legal Entity Name*</label>
        <input id="dm-legal-entity" name="legal_entity" type="text" required placeholder="Registered Company" />
      </div>

      <RadioGroup
        legend="FI type"
        name="fi_type"
        required
        options={[
          'Commercial Bank',
          'Islamic Bank',
          'MFI',
          'NBFI',
          'Leasing',
          'Digital Lender',
          'Cooperative',
          'Investment Firm',
          'Insurer',
        ]}
      />

      <CheckboxGroup
        legend="Primary Objective"
        name="primary_objective"
        required
        options={['ECL production', 'Parallel run', 'Model validation', 'Audit support', 'Vendor evaluation', 'PoC']}
      />

      <div className="form-field">
        <label htmlFor="dm-success-criteria">Success Criteria</label>
        <textarea id="dm-success-criteria" name="success_criteria" placeholder="What would make this evaluation a success?" />
      </div>

      <button type="submit" className="btn-primary btn-block" disabled={status === 'sending'}>
        {status === 'sending' ? 'Submitting…' : 'Request Demo'}
      </button>

      <FormStatusMessages status={status} errorMsg={errorMsg} />
    </form>
  )
}
