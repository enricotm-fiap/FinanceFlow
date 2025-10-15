"use client"

import { BarChart3, FileText, Home, LineChart, Settings, TrendingUp, Users, Wallet } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar>
      <SidebarHeader className="flex h-14 items-center border-b px-4">
        <div className="flex items-center gap-2">
          <Wallet className="h-6 w-6 text-emerald-600" />
          <span className="font-semibold">FinanceFlow</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/"}>
              <Link href="/">
                <Home className="h-4 w-4" />
                <span>Dashboard</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/detalhes-fluxo"}>
              <Link href="/detalhes-fluxo">
                <LineChart className="h-4 w-4" />
                <span>Fluxo de Caixa</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/recomendacoes"}>
              <Link href="/recomendacoes">
                <TrendingUp className="h-4 w-4" />
                <span>Recomendações</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarSeparator />
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/relatorios"}>
              <Link href="/relatorios">
                <BarChart3 className="h-4 w-4" />
                <span>Relatórios</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/documentos"}>
              <Link href="/documentos">
                <FileText className="h-4 w-4" />
                <span>Documentos</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/equipe"}>
              <Link href="/equipe">
                <Users className="h-4 w-4" />
                <span>Equipe</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <Button variant="outline" size="sm" className="w-full justify-start bg-transparent" asChild>
          <Link href="/configuracoes">
            <Settings className="mr-2 h-4 w-4" />
            Configurações
          </Link>
        </Button>
      </SidebarFooter>
    </Sidebar>
  )
}
