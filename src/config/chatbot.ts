// Chatbot configuration
// ----------------------------------------------------------------------
// Drop your API key and endpoint in here to make the chat widget live.
// Nothing else in the app needs to change.
//
// This is written for any OpenAI-compatible Chat Completions endpoint
// (OpenAI, Azure OpenAI, OpenRouter, a self-hosted model gateway, etc).
// If your provider uses a different request/response shape, adjust the
// `sendChatMessage` function in `src/lib/chatClient.ts` — everything else
// (the widget UI, message state) stays the same.
//
// IMPORTANT: Calling a provider directly from the browser exposes your API
// key to anyone who opens devtools. For production, proxy this request
// through a small backend (e.g. contact.php-style endpoint, or a serverless
// function) that holds the real key server-side, and point `apiUrl` below
// at that proxy instead of the provider directly.
// ----------------------------------------------------------------------

export const chatbotConfig = {
  // Set to true once apiKey / apiUrl below are filled in.
  enabled: false,

  // e.g. 'https://api.openai.com/v1/chat/completions'
  apiUrl: '',

  // Your API key. Prefer routing through a backend proxy instead of
  // putting a real key in client-side code — see note above.
  apiKey: '',

  // Model name for providers that require it (OpenAI, OpenRouter, etc).
  model: 'gpt-4o-mini',

  // System prompt that shapes how the assistant responds.
  systemPrompt:
    'You are the ProbMatrix website assistant. Answer questions about ProbMatrix\'s ' +
    'IFRS 9 Excel Add-In, risk modeling, automation, model validation, and consulting ' +
    'services for banks, MFIs, DFIs, NBFCs, insurers, and advisors. Keep answers short, ' +
    'accurate, and helpful. If you are not sure about something, suggest the visitor use ' +
    'the contact form or email info@probmatrix.io.',

  // Shown as the widget's opening message.
  greeting: "Hi! I'm the ProbMatrix assistant. Ask me about the IFRS 9 Add-In, our services, or how to get started.",

  // Used only while `enabled` is false, so the widget still feels alive
  // during development/design review before real keys are added.
  demoReplies: [
    "Thanks for your message! I'm running in demo mode right now — once an API key is added in src/config/chatbot.ts, I'll answer this for real.",
    'Great question. In live mode I\'ll pull this from ProbMatrix\'s knowledge base — for now, feel free to reach out at info@probmatrix.io.',
    "I'd love to help with that. This widget just needs an API key configured to go live — see src/config/chatbot.ts.",
  ],
}
