import { Card, CardContent } from "@/components/ui/card"
import { Lock, Shield } from "lucide-react"

export function SecurityBadge() {
  return (
    <Card className="border-none bg-slate-50">
      <CardContent className="p-4">
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Lock className="h-4 w-4" />
          <span>Seus dados são protegidos com criptografia de ponta a ponta</span>
          <Shield className="h-4 w-4" />
          <span>Em conformidade com LGPD</span>
        </div>
      </CardContent>
    </Card>
  )
}
