import { DashboardHeader } from "@/components/dashboard-header"
import { FinancialSummary } from "@/components/financial-summary"
import { CompanyStatus } from "@/components/company-status"
import { CashFlowChart } from "@/components/cash-flow-chart"
import { DataUpload } from "@/components/data-upload"
import { Recommendations } from "@/components/recommendations"
import { SecurityBadge } from "@/components/security-badge"

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <DashboardHeader />
      <div className="flex-1 p-6 space-y-6 overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FinancialSummary />
          <CompanyStatus />
        </div>
        <CashFlowChart />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DataUpload />
          <Recommendations />
        </div>
        <SecurityBadge />
      </div>
    </div>
  )
}
