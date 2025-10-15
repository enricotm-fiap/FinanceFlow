import { DashboardHeader } from "@/components/dashboard-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, BadgeCheck, Clock, CreditCard, LineChart, TrendingDown, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function RecommendationsPage() {
  return (
    <div className="flex flex-col h-full">
      <DashboardHeader />
      <div className="flex-1 p-6 space-y-6 overflow-auto">
        <div className="flex items-center gap-2 mb-6">
          <Button variant="outline" size="icon" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">Recomendações Inteligentes</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-l-4 border-l-emerald-500">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-emerald-500" />
                  Oportunidade de Crédito
                </CardTitle>
                <BadgeCheck className="h-5 w-5 text-emerald-500" />
              </div>
              <CardDescription>Baseado na análise do seu fluxo de caixa e histórico financeiro</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                Este é um bom momento para solicitar crédito. Sua empresa demonstra estabilidade financeira e capacidade
                de pagamento, o que pode resultar em melhores taxas e condições.
              </p>
              <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-md">
                <h4 className="font-medium mb-2 text-foreground">Por que esta recomendação?</h4>
                <ul className="text-sm space-y-1 text-foreground">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>Fluxo de caixa positivo nos últimos 6 meses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>Baixo índice de endividamento (12.3%)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>Histórico de pagamentos em dia</span>
                  </li>
                </ul>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">
                <Clock className="h-4 w-4 mr-2" />
                Lembrar depois
              </Button>
              <Button size="sm">
                <CreditCard className="h-4 w-4 mr-2" />
                Ver opções de crédito
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-l-4 border-l-amber-500">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <LineChart className="h-5 w-5 text-amber-500" />
                  Gestão de Despesas
                </CardTitle>
                <BadgeCheck className="h-5 w-5 text-amber-500" />
              </div>
              <CardDescription>Baseado na análise de tendências de despesas</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                Identificamos um aumento significativo nas despesas operacionais nos últimos 3 meses. Recomendamos uma
                revisão das principais categorias de gastos para otimizar o fluxo de caixa.
              </p>
              <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-md">
                <h4 className="font-medium mb-2 text-foreground">Por que esta recomendação?</h4>
                <ul className="text-sm space-y-1 text-foreground">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-500" />
                    <span>Aumento de 18% nas despesas operacionais</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-500" />
                    <span>Categoria "Marketing" com maior crescimento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-500" />
                    <span>Impacto na margem de lucro (-3.5%)</span>
                  </li>
                </ul>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">
                <Clock className="h-4 w-4 mr-2" />
                Lembrar depois
              </Button>
              <Button size="sm">
                <TrendingDown className="h-4 w-4 mr-2" />
                Analisar despesas
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-purple-500" />
                  Oportunidade de Investimento
                </CardTitle>
                <BadgeCheck className="h-5 w-5 text-purple-500" />
              </div>
              <CardDescription>Baseado no excedente de caixa e projeções financeiras</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                Sua empresa possui um excedente de caixa que poderia ser aplicado em investimentos de curto e médio
                prazo, gerando rendimentos adicionais sem comprometer a liquidez.
              </p>
              <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-md">
                <h4 className="font-medium mb-2 text-foreground">Por que esta recomendação?</h4>
                <ul className="text-sm space-y-1 text-foreground">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-500" />
                    <span>Excedente médio de R$ 85.000 nos últimos 3 meses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-500" />
                    <span>Projeção de fluxo de caixa estável para os próximos 6 meses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-500" />
                    <span>Potencial de rendimento de 9.5% a.a.</span>
                  </li>
                </ul>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">
                <Clock className="h-4 w-4 mr-2" />
                Lembrar depois
              </Button>
              <Button size="sm">
                <LineChart className="h-4 w-4 mr-2" />
                Ver opções de investimento
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-l-4 border-l-rose-500">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <TrendingDown className="h-5 w-5 text-rose-500" />
                  Alerta de Sazonalidade
                </CardTitle>
                <BadgeCheck className="h-5 w-5 text-rose-500" />
              </div>
              <CardDescription>Baseado em padrões históricos de receita</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                Identificamos um padrão sazonal que indica uma possível redução de receitas no próximo trimestre.
                Recomendamos preparar-se financeiramente para este período.
              </p>
              <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-md">
                <h4 className="font-medium mb-2 text-foreground">Por que esta recomendação?</h4>
                <ul className="text-sm space-y-1 text-foreground">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-500" />
                    <span>Queda média de 22% nas receitas no mesmo período dos últimos 2 anos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-500" />
                    <span>Despesas fixas mantêm-se estáveis durante o período</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-500" />
                    <span>Impacto potencial no fluxo de caixa de R$ 65.000</span>
                  </li>
                </ul>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">
                <Clock className="h-4 w-4 mr-2" />
                Lembrar depois
              </Button>
              <Button size="sm">
                <ArrowRight className="h-4 w-4 mr-2" />
                Planejar contingência
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
