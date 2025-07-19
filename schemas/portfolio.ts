import { z } from 'zod'

export const portfolioSchema = z.object({
  name: z.string().min(3),
  role: z.string().min(2),
  specialty: z.string().min(2),
  bio: z.string().min(10),
  description: z.string().optional(),
  settings: z.record(z.any()).optional(),
  is_active: z.boolean().optional(),
  domain: z.string().url().optional(),
  domain_type: z.enum(['subdomain', 'custom']),
  theme_id: z.string().uuid(),

  // Related blocks
  projects: z.array(z.object({
    title: z.string().min(2),
    description: z.string().optional(),
    url: z.string().url().optional(),
    started_at: z.coerce.date().optional(),
    ended_at: z.coerce.date().optional(),
    media: z.array(z.string().url()).optional(),
  })).optional(),

  experiences: z.array(z.object({
    company: z.string(),
    title: z.string(),
    description: z.string().optional(),
    started_at: z.coerce.date(),
    ended_at: z.coerce.date().optional(),
    is_current: z.boolean().optional(),
    media: z.array(z.string().url()).optional(),
  })).optional(),

  skills: z.array(z.object({
    name: z.string(),
    level: z.string(), // could be changed to z.enum([...]) if levels are predefined
  })).optional(),

  links: z.array(z.object({
    platform: z.string(),
    url: z.string().url(),
    is_active: z.boolean().optional(),
  })).optional(),

  educations: z.array(z.object({
    institution: z.string(),
    degree: z.string(),
    field: z.string(),
    started_at: z.coerce.date(),
    ended_at: z.coerce.date().optional(),
  })).optional(),

  testimonials: z.array(z.object({
    author: z.string(),
    quote: z.string(),
    position: z.string().optional(),
  })).optional(),

  services: z.array(z.object({
    title: z.string(),
    description: z.string().optional(),
  })).optional(),

  certificates: z.array(z.object({
    title: z.string(),
    issuer: z.string(),
    issued_at: z.coerce.date(),
    expires_at: z.coerce.date().optional(),
    certificate_url: z.string().url().optional(),
  })).optional(),
})

export type PortfolioInput = z.infer<typeof portfolioSchema>
