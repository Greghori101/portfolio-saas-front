import { NextRequest, NextResponse } from 'next/server'
import { loginSchema } from '@/schemas/auth'
import { fetcher } from '@/lib/fetch'
import { cookies } from 'next/headers'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const parsed = loginSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 422 })
  }

  const res = await fetcher('/v1/login', {
    method: 'POST',
    body: parsed.data,
  })

  if (res?.data?.access_token) {
    (await cookies()).set('access_token', res.data.access_token, {
      httpOnly: true,
      path: '/',
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    })
  }

  return NextResponse.json(res)
}
