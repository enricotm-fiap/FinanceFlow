"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CreditCard, TrendingDown, TrendingUp, LineChart } from "lucide-react"
import Link from "next/link"

export function Recommendations() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recomendações Inteligentes</CardTitle>
        <CardDescription>Baseadas na análise do seu fluxo financeiro</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Link href="/recomendacoes" className="block">
            <div className="flex items-start gap-3 rounded-lg border p-3 transition-colors hover:bg-slate-50">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                <CreditCard className="h-5 w-5 text-emerald-600" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-medium">Oportunidade de Crédito</h4>
                  <Badge variant="outline" className="text-emerald-600 bg-emerald-50">
                    Alta Prioridade
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Este é um bom momento para solicitar crédito com base no seu histórico financeiro.
                </p>
              </div>
            </div>
          </Link>

          <Link href="/recomendacoes" className="block">
            <div className="flex items-start gap-3 rounded-lg border p-3 transition-colors hover:bg-slate-50">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-100">
                <LineChart className="h-5 w-5 text-amber-600" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-medium">Gestão de Despesas</h4>
                  <Badge variant="outline" className="text-amber-600 bg-amber-50">
                    Média Prioridade
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Identificamos um aumento nas despesas operacionais. Recomendamos uma revisão.
                </p>
              </div>
            </div>
          </Link>

          <Link href="/recomendacoes" className="block">
            <div className="flex items-start gap-3 rounded-lg border p-3 transition-colors hover:bg-slate-50">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-purple-100">
                <TrendingUp className="h-5 w-5 text-purple-600" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-medium">Oportunidade de Investimento</h4>
                  <Badge variant="outline" className="text-purple-600 bg-purple-50">
                    Média Prioridade
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Sua empresa possui excedente de caixa que poderia ser aplicado em investimentos.
                </p>
              </div>
            </div>
          </Link>

          <Link href="/recomendacoes" className="block">
            <div className="flex items-start gap-3 rounded-lg border p-3 transition-colors hover:bg-slate-50">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-rose-100">
                <TrendingDown className="h-5 w-5 text-rose-600" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-medium">Alerta de Sazonalidade</h4>
                  <Badge variant="outline" className="text-rose-600 bg-rose-50">
                    Baixa Prioridade
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Identificamos um padrão sazonal que indica possível redução de receitas no próximo trimestre.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
