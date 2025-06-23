'use server'

import { themeSchema } from '@/schemas/theme'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { fetcher } from '@/lib/fetch'
import type { ActionResponse } from '@/types/actions'

export async function createTheme(_: ActionResponse, formData: FormData): Promise<ActionResponse> {
  const parsed = themeSchema.safeParse(Object.fromEntries(formData))
  if (!parsed.success) return { error: parsed.error.flatten() }

  const token = (await cookies()).get('access_token')?.value
  const res = await fetcher('/v1/themes', {
    method: 'POST',
    token,
    body: parsed.data,
  })

  revalidatePath('/dashboard/themes')
  return res
}

export async function updateTheme(_: ActionResponse, formData: FormData): Promise<ActionResponse> {
  const id = formData.get('id')?.toString()
  if (!id) return { error: { formErrors: ['Missing theme ID'] } }

  const parsed = themeSchema.safeParse(Object.fromEntries(formData))
  if (!parsed.success) return { error: parsed.error.flatten() }

  const token = (await cookies()).get('access_token')?.value
  const res = await fetcher(`/v1/themes/${id}`, {
    method: 'PUT',
    token,
    body: parsed.data,
  })

  revalidatePath('/dashboard/themes')
  return res
}
