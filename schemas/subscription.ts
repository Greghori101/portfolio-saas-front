import { z } from 'zod'

export const subscriptionSchema = z.object({
  portfolio_id: z.string(),
  stripe_price_id: z.string(),
  status: z.enum(['active', 'canceled', 'past_due']).optional(),
  ends_at: z.string().optional(),
})
