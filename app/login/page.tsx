"use client"

import type React from "react"

import { useState } from "react"
import { Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useAuth } from "@/lib/auth-context"

export default function LoginPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const { login } = useAuth()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim()) {
      login(name.trim(), email.trim() || undefined)
    }
  }

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-900 dark:to-slate-800 p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="space-y-4 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900">
            <Wallet className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div>
            <CardTitle className="text-2xl font-bold">Bem-vindo ao FinanceFlow</CardTitle>
            <CardDescription className="mt-2">Entre com suas informações para acessar o dashboard</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome Completo</Label>
              <Input
                id="name"
                type="text"
                placeholder="Digite seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email (opcional)</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
              />
            </div>
            <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700" size="lg">
              Entrar no Dashboard
            </Button>
          </form>
          <div className="mt-6 text-center text-sm text-muted-foreground">
            <p>Análise Inteligente de Fluxo Financeiro para PJ</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
