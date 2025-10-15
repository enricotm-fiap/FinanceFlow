import { DashboardHeader } from "@/components/dashboard-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, FileText, Download, Upload, Eye, Calendar, DollarSign } from "lucide-react"
import Link from "next/link"
import { documentsData } from "@/lib/document-data"

export default function DocumentosPage() {
  return (
    <div className="flex flex-col h-screen">
      <DashboardHeader />
      <div className="flex-1 p-6 space-y-6 overflow-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" asChild>
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <h1 className="text-2xl font-bold">Documentos</h1>
          </div>
          <Button>
            <Upload className="h-4 w-4 mr-2" />
            Enviar Documento
          </Button>
        </div>

        <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
              <DollarSign className="h-5 w-5" />
              Impacto Financeiro dos Documentos
            </CardTitle>
            <CardDescription>
              Os valores do dashboard são calculados automaticamente com base nos documentos aprovados
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="font-medium text-blue-700 dark:text-blue-300">Documentos Aprovados:</span>
                <span className="ml-2">{documentsData.filter((d) => d.status === "approved").length}</span>
              </div>
              <div>
                <span className="font-medium text-blue-700 dark:text-blue-300">Em Análise:</span>
                <span className="ml-2">{documentsData.filter((d) => d.status === "pending").length}</span>
              </div>
              <div>
                <span className="font-medium text-blue-700 dark:text-blue-300">Próximos ao Vencimento:</span>
                <span className="ml-2">{documentsData.filter((d) => d.status === "expiring").length}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 gap-4 auto-rows-min pb-6">
          {documentsData.map((doc) => (
            <Card key={doc.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText
                      className={`h-5 w-5 ${
                        doc.type === "balance_sheet"
                          ? "text-blue-500"
                          : doc.type === "income_statement"
                            ? "text-purple-500"
                            : doc.type === "revenue_proof"
                              ? "text-emerald-500"
                              : "text-amber-500"
                      }`}
                    />
                    <div>
                      <CardTitle className="text-base">{doc.name}</CardTitle>
                      <CardDescription>Enviado em {doc.uploadDate}</CardDescription>
                      {doc.financialData && doc.status === "approved" && (
                        <div className="text-xs text-emerald-600 mt-1">
                          {doc.financialData.revenue &&
                            `Receita: R$ ${doc.financialData.revenue.toLocaleString("pt-BR")}`}
                          {doc.financialData.expenses &&
                            ` | Despesas: R$ ${doc.financialData.expenses.toLocaleString("pt-BR")}`}
                        </div>
                      )}
                    </div>
                  </div>
                  <Badge
                    variant="secondary"
                    className={
                      doc.status === "approved"
                        ? "bg-emerald-100 text-emerald-700"
                        : doc.status === "pending"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-amber-100 text-amber-700"
                    }
                  >
                    {doc.status === "expiring" && <Calendar className="h-3 w-3 mr-1" />}
                    {doc.status === "approved" ? "Aprovado" : doc.status === "pending" ? "Em análise" : "Vencendo"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    Visualizar
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Baixar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
