"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { FileUp, CheckCircle2, Clock, AlertCircle } from "lucide-react"
import { useState } from "react"

export function DataUpload() {
  const [uploadState, setUploadState] = useState<"idle" | "uploading" | "processing" | "complete" | "error">("idle")
  const [progress, setProgress] = useState(0)

  const handleUpload = () => {
    setUploadState("uploading")
    setProgress(0)

    const uploadInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(uploadInterval)
          setUploadState("processing")

          setTimeout(() => {
            setUploadState("complete")
          }, 2000)

          return 100
        }
        return prev + 10
      })
    }, 300)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload de Dados Financeiros</CardTitle>
        <CardDescription>Importe seus dados financeiros para análise</CardDescription>
      </CardHeader>
      <CardContent>
        {uploadState === "idle" && (
          <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8">
            <FileUp className="mb-4 h-10 w-10 text-muted-foreground" />
            <h3 className="mb-2 text-lg font-medium">Arraste arquivos ou clique para importar</h3>
            <p className="mb-4 text-sm text-muted-foreground text-center">
              Suporta arquivos CSV, XLS ou XLSX com dados financeiros
            </p>
            <Button onClick={handleUpload}>
              <FileUp className="mr-2 h-4 w-4" />
              Importar Arquivo
            </Button>
          </div>
        )}

        {(uploadState === "uploading" || uploadState === "processing") && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {uploadState === "uploading" ? (
                  <FileUp className="h-5 w-5 text-primary" />
                ) : (
                  <Clock className="h-5 w-5 text-amber-500 animate-pulse" />
                )}
                <span className="font-medium">
                  {uploadState === "uploading" ? "Enviando arquivo..." : "Processando dados..."}
                </span>
              </div>
              <span className="text-sm text-muted-foreground">{uploadState === "uploading" ? `${progress}%` : ""}</span>
            </div>
            <Progress value={progress} className="h-2" />
            <p className="text-sm text-muted-foreground">
              {uploadState === "uploading"
                ? "Enviando seu arquivo. Não feche esta janela."
                : "Analisando seus dados financeiros. Isso pode levar alguns instantes."}
            </p>
          </div>
        )}

        {uploadState === "complete" && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-emerald-600" />
              <span className="font-medium">Análise concluída com sucesso!</span>
            </div>
            <div className="rounded-lg bg-emerald-50 p-4">
              <h4 className="mb-2 font-medium">Resumo da importação:</h4>
              <ul className="space-y-1 text-sm">
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-600" />
                  <span>12 meses de dados financeiros processados</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-600" />
                  <span>4 novas recomendações geradas</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-600" />
                  <span>Dashboard atualizado com novos dados</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-between">
              <Button variant="outline" onClick={() => setUploadState("idle")}>
                Importar outro arquivo
              </Button>
              <Button>Ver análise completa</Button>
            </div>
          </div>
        )}

        {uploadState === "error" && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-rose-600" />
              <span className="font-medium">Erro ao processar o arquivo</span>
            </div>
            <div className="rounded-lg bg-rose-50 p-4">
              <h4 className="mb-2 font-medium">Detalhes do erro:</h4>
              <p className="text-sm">
                O formato do arquivo não é compatível ou os dados estão corrompidos. Por favor, verifique o arquivo e
                tente novamente.
              </p>
            </div>
            <Button onClick={() => setUploadState("idle")}>Tentar novamente</Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
