import { useNetlifyForm } from '../../lib/useNetlifyForm'
import { RadioGroup, CheckboxGroup, Honeypot, FormStatusMessages } from './FormControls'

export default function PartnershipForm({ onSuccess }: { onSuccess?: () => void }) {
  const { status, errorMsg, handleSubmit } = useNetlifyForm('partnership', onSuccess)

  return (
    <form
      name="partnership"
      onSubmit={handleSubmit}
      className="card"
      style={{ maxWidth: 640, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 20 }}
    >
      <Honeypot />

      <CheckboxGroup
        legend="In which tier are you interested?"
        name="tier_interested"
        required
        options={['Reseller', 'Referral']}
      />

      <RadioGroup
        legend="Are you?"
        name="applicant_type"
        required
        options={['Certified Practitioner', 'Consulting Firm', 'Audit Firm']}
      />

      <div className="form-field">
        <label htmlFor="px-firm-name">Firm name / Name (if Certified Practitioner)*</label>
        <input id="px-firm-name" name="firm_name" type="text" required placeholder="Your Name or Firm" />
      </div>

      <div className="form-field">
        <label htmlFor="px-country">Country / Regions served*</label>
        <input id="px-country" name="countries_served" type="text" required placeholder="Your Country Name" />
      </div>

      <div className="form-field">
        <label htmlFor="px-website">Website*</label>
        <input id="px-website" name="website" type="text" required placeholder="Your website" />
      </div>

      <div className="form-field">
        <label htmlFor="px-contact-name">Contact name*</label>
        <input id="px-contact-name" name="contact_name" type="text" required placeholder="Your contact name" />
      </div>

      <div className="form-field">
        <label htmlFor="px-role">Role / Designation*</label>
        <input id="px-role" name="role" type="text" required placeholder="Your role" />
      </div>

      <div className="form-field">
        <label htmlFor="px-email">Work Email*</label>
        <input id="px-email" name="email" type="email" required placeholder="Your Company Email Address" />
      </div>

      <div className="form-field">
        <label htmlFor="px-phone">Phone number*</label>
        <input id="px-phone" name="phone" type="tel" required placeholder="Phone number" />
      </div>

      <CheckboxGroup
        legend="Practice focus"
        name="practice_focus"
        required
        options={['Audit', 'Advisory', 'Bank', 'Independent Consultant']}
      />

      <CheckboxGroup
        legend="Focused Industries"
        name="focused_industries"
        required
        options={['Banking', 'MFI', 'Leasing', 'NBFI', 'Credit Unions']}
      />

      <div className="form-field">
        <label htmlFor="px-portfolio-size">Average portfolio size (exposures per ECL run)</label>
        <input id="px-portfolio-size" name="portfolio_size" type="text" placeholder="Enter the approximate number of exposures processed per ECL run" />
      </div>

      <CheckboxGroup
        legend="Services offered"
        name="services_offered"
        required
        options={['Implementation', 'Managed ECL', 'Monitoring', 'Audit / Validation', 'Training', 'Other']}
      />

      <div className="form-field">
        <label htmlFor="px-client-count">Expected first-year client count</label>
        <input id="px-client-count" name="expected_client_count" type="text" placeholder="Enter the estimated number of clients in the first year" />
      </div>

      <div className="form-field">
        <label htmlFor="px-notes">Anything we should know?</label>
        <textarea id="px-notes" name="notes" placeholder="Share any additional information or special requirements" />
      </div>

      <button type="submit" className="btn-primary btn-block" disabled={status === 'sending'}>
        {status === 'sending' ? 'Submitting…' : 'Submit'}
      </button>

      <FormStatusMessages status={status} errorMsg={errorMsg} />
    </form>
  )
}
