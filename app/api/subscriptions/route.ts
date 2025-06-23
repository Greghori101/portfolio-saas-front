import { fetcher } from "@/lib/fetch";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_: NextRequest) {
	const token = (await cookies()).get("access_token")?.value;
	const res = await fetcher("/v1/subscriptions", { method: "GET", token });
	return NextResponse.json(res);
}
