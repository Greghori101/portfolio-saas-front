"use client"

import { ReactNode, useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { LayoutDashboard, Briefcase, Palette, Settings, Plus, Edit3, Layers3, User, Menu } from "lucide-react"
import Link from "next/link"

export default function MobileNavbar({ children }: { children: ReactNode }) {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false)

	return (
		<div className="lg:hidden flex items-center justify-between p-4 bg-white border-b border-gray-200">
			<h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>

			<Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
				<SheetTrigger asChild>
					<Button variant="ghost" size="icon">
						<Menu className="w-5 h-5" />
						<span className="sr-only">Open navigation menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side="left" className="w-64 p-0">
					<div className="flex flex-col h-full">
						<div className="p-6">
							<h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
						</div>

						<nav className="flex-1 px-4 space-y-2">{children}</nav>

						<div className="p-4 border-t border-gray-200">
							<div className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600">
								<User className="w-4 h-4" />
								Admin
							</div>
						</div>
					</div>
				</SheetContent>
			</Sheet>
		</div>
	)
}
