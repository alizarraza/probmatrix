import { useEffect, useRef, useState } from 'react'
import { chatbotConfig } from '../config/chatbot'
import { sendChatMessage, type ChatMessage } from '../lib/chatClient'
import { IconChatBubble, IconClose, IconSend } from './icons'

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: chatbotConfig.greeting },
  ])
  const [input, setInput] = useState('')
  const [sending, setSending] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, open])

  async function handleSend() {
    const text = input.trim()
    if (!text || sending) return

    const nextMessages: ChatMessage[] = [...messages, { role: 'user', content: text }]
    setMessages(nextMessages)
    setInput('')
    setSending(true)

    try {
      const reply = await sendChatMessage(nextMessages)
      setMessages((m) => [...m, { role: 'assistant', content: reply }])
    } catch (err) {
      setMessages((m) => [
        ...m,
        {
          role: 'assistant',
          content:
            "Sorry, I couldn't reach the assistant just now. Please try again, or email info@probmatrix.io.",
        },
      ])
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 200,
          width: 58,
          height: 58,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-blue-bright))',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 28px rgba(13,100,150,0.45)',
        }}
      >
        {open ? <IconClose size={22} /> : <IconChatBubble size={24} />}
      </button>

      {open && (
        <div
          className="glow-border"
          style={{
            position: 'fixed',
            bottom: 96,
            right: 24,
            zIndex: 200,
            width: 360,
            maxWidth: 'calc(100vw - 32px)',
            height: 480,
            maxHeight: 'calc(100vh - 140px)',
            background: 'var(--bg-secondary)',
            borderRadius: 'var(--radius-lg)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              padding: '18px 20px',
              borderBottom: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <span
              style={{
                width: 9,
                height: 9,
                borderRadius: '50%',
                background: chatbotConfig.enabled ? '#3ddc84' : '#f5a623',
              }}
            />
            <div>
              <p style={{ fontSize: 14.5, fontWeight: 700, color: '#fff' }}>ProbMatrix Assistant</p>
              <p style={{ fontSize: 11.5, color: 'var(--text-muted)' }}>
                {chatbotConfig.enabled ? 'Online' : 'Demo mode — add an API key to go live'}
              </p>
            </div>
          </div>

          <div
            ref={scrollRef}
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '18px 16px',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '85%',
                  background: m.role === 'user' ? 'linear-gradient(135deg, var(--accent-blue), var(--accent-blue-bright))' : 'var(--bg-card)',
                  color: m.role === 'user' ? '#ffffff' : 'var(--text-secondary)',
                  border: m.role === 'user' ? 'none' : '1px solid var(--border-subtle)',
                  borderRadius: 12,
                  padding: '10px 14px',
                  fontSize: 13.5,
                  lineHeight: 1.5,
                }}
              >
                {m.content}
              </div>
            ))}
            {sending && (
              <div
                style={{
                  alignSelf: 'flex-start',
                  color: 'var(--text-muted)',
                  fontSize: 13,
                  padding: '6px 4px',
                }}
              >
                Typing…
              </div>
            )}
          </div>

          <div
            style={{
              display: 'flex',
              gap: 8,
              padding: 14,
              borderTop: '1px solid var(--border-subtle)',
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSend()
              }}
              placeholder="Ask a question…"
              style={{
                flex: 1,
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 999,
                padding: '10px 16px',
                color: '#fff',
                fontSize: 13.5,
              }}
            />
            <button
              onClick={handleSend}
              disabled={sending || !input.trim()}
              aria-label="Send message"
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-blue-bright))',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                opacity: sending || !input.trim() ? 0.6 : 1,
              }}
            >
              <IconSend size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
