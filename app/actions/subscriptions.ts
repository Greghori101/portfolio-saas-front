'use server'

import { subscriptionSchema } from '@/schemas/subscription'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { fetcher } from '@/lib/fetch'
import type { ActionResponse } from '@/types/actions'

export async function createSubscription(_: ActionResponse, formData: FormData): Promise<ActionResponse> {
  const parsed = subscriptionSchema.safeParse(Object.fromEntries(formData))
  if (!parsed.success) return { error: parsed.error.flatten() }

  const token = (await cookies()).get('access_token')?.value
  const res = await fetcher('/v1/subscriptions', {
    method: 'POST',
    token,
    body: parsed.data,
  })

  revalidatePath('/dashboard/subscriptions')
  return res
}

export async function updateSubscription(_: ActionResponse, formData: FormData): Promise<ActionResponse> {
  const id = formData.get('id')?.toString()
  if (!id) return { error: { formErrors: ['Missing subscription ID'] } }

  const parsed = subscriptionSchema.safeParse(Object.fromEntries(formData))
  if (!parsed.success) return { error: parsed.error.flatten() }

  const token = (await cookies()).get('access_token')?.value
  const res = await fetcher(`/v1/subscriptions/${id}`, {
    method: 'PUT',
    token,
    body: parsed.data,
  })

  revalidatePath('/dashboard/subscriptions')
  return res
}
