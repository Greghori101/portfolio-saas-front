import { fetcher } from "@/lib/fetch";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_: NextRequest) {
	const res = await fetcher("/v1/subscriptions", { method: "GET", withAuth:true });
	return NextResponse.json(res);
}
