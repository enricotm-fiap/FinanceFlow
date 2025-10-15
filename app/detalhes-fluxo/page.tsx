import { DashboardHeader } from "@/components/dashboard-header"
import { CashFlowDetailChart } from "@/components/cash-flow-detail-chart"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Download, Filter } from "lucide-react"
import Link from "next/link"

export default function CashFlowDetails() {
  return (
    <div className="flex flex-col h-full">
      <DashboardHeader />
      <div className="flex-1 p-6 space-y-6 overflow-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" asChild>
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <h1 className="text-2xl font-bold">Detalhes do Fluxo de Caixa</h1>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filtrar
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Exportar
            </Button>
          </div>
        </div>

        <Tabs defaultValue="receitas" className="w-full">
          <TabsList className="grid w-full md:w-[400px] grid-cols-3">
            <TabsTrigger value="receitas">Receitas</TabsTrigger>
            <TabsTrigger value="despesas">Despesas</TabsTrigger>
            <TabsTrigger value="saldo">Saldo</TabsTrigger>
          </TabsList>
          <TabsContent value="receitas">
            <Card>
              <CardHeader>
                <CardTitle>Análise de Receitas</CardTitle>
                <CardDescription>Visualize a evolução das receitas nos últimos 12 meses</CardDescription>
              </CardHeader>
              <CardContent>
                <CashFlowDetailChart type="receitas" />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="despesas">
            <Card>
              <CardHeader>
                <CardTitle>Análise de Despesas</CardTitle>
                <CardDescription>Visualize a evolução das despesas nos últimos 12 meses</CardDescription>
              </CardHeader>
              <CardContent>
                <CashFlowDetailChart type="despesas" />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="saldo">
            <Card>
              <CardHeader>
                <CardTitle>Análise de Saldo</CardTitle>
                <CardDescription>Visualize a evolução do saldo nos últimos 12 meses</CardDescription>
              </CardHeader>
              <CardContent>
                <CashFlowDetailChart type="saldo" />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Principais Fontes de Receita</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Vendas de Produtos</span>
                  <span className="font-medium">R$ 125.000,00</span>
                </li>
                <li className="flex justify-between">
                  <span>Prestação de Serviços</span>
                  <span className="font-medium">R$ 87.500,00</span>
                </li>
                <li className="flex justify-between">
                  <span>Assinaturas</span>
                  <span className="font-medium">R$ 45.000,00</span>
                </li>
                <li className="flex justify-between">
                  <span>Outros</span>
                  <span className="font-medium">R$ 12.500,00</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Principais Despesas</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Folha de Pagamento</span>
                  <span className="font-medium">R$ 95.000,00</span>
                </li>
                <li className="flex justify-between">
                  <span>Infraestrutura</span>
                  <span className="font-medium">R$ 35.000,00</span>
                </li>
                <li className="flex justify-between">
                  <span>Marketing</span>
                  <span className="font-medium">R$ 28.500,00</span>
                </li>
                <li className="flex justify-between">
                  <span>Impostos</span>
                  <span className="font-medium">R$ 42.000,00</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Indicadores</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Margem de Lucro</span>
                  <span className="font-medium text-emerald-600">24.5%</span>
                </li>
                <li className="flex justify-between">
                  <span>ROI</span>
                  <span className="font-medium text-emerald-600">18.2%</span>
                </li>
                <li className="flex justify-between">
                  <span>Crescimento YoY</span>
                  <span className="font-medium text-emerald-600">12.7%</span>
                </li>
                <li className="flex justify-between">
                  <span>Burn Rate</span>
                  <span className="font-medium text-amber-600">R$ 45.000/mês</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
