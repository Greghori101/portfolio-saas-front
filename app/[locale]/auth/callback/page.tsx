"use client"

import { useCurrentLocale } from "@/locales/client"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import type React from "react"
import { useEffect } from "react"

const Page = () => {
	const locale = useCurrentLocale()
	const { data: session } = useSession()
	const router = useRouter()

	const login = async (session: any | null) => {
		if (session?.accessToken) {
			await fetch(`/api/auth/login`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify({
					type: session.token.provider,
					idToken: session.token.idToken || "",
				}),
			})
			router.replace(`/${locale}/admin`)
		}
	}

	useEffect(() => {
		login(session)
	}, [session])
	return <p className="mt-4 text-gray-700">Loading...</p>
}

export default Page
