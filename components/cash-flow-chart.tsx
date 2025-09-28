"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"
import Link from "next/link"
import { useState } from "react"
import { getFinancialSummary } from "@/lib/document-data"

export function CashFlowChart() {
  const [selectedPeriod, setSelectedPeriod] = useState("12")
  const financialData = getFinancialSummary()

  const fullYearData = [
    ...financialData.monthlyData.map((item) => ({
      name: item.month,
      receita: item.receita,
      despesa: item.despesa,
      saldo: item.receita - item.despesa,
    })),
    // Extend with projected data for remaining months
    { name: "Jul", receita: 72000, despesa: 45000, saldo: 27000 },
    { name: "Ago", receita: 68000, despesa: 43000, saldo: 25000 },
    { name: "Set", receita: 70000, despesa: 44000, saldo: 26000 },
    { name: "Out", receita: 75000, despesa: 46000, saldo: 29000 },
    { name: "Nov", receita: 80000, despesa: 48000, saldo: 32000 },
    { name: "Dez", receita: 85000, despesa: 50000, saldo: 35000 },
  ]

  const getFilteredData = () => {
    const months = Number.parseInt(selectedPeriod)
    return fullYearData.slice(-months)
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Fluxo de Caixa</CardTitle>
          <CardDescription>Análise do fluxo de caixa ao longo do tempo</CardDescription>
        </div>
        <div className="flex items-center gap-4">
          <Tabs value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <TabsList>
              <TabsTrigger value="3">3 meses</TabsTrigger>
              <TabsTrigger value="6">6 meses</TabsTrigger>
              <TabsTrigger value="12">12 meses</TabsTrigger>
            </TabsList>
          </Tabs>
          <Link href="/detalhes-fluxo" className="text-sm font-medium text-primary hover:underline">
            Ver detalhes
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={getFilteredData()}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value) => [`R$ ${value}`, undefined]} labelFormatter={(label) => `Mês: ${label}`} />
              <Legend />
              <Line type="monotone" dataKey="receita" stroke="#10b981" name="Receita" strokeWidth={2} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="despesa" stroke="#f43f5e" name="Despesa" strokeWidth={2} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="saldo" stroke="#f59e0b" name="Saldo" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
