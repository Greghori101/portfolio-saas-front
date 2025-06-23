import { fetcher } from '@/lib/fetch'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  const token = (await cookies()).get('access_token')?.value
  const data = await fetcher(`/v1/portfolios/${params.id}`, { token })
  return NextResponse.json(data)
}

export async function DELETE(_: NextRequest, { params }: { params: { id: string } }) {
  const token = (await cookies()).get('access_token')?.value
  const res = await fetcher(`/v1/portfolios/${params.id}`, {
    method: 'DELETE',
    token,
  })
  return NextResponse.json(res)
}
