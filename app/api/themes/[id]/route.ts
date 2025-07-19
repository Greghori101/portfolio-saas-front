import { fetcher } from "@/lib/fetch"
import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
	const res = await fetcher(`/v1/themes/${params.id}`, { method: "GET", token })
	return NextResponse.json(res)
}

export async function DELETE(_: NextRequest, { params }: { params: { id: string } }) {
	const res = await fetcher(`/v1/themes/${params.id}`, { method: "DELETE", token })
	return NextResponse.json(res)
}
