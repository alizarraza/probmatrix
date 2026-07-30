import { useEffect } from 'react'

export default function Toast({
  message,
  show,
  onDone,
}: {
  message: string
  show: boolean
  onDone: () => void
}) {
  useEffect(() => {
    if (!show) return
    const timer = setTimeout(onDone, 4000)
    return () => clearTimeout(timer)
  }, [show, onDone])

  if (!show) return null

  return (
    <div
      role="status"
      style={{
        position: 'fixed',
        bottom: 24,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1100,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        background: '#1e8e5a',
        color: '#fff',
        padding: '14px 22px',
        borderRadius: 999,
        fontSize: 14,
        fontWeight: 600,
        boxShadow: '0 12px 32px rgba(0,0,0,0.35)',
        maxWidth: '90vw',
      }}
    >
      <span aria-hidden="true">✓</span> {message}
    </div>
  )
}
