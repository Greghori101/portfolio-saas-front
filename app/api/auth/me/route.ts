import { NextRequest, NextResponse } from 'next/server'
import { fetcher } from '@/lib/fetch'
import { cookies } from 'next/headers'

export async function GET(req: NextRequest) {
  const token = (await cookies()).get('access_token')?.value

  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const res = await fetcher('/v1/me', {
    method: 'GET',
    token,
  })

  return NextResponse.json(res)
}
