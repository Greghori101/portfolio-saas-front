"use server"

import { fetcher } from "@/lib/fetch"
import { portfolioSchema } from "@/schemas/portfolio"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"
import { ActionResponse } from "@/types/actions"

export async function createPortfolio(_: ActionResponse, formData: FormData): Promise<ActionResponse> {
	const rawData = Object.fromEntries(formData.entries())
	const parsed = portfolioSchema.safeParse(rawData)

	if (!parsed.success) {
		return { error: parsed.error.flatten() }
	}

	const res = await fetcher("/v1/portfolios", {
		method: "POST",
		body: parsed.data,
	})

	revalidatePath("/dashboard")
	return res
}

export async function updatePortfolio(_: ActionResponse, formData: FormData): Promise<ActionResponse> {
	const rawData = Object.fromEntries(formData.entries())
	const parsed = portfolioSchema.safeParse(rawData)

	if (!parsed.success || !rawData.id) {
		return { error: parsed.error?.flatten() ?? {} }
	}

	const res = await fetcher(`/v1/portfolios/${rawData.id}`, {
		method: "PUT",
		body: parsed.data,
	})

	revalidatePath("/dashboard")
	return res
}
