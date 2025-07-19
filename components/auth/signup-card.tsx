"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { useCurrentLocale } from "@/locales/client"
import { useState, useTransition } from "react"
import type { BuiltInProviderType } from "next-auth/providers/index"
import { signIn, type ClientSafeProvider, type LiteralUnion } from "next-auth/react"

// Provider icons component
const ProviderIcon = ({ providerId }: { providerId: string }) => {
	switch (providerId.toLowerCase()) {
		case "google":
			return (
				<svg className="w-5 h-5" viewBox="0 0 24 24">
					<path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
					<path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
					<path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
					<path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
				</svg>
			)
		case "github":
			return (
				<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
					<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
				</svg>
			)
		case "discord":
			return (
				<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
					<path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0189 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z" />
				</svg>
			)
		case "twitter":
		case "x":
			return (
				<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
					<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
				</svg>
			)
		case "facebook":
			return (
				<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
					<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
				</svg>
			)
		case "apple":
			return (
				<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
					<path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
				</svg>
			)
		default:
			return (
				<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
					<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
				</svg>
			)
	}
}

// Get provider button styling
const getProviderButtonStyle = (providerId: string) => {
	switch (providerId.toLowerCase()) {
		case "google":
			return "bg-white hover:bg-gray-50 text-gray-900 border border-gray-300"
		case "github":
			return "bg-gray-900 hover:bg-gray-800 text-white"
		case "discord":
			return "bg-[#5865F2] hover:bg-[#4752C4] text-white"
		case "twitter":
		case "x":
			return "bg-black hover:bg-gray-800 text-white"
		case "facebook":
			return "bg-[#1877F2] hover:bg-[#166FE5] text-white"
		case "apple":
			return "bg-black hover:bg-gray-800 text-white"
		default:
			return "bg-blue-600 hover:bg-blue-700 text-white"
	}
}

export function SignUpCard({ providers }: { providers: Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null }) {
	const locale = useCurrentLocale()
	const [isPending, startTransition] = useTransition()
	const [error, setError] = useState<string | null>(null)

	const handleAuth = (provider: string) => {
		setError(null)
		startTransition(async () => {
			try {
				await signIn(provider, { redirect: false, callbackUrl: `/${locale}/auth/callback` })
			} catch (err) {
				setError(err instanceof Error ? err.message : "Authentication failed")
			}
		})
	}

	if (!providers) {
		return (
			<div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
				<Card className="w-full max-w-md">
					<CardContent className="p-6">
						<p className="text-center text-gray-500">No authentication providers available.</p>
					</CardContent>
				</Card>
			</div>
		)
	}

	const providerList = Object.values(providers)

	return (
		<div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
			<Card className="w-full max-w-md">
				<CardHeader className="text-center space-y-4">
					<Link href="/" className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
						<div className="grid grid-cols-2 gap-1 w-8 h-8">
							<div className="bg-white/30 rounded-sm"></div>
							<div className="bg-white/50 rounded-sm"></div>
							<div className="bg-white/40 rounded-sm"></div>
							<div className="bg-white/60 rounded-sm"></div>
						</div>
					</Link>
					<div className="space-y-2">
						<CardTitle className="text-2xl font-semibold text-gray-900">Create your account</CardTitle>
						<CardDescription className="text-gray-600">Build single-page portfolios with ease</CardDescription>
					</div>
				</CardHeader>
				<CardContent className="space-y-6">
					{error && <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">{error}</div>}

					<div className="space-y-3">
						{providerList.map((provider) => (
							<Button
								key={provider.id}
								type="button"
								onClick={() => handleAuth(provider.id)}
								disabled={isPending}
								className={`w-full h-12 font-medium rounded-lg flex items-center justify-center gap-3 ${getProviderButtonStyle(
									provider.id
								)} disabled:opacity-50 disabled:cursor-not-allowed`}
							>
								{isPending ? <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" /> : <ProviderIcon providerId={provider.id} />}
								{isPending ? "Signing in..." : `Continue with ${provider.name}`}
							</Button>
						))}
					</div>

					{providerList.length > 0 && (
						<div className="text-center">
							<p className="text-sm text-gray-500">
								Already have an account? <button className="text-blue-600 hover:text-blue-700 font-medium">Sign in</button>
							</p>
						</div>
					)}
				</CardContent>
			</Card>
		</div>
	)
}
