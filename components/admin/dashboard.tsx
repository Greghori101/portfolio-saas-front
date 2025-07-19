"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { LayoutDashboard, Briefcase, Palette, Settings, Plus, Edit3, Layers3, User, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const NavigationItems = () => (
  <>
    <Link href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg">
      <LayoutDashboard className="w-4 h-4" />
      Dashboard
    </Link>

    <Link
      href="#"
      className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg"
    >
      <Briefcase className="w-4 h-4" />
      Portfolios
    </Link>

    <Link
      href="#"
      className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg"
    >
      <Palette className="w-4 h-4" />
      Themes
    </Link>

    <Link
      href="#"
      className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg"
    >
      <Settings className="w-4 h-4" />
      Settings
    </Link>
  </>
)

export default function Dashboard() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex w-64 bg-white border-r border-gray-200 flex-col">
        <div className="p-6">
          <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          <NavigationItems />
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

                <nav className="flex-1 px-4 space-y-2">
                  <NavigationItems />
                </nav>

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

        {/* Main Content Area */}
        <div className="flex-1 p-4 sm:p-6 lg:p-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 lg:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Portfolios</h1>
            <Button className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
              <Plus className="w-4 h-4 mr-2" />
              New Portfolio
            </Button>
          </div>

          {/* Portfolio Card */}
          <Card className="mb-6 lg:mb-8">
            <CardContent className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden flex-shrink-0 mx-auto sm:mx-0">
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    alt="Douglas Foster"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 text-center sm:text-left">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">Douglas Foster</h2>
                  <p className="text-base sm:text-lg text-gray-600 mb-3">Product Manager</p>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, augue commodo ligula.
                  </p>
                  <p className="text-sm text-gray-500 mb-4 sm:mb-6">douglasfoster.com</p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="outline" className="w-full sm:w-auto bg-transparent">
                      Settings
                    </Button>
                    <Button variant="outline" className="w-full sm:w-auto bg-transparent">
                      Preview
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Feature Cards */}
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            <Card className="p-4 sm:p-6">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Edit3 className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Build & Edit Portfolio</h3>
                    <p className="text-sm sm:text-base text-gray-600">Customize your portfolio content and design</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-4 sm:p-6">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Layers3 className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                      Manage Multiple Portfolios
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Create and organize several portfolios from one account
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
