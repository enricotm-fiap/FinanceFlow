"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { HelpCircle, TrendingUp, BarChart3, Zap, TrendingDown } from "lucide-react"
import Link from "next/link"
import { getCompanyPhase } from "@/lib/document-data"

export function CompanyStatus() {
  const companyData = getCompanyPhase()

  const getPhaseIcon = (phase: string) => {
    switch (phase) {
      case "Expansão":
        return <TrendingUp className="h-6 w-6" />
      case "Maturidade":
        return <BarChart3 className="h-6 w-6" />
      case "Declínio":
        return <TrendingDown className="h-6 w-6" />
      default:
        return <Zap className="h-6 w-6" />
    }
  }

  const getStageStyle = (stage: string) => {
    const isActive = stage === companyData.phase
    return isActive ? "text-sm font-bold text-foreground" : "text-sm text-muted-foreground/50"
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Classificação da Empresa</CardTitle>
          <Link href="#" className="text-sm text-muted-foreground hover:underline flex items-center">
            <HelpCircle className="h-4 w-4 mr-1" />
            Entenda a classificação
          </Link>
        </div>
        <CardDescription>Baseado na análise dos documentos enviados</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center mb-6">
          <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-8 border-emerald-100">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-emerald-600 text-white">
              <div className="flex flex-col items-center">
                {getPhaseIcon(companyData.phase)}
                <span className="text-sm font-medium">{companyData.phase}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className={getStageStyle("Início")}>Início</span>
              <span className={getStageStyle("Expansão")}>Expansão</span>
              <span className={getStageStyle("Maturidade")}>Maturidade</span>
              <span className={getStageStyle("Declínio")}>Declínio</span>
            </div>
            <Progress value={companyData.progress} className="h-2" />
          </div>
          <div className="rounded-lg bg-slate-50 p-4">
            <h4 className="mb-2 font-medium">Características da fase de {companyData.phase}:</h4>
            <ul className="space-y-1 text-sm">
              {companyData.characteristics.map((characteristic, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-600" />
                  <span>{characteristic}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
