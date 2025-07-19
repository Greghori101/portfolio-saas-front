"use server"

import { fetcher } from "@/lib/fetch"
import { portfolioSchema } from "@/schemas/portfolio"
import { revalidatePath } from "next/cache"
import { ActionResponse } from "@/types/actions"
import z from "zod"

export async function createPortfolio(_: ActionResponse, formData: FormData): Promise<ActionResponse> {
	try {
		// Parse the JSON data from the form
		const rawData = Object.fromEntries(formData.entries())

		// Validate with Zod
		const validatedData = portfolioSchema.safeParse(rawData)

		// Simulate API call delay
		const res = await fetcher("/v1/portfolios", {
			method: "POST",
			body: validatedData.data,
		})

		return {
			success: true,
			message: "Portfolio created successfully!",
			data: validatedData,
		}
	} catch (error) {
		if (error instanceof z.ZodError) {
			return {
				success: false,
				message: "Validation failed",
				errors: error.flatten().fieldErrors,
			}
		}

		return {
			success: false,
			message: "An unexpected error occurred",
			errors: {},
		}
	}
}

export async function updatePortfolio(_: ActionResponse, formData: FormData): Promise<ActionResponse> {
	try {
		const rawData = Object.fromEntries(formData.entries())
		const parsed = portfolioSchema.safeParse(rawData)

		const res = await fetcher(`/v1/portfolios/${rawData.id}`, {
			method: "PUT",
			body: parsed.data,
		})

		return {
			success: true,
			message: "Portfolio created successfully!",
			data: parsed,
		}
	} catch (error) {
		if (error instanceof z.ZodError) {
			return {
				success: false,
				message: "Validation failed",
				errors: error.flatten().fieldErrors,
			}
		}

		return {
			success: false,
			message: "An unexpected error occurred",
			errors: {},
		}
	}
}
