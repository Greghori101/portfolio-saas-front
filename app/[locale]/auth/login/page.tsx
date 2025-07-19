import { SignInCard } from "@/components/auth/signin-card"
import { getProviders } from "next-auth/react"

export default async () => {
	const providers = await getProviders()

	return <SignInCard providers={providers} />
}
