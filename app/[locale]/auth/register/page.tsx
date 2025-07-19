import { SignUpCard } from "@/components/auth/signup-card"
import { getProviders } from "next-auth/react"

export default async () => {
	const providers = await getProviders()

	return <SignUpCard providers={providers} />
}
