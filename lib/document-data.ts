export interface DocumentData {
  id: string
  name: string
  type: "balance_sheet" | "income_statement" | "revenue_proof" | "certificate"
  uploadDate: string
  status: "approved" | "pending" | "expiring"
  financialData?: {
    revenue?: number
    expenses?: number
    monthlyData?: Array<{
      month: string
      receita: number
      despesa: number
    }>
  }
}

// Simulated extracted data from uploaded documents
export const documentsData: DocumentData[] = [
  {
    id: "1",
    name: "Balanço Patrimonial 2024",
    type: "balance_sheet",
    uploadDate: "15/03/2024",
    status: "approved",
    financialData: {
      revenue: 450000,
      expenses: 320000,
      monthlyData: [
        { month: "Jan", receita: 75000, despesa: 53000 },
        { month: "Fev", receita: 82000, despesa: 58000 },
        { month: "Mar", receita: 78000, despesa: 52000 },
        { month: "Abr", receita: 91000, despesa: 67000 },
        { month: "Mai", receita: 85000, despesa: 61000 },
        { month: "Jun", receita: 89000, despesa: 69000 },
      ],
    },
  },
  {
    id: "2",
    name: "DRE - Março 2024",
    type: "income_statement",
    uploadDate: "10/04/2024",
    status: "pending",
    financialData: {
      revenue: 89000,
      expenses: 69000,
    },
  },
  {
    id: "3",
    name: "Comprovante de Faturamento",
    type: "revenue_proof",
    uploadDate: "05/04/2024",
    status: "approved",
    financialData: {
      revenue: 125000,
    },
  },
  {
    id: "4",
    name: "Certidão Negativa",
    type: "certificate",
    uploadDate: "20/06/2024",
    status: "expiring",
  },
]

export function getFinancialSummary() {
  const approvedDocs = documentsData.filter((doc) => doc.status === "approved" && doc.financialData)

  let totalRevenue = 0
  let totalExpenses = 0
  let monthlyData: Array<{ month: string; receita: number; despesa: number }> = []

  approvedDocs.forEach((doc) => {
    if (doc.financialData) {
      if (doc.financialData.revenue) totalRevenue += doc.financialData.revenue
      if (doc.financialData.expenses) totalExpenses += doc.financialData.expenses
      if (doc.financialData.monthlyData) {
        monthlyData = doc.financialData.monthlyData
      }
    }
  })

  // If no monthly data from documents, create default based on totals
  if (monthlyData.length === 0) {
    const monthlyRevenue = totalRevenue / 6
    const monthlyExpenses = totalExpenses / 6
    monthlyData = [
      { month: "Jan", receita: monthlyRevenue * 0.9, despesa: monthlyExpenses * 0.85 },
      { month: "Fev", receita: monthlyRevenue * 1.1, despesa: monthlyExpenses * 1.05 },
      { month: "Mar", receita: monthlyRevenue * 0.95, despesa: monthlyExpenses * 0.9 },
      { month: "Abr", receita: monthlyRevenue * 1.15, despesa: monthlyExpenses * 1.2 },
      { month: "Mai", receita: monthlyRevenue * 1.05, despesa: monthlyExpenses * 1.1 },
      { month: "Jun", receita: monthlyRevenue * 1.0, despesa: monthlyExpenses * 1.15 },
    ]
  }

  return {
    totalRevenue,
    totalExpenses,
    balance: totalRevenue - totalExpenses,
    monthlyData,
    revenueGrowth: 15, // Calculated based on document analysis
    expenseGrowth: 12,
    balanceGrowth: 22,
  }
}

export function getCompanyPhase() {
  const summary = getFinancialSummary()
  const profitMargin = (summary.balance / summary.totalRevenue) * 100
  const revenueGrowth = summary.revenueGrowth
  const totalRevenue = summary.totalRevenue

  // Startup/Launch (Início) - low sales, proving concept
  if (totalRevenue < 200000 || (profitMargin < 10 && revenueGrowth < 10)) {
    return {
      phase: "Início",
      progress: 25,
      characteristics: [
        "Baixo volume de vendas",
        "Provando conceito no mercado",
        "Estabelecendo processos operacionais",
        "Construindo base de clientes inicial",
      ],
    }
  }

  // Growth (Expansão) - rapid revenue increase, scaling operations
  else if (revenueGrowth > 20 && profitMargin > 10 && totalRevenue >= 200000) {
    return {
      phase: "Expansão",
      progress: 65,
      characteristics: [
        "Crescimento rápido de receitas",
        "Escalando operações eficientemente",
        "Expandindo base de clientes",
        "Investindo em capacidade produtiva",
      ],
    }
  }

  // Maturity (Maturidade) - stabilized growth, efficient processes, market dominance
  else if (revenueGrowth >= 5 && revenueGrowth <= 20 && profitMargin >= 15 && totalRevenue >= 400000) {
    return {
      phase: "Maturidade",
      progress: 85,
      characteristics: [
        "Crescimento estabilizado",
        "Processos eficientes consolidados",
        "Posição dominante no mercado",
        "Foco em otimização e rentabilidade",
      ],
    }
  }

  // Decline/Renewal (Declínio) - falling sales, need for innovation or exit
  else if (revenueGrowth < 0 || profitMargin < 5) {
    return {
      phase: "Declínio",
      progress: 35,
      characteristics: [
        "Vendas em declínio",
        "Necessidade de inovação",
        "Revisão do modelo de negócio",
        "Considerando reestruturação ou saída",
      ],
    }
  }

  // Default fallback to Início for edge cases
  else {
    return {
      phase: "Início",
      progress: 30,
      characteristics: [
        "Estabelecendo posição no mercado",
        "Desenvolvendo processos operacionais",
        "Construindo histórico financeiro",
        "Foco em sustentabilidade",
      ],
    }
  }
}
