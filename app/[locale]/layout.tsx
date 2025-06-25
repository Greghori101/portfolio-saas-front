import { Providers } from "./providers";

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "@/app/globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Platforms Starter Kit",
	description: "Next.js template for building a multi-tenant SaaS.",
};

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{
		locale: string;
	}>;
}>) {
	const { locale } = await params;
	return (
		<html lang="en">
			<head>
				<link href="./assets/fontawesome/css/ all.min.css" rel="stylesheet" />
			</head>
			<body className={`${geistSans.variable} antialiased`}>
				<Providers locale={locale}>{children}</Providers>
			</body>
		</html>
	);
}
