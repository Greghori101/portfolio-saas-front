export type Portfolio = {
  name: string
  role: string
  specialty: string
  bio: string
  description?: string
  settings?: Record<string, any>
  is_active?: boolean
  domain?: string
  domain_type: 'subdomain' | 'custom'
  theme_id: string
}

export type Project = {
  title: string
  description?: string
  url?: string
  started_at?: Date
  ended_at?: Date
  media?: string[]
}

export type Experience = {
  company: string
  title: string
  description?: string
  started_at: Date
  ended_at?: Date
  is_current?: boolean
  media?: string[]
}
export type Skill = {
  name: string
  level: string
}

export type Link = {
  platform: string
  url: string
  is_active?: boolean
}

export type Education = {
  institution: string
  degree: string
  field: string
  started_at: Date
  ended_at?: Date
}

export type Testimonial = {
  author: string
  quote: string
  position?: string
}

export type Service = {
  title: string
  description?: string
}

export type Certificate = {
  title: string
  issuer: string
  issued_at: Date
  expires_at?: Date
  certificate_url?: string
}

export type FullPortfolio = Portfolio & {
  projects?: Project[]
  experiences?: Experience[]
  skills?: Skill[]
  links?: Link[]
  educations?: Education[]
  testimonials?: Testimonial[]
  services?: Service[]
  certificates?: Certificate[]
}
