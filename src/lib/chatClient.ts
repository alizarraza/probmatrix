import { chatbotConfig } from '../config/chatbot'

export type ChatMessage = {
  role: 'user' | 'assistant'
  content: string
}

/**
 * Sends the conversation to the configured Chat Completions endpoint and
 * returns the assistant's reply text.
 *
 * Works out of the box with any OpenAI-compatible /chat/completions API.
 * If `chatbotConfig.enabled` is false (no key configured yet), this
 * returns a rotating demo reply instead of making a network call.
 */
export async function sendChatMessage(history: ChatMessage[]): Promise<string> {
  if (!chatbotConfig.enabled || !chatbotConfig.apiUrl) {
    const { demoReplies } = chatbotConfig
    const reply = demoReplies[Math.floor(Math.random() * demoReplies.length)]
    await new Promise((r) => setTimeout(r, 500))
    return reply
  }

  const messages = [{ role: 'system', content: chatbotConfig.systemPrompt }, ...history]

  const res = await fetch(chatbotConfig.apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(chatbotConfig.apiKey ? { Authorization: `Bearer ${chatbotConfig.apiKey}` } : {}),
    },
    body: JSON.stringify({
      model: chatbotConfig.model,
      messages,
      max_tokens: 500,
    }),
  })

  if (!res.ok) {
    throw new Error(`Chat request failed (${res.status})`)
  }

  const data = await res.json()

  // Standard OpenAI-compatible response shape.
  const text = data?.choices?.[0]?.message?.content
  if (typeof text === 'string' && text.length > 0) {
    return text
  }

  throw new Error('Unexpected response shape from chat API')
}
