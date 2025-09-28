import { DashboardHeader } from "@/components/dashboard-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, CreditCard, CheckCircle, AlertCircle, Clock } from "lucide-react"
import Link from "next/link"

export default function CreditoPage() {
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
          <h1 className="text-2xl font-bold">Opções de Crédito</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-emerald-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-emerald-500" />
                  Capital de Giro
                </CardTitle>
                <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Aprovado
                </Badge>
              </div>
              <CardDescription>Linha de crédito para necessidades operacionais</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Limite disponível:</span>
                  <span className="font-medium">R$ 250.000,00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Taxa de juros:</span>
                  <span className="font-medium text-emerald-600">1,2% a.m.</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Prazo:</span>
                  <span className="font-medium">Até 24 meses</span>
                </div>
              </div>
              <Button className="w-full mt-4">Solicitar Crédito</Button>
            </CardContent>
          </Card>

          <Card className="border-blue-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-blue-500" />
                  Antecipação de Recebíveis
                </CardTitle>
                <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                  <Clock className="h-3 w-3 mr-1" />
                  Em análise
                </Badge>
              </div>
              <CardDescription>Antecipe seus recebimentos futuros</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Valor disponível:</span>
                  <span className="font-medium">R$ 180.000,00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Taxa de desconto:</span>
                  <span className="font-medium text-blue-600">2,5% a.m.</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Prazo médio:</span>
                  <span className="font-medium">45 dias</span>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4 bg-transparent">
                Ver Detalhes
              </Button>
            </CardContent>
          </Card>

          <Card className="border-amber-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-amber-500" />
                  Financiamento de Equipamentos
                </CardTitle>
                <Badge variant="secondary" className="bg-amber-100 text-amber-700">
                  <AlertCircle className="h-3 w-3 mr-1" />
                  Pendente
                </Badge>
              </div>
              <CardDescription>Financie equipamentos e tecnologia</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Limite pré-aprovado:</span>
                  <span className="font-medium">R$ 500.000,00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Taxa de juros:</span>
                  <span className="font-medium text-amber-600">0,9% a.m.</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Prazo:</span>
                  <span className="font-medium">Até 60 meses</span>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4 bg-transparent">
                Completar Solicitação
              </Button>
            </CardContent>
          </Card>

          <Card className="border-purple-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-purple-500" />
                  Cartão Empresarial
                </CardTitle>
                <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Ativo
                </Badge>
              </div>
              <CardDescription>Cartão de crédito para despesas corporativas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Limite atual:</span>
                  <span className="font-medium">R$ 75.000,00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Disponível:</span>
                  <span className="font-medium text-purple-600">R$ 68.500,00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Cashback:</span>
                  <span className="font-medium">1,5% em compras</span>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4 bg-transparent">
                Gerenciar Cartão
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
