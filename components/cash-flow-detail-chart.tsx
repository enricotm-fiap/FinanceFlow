"use client"

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
} from "recharts"

const receitasData = [
  { name: "Jan", valor: 45000 },
  { name: "Fev", valor: 52000 },
  { name: "Mar", valor: 48000 },
  { name: "Abr", valor: 61000 },
  { name: "Mai", valor: 55000 },
  { name: "Jun", valor: 67000 },
  { name: "Jul", valor: 72000 },
  { name: "Ago", valor: 68000 },
  { name: "Set", valor: 70000 },
  { name: "Out", valor: 75000 },
  { name: "Nov", valor: 80000 },
  { name: "Dez", valor: 85000 },
]

const despesasData = [
  { name: "Jan", valor: 32000 },
  { name: "Fev", valor: 35000 },
  { name: "Mar", valor: 30000 },
  { name: "Abr", valor: 42000 },
  { name: "Mai", valor: 38000 },
  { name: "Jun", valor: 41000 },
  { name: "Jul", valor: 45000 },
  { name: "Ago", valor: 43000 },
  { name: "Set", valor: 44000 },
  { name: "Out", valor: 46000 },
  { name: "Nov", valor: 48000 },
  { name: "Dez", valor: 50000 },
]

const saldoData = [
  { name: "Jan", valor: 13000 },
  { name: "Fev", valor: 17000 },
  { name: "Mar", valor: 18000 },
  { name: "Abr", valor: 19000 },
  { name: "Mai", valor: 17000 },
  { name: "Jun", valor: 26000 },
  { name: "Jul", valor: 27000 },
  { name: "Ago", valor: 25000 },
  { name: "Set", valor: 26000 },
  { name: "Out", valor: 29000 },
  { name: "Nov", valor: 32000 },
  { name: "Dez", valor: 35000 },
]

interface CashFlowDetailChartProps {
  type: "receitas" | "despesas" | "saldo"
}

export function CashFlowDetailChart({ type }: CashFlowDetailChartProps) {
  const chartData = type === "receitas" ? receitasData : type === "despesas" ? despesasData : saldoData

  const chartColor = type === "receitas" ? "#10b981" : type === "despesas" ? "#f43f5e" : "#f59e0b"

  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        {type === "saldo" ? (
          <AreaChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip formatter={(value) => [`R$ ${value}`, "Valor"]} labelFormatter={(label) => `Mês: ${label}`} />
            <Legend />
            <Area
              type="monotone"
              dataKey="valor"
              stroke={chartColor}
              fill={chartColor}
              fillOpacity={0.2}
              name={type === "receitas" ? "Receita" : type === "despesas" ? "Despesa" : "Saldo"}
            />
          </AreaChart>
        ) : (
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip formatter={(value) => [`R$ ${value}`, "Valor"]} labelFormatter={(label) => `Mês: ${label}`} />
            <Legend />
            <Line
              type="monotone"
              dataKey="valor"
              stroke={chartColor}
              strokeWidth={2}
              dot={{ r: 4 }}
              name={type === "receitas" ? "Receita" : "Despesa"}
            />
          </LineChart>
        )}
      </ResponsiveContainer>
    </div>
  )
}
