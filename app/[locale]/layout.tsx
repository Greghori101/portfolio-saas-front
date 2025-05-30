import { Providers } from './providers'

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{
    locale: string
  }>
}>) {
  const { locale } = await params
  return <Providers locale={locale}>{children}</Providers>
}
