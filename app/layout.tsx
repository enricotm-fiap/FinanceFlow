import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ConditionalLayout } from "@/components/conditional-layout"
import { AuthProvider } from "@/lib/auth-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Análise Inteligente de Fluxo Financeiro para PJ",
  description: "Dashboard para análise financeira empresarial",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <AuthProvider>
            <ConditionalLayout>{children}</ConditionalLayout>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
