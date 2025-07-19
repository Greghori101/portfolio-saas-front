import MobileNavbar from "@/components/admin/mobile-navbar"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { User, Menu, LayoutDashboard, Briefcase, Palette, Settings } from "lucide-react"
import Link from "next/link"

const NavigationItems = () => (
	<>
		<Link href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg">
			<LayoutDashboard className="w-4 h-4" />
			Dashboard
		</Link>

		<Link href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg">
			<Briefcase className="w-4 h-4" />
			Portfolios
		</Link>

		<Link href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg">
			<Palette className="w-4 h-4" />
			Themes
		</Link>

		<Link href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg">
			<Settings className="w-4 h-4" />
			Settings
		</Link>
	</>
)

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className="flex min-h-screen bg-gray-50">
			{/* Desktop Sidebar */}
			<div className="hidden lg:flex w-64 bg-white border-r border-gray-200 flex-col">
				<div className="p-6">
					<h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
				</div>

				<nav className="flex-1 px-4 space-y-2">
					{<NavigationItems />}
				</nav>

				<div className="p-4 border-t border-gray-200">
					<div className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600">
						<User className="w-4 h-4" />
						Admin
					</div>
				</div>
			</div>

			{/* Main Content */}
			<div className="flex-1 flex flex-col">
				{/* Mobile Header */}
				<MobileNavbar  >
                    <NavigationItems/>
                </MobileNavbar>

				{/* Main Content Area */}
				{children}
			</div>
		</div>
	)
}
