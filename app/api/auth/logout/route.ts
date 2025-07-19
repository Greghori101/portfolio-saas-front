import { NextRequest, NextResponse } from "next/server"
import { fetcher } from "@/lib/fetch"
import { cookies } from "next/headers"

export async function POST() {

		await fetcher("/v1/logout", {
			method: "POST",
      withAuth:true,
		})
	

	;(await cookies()).delete("access_token")
	return NextResponse.json({ message: "Logged out" }, { status: 200 })
}
