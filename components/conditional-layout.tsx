"use client"

import type React from "react"
import { usePathname } from "next/navigation"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const isLoginPage = pathname === "/login"

  if (isLoginPage) {
    return <main className="w-full h-screen">{children}</main>
  }

  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <AppSidebar />
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </SidebarProvider>
  )
}
