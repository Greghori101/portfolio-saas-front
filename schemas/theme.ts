import { z } from 'zod'

export const themeSchema = z.object({
  name: z.string().min(2),
  description: z.string().optional(),
  preview_url: z.string().url().optional(),
  // Add more fields as needed
})
