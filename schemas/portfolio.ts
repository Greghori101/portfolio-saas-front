import { z } from 'zod'

export const portfolioSchema = z.object({
  title: z.string().min(3),
  description: z.string().optional(),
  url: z.string().url().optional(),
})

export type PortfolioInput = z.infer<typeof portfolioSchema>
