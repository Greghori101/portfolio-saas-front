// GET all portfolios
import { fetcher } from "@/lib/fetch"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function GET() {
	const data = await fetcher("/v1/portfolios", { token })
	return NextResponse.json(data)
}
