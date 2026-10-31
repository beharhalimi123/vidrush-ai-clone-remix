import { createClient } from '@blinkdotnew/sdk'

export const blink = createClient({
  projectId: import.meta.env.VITE_BLINK_PROJECT_ID || 'vidrush-ai-clone-xa758frs',
  publishableKey: import.meta.env.VITE_BLINK_PUBLISHABLE_KEY || 'blnk_pk_g3TQhwP0GqidcBwgfuWtvyVc9ExxUoZD',
  authRequired: false,
  auth: { mode: 'managed' },
})
