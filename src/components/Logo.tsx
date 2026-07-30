
type LogoProps = {
  /** Height in px of the mark itself. Width scales automatically. */
  size?: number
  /** Show the "ProbMatrix" wordmark next to the mark. */
  showWordmark?: boolean
}

export default function Logo({ size = 40, showWordmark = false }: LogoProps) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <img
        src='/probmatrix-logo-white.png'
        alt="ProbMatrix"
        style={{
          height: size,
          width: 'auto',
          objectFit: 'contain',
          flexShrink: 0,
          display: 'block',
        }}
      />
      {showWordmark && (
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: size * 0.5,
            letterSpacing: '-0.02em',
            color: '#ffffff',
            whiteSpace: 'nowrap',
          }}
        >
          ProbMatrix
        </span>
      )}
    </div>
  )
}
