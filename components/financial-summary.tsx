"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDown, ArrowUp, DollarSign } from "lucide-react"
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from "recharts"
import { getFinancialSummary } from "@/lib/document-data"

export function FinancialSummary() {
  const financialData = getFinancialSummary()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Resumo Financeiro</CardTitle>
        <CardDescription>Baseado nos documentos enviados</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium text-muted-foreground">Receita Total</span>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100">
                <ArrowUp className="h-4 w-4 text-emerald-600" />
              </div>
              <span className="text-2xl font-bold">R$ {financialData.totalRevenue.toLocaleString("pt-BR")}</span>
            </div>
            <span className="text-xs text-emerald-600">
              +{financialData.revenueGrowth}% em relação ao período anterior
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium text-muted-foreground">Despesas Totais</span>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-100">
                <ArrowDown className="h-4 w-4 text-rose-600" />
              </div>
              <span className="text-2xl font-bold">R$ {financialData.totalExpenses.toLocaleString("pt-BR")}</span>
            </div>
            <span className="text-xs text-rose-600">
              +{financialData.expenseGrowth}% em relação ao período anterior
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium text-muted-foreground">Saldo Acumulado</span>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100">
                <DollarSign className="h-4 w-4 text-amber-600" />
              </div>
              <span className="text-2xl font-bold">R$ {financialData.balance.toLocaleString("pt-BR")}</span>
            </div>
            <span className="text-xs text-amber-600">
              +{financialData.balanceGrowth}% em relação ao período anterior
            </span>
          </div>
        </div>
        <div className="mt-6 h-48">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={financialData.monthlyData}>
              <XAxis dataKey="month" />
              <Tooltip formatter={(value) => [`R$ ${value}`, undefined]} labelFormatter={(label) => `Mês: ${label}`} />
              <Bar dataKey="receita" fill="#10b981" name="Receita" />
              <Bar dataKey="despesa" fill="#f43f5e" name="Despesa" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
