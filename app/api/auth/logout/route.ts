import { NextRequest, NextResponse } from 'next/server'
import { fetcher } from '@/lib/fetch'
import { cookies } from 'next/headers'

export async function POST() {
  const token = (await cookies()).get('access_token')?.value

  if (token) {
    await fetcher('/v1/logout', {
      method: 'POST',
      token,
    })
  }

  (await cookies()).delete('access_token')
  return NextResponse.json({ message: 'Logged out' }, { status: 200 })
}
