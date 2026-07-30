interface OptionGroupProps {
  legend: string
  name: string
  options: string[]
  required?: boolean
}

// Single-select. Renders native radio inputs sharing one `name`, so
// FormData naturally submits only the one checked value.
export function RadioGroup({ legend, name, options, required }: OptionGroupProps) {
  return (
    <fieldset className="form-field" style={{ border: 'none', padding: 0, margin: 0 }}>
      <legend style={{ marginBottom: 8 }}>
        {legend}
        {required ? '*' : ''}
      </legend>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {options.map((option) => (
          <label
            key={option}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              fontSize: 14,
              fontWeight: 400,
              color: 'var(--text-secondary)',
              cursor: 'pointer',
            }}
          >
            <input type="radio" name={name} value={option} required={required} style={{ width: 16, height: 16, flexShrink: 0 }} />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  )
}

// Multi-select. Every checked box shares the same `name` — the
// useNetlifyForm hook joins all checked values into one comma-separated
// string before submitting, since Netlify Forms flattens repeated field
// names to the last value otherwise.
export function CheckboxGroup({ legend, name, options, required }: OptionGroupProps) {
  return (
    <fieldset className="form-field" style={{ border: 'none', padding: 0, margin: 0 }}>
      <legend style={{ marginBottom: 8 }}>
        {legend}
        {required ? '*' : ''}
      </legend>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {options.map((option) => (
          <label
            key={option}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              fontSize: 14,
              fontWeight: 400,
              color: 'var(--text-secondary)',
              cursor: 'pointer',
            }}
          >
            <input type="checkbox" name={name} value={option} style={{ width: 16, height: 16, flexShrink: 0 }} />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  )
}

// Standard hidden honeypot field, identical pattern used on the existing
// Contact form — kept as a shared component so every new form matches it.
export function Honeypot({ fieldName = 'company_website' }: { fieldName?: string }) {
  return (
    <div style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }} aria-hidden="true">
      <label htmlFor={fieldName}>Leave this field empty</label>
      <input id={fieldName} name={fieldName} type="text" tabIndex={-1} autoComplete="off" />
    </div>
  )
}

export function FormStatusMessages({ status, errorMsg }: { status: string; errorMsg: string }) {
  if (status === 'success') {
    return (
      <p style={{ fontSize: 14, color: '#3ddc84' }}>
        Thanks — your submission has been received. We'll get back to you shortly.
      </p>
    )
  }
  if (status === 'error') {
    return <p style={{ fontSize: 14, color: '#ff6b6b' }}>{errorMsg}</p>
  }
  return null
}
