import { fetcher } from "@/lib/fetch"
import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

export async function GET(_: NextRequest) {
	const res = await fetcher("/v1/themes", { method: "GET", token })
	return NextResponse.json(res)
}
