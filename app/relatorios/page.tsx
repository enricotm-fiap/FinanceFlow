import { DashboardHeader } from "@/components/dashboard-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Download, FileText, Calendar, TrendingUp, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function RelatoriosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <DashboardHeader />
      <div className="flex-1 p-6 space-y-6">
        <div className="flex items-center gap-2 mb-6">
          <Button variant="outline" size="icon" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">Relatórios</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-blue-500" />
                Relatório Mensal
              </CardTitle>
              <CardDescription>Análise completa do desempenho financeiro mensal</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Relatório detalhado com receitas, despesas, fluxo de caixa e indicadores de performance.
              </p>
              <Button className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Gerar Relatório
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-emerald-500" />
                Relatório Anual
              </CardTitle>
              <CardDescription>Visão consolidada do ano fiscal</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Análise anual com comparativos, tendências e projeções para o próximo período.
              </p>
              <Button className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Gerar Relatório
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-purple-500" />
                Relatório Personalizado
              </CardTitle>
              <CardDescription>Configure seu próprio relatório</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Crie relatórios customizados com os dados e períodos que você precisa.
              </p>
              <Button className="w-full">
                <Calendar className="h-4 w-4 mr-2" />
                Configurar
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
