export interface GoalBenchmark {
  id: "lead_generation" | "app_installs" | "ecommerce_sales";
  label: string;
  metricLabel: string;
  metricUnit: string;
  // Cost per unit range (in INR)
  costPerUnitMin: number;
  costPerUnitMax: number;
  // ROAS range (only applicable for ecommerce)
  roasMin?: number;
  roasMax?: number;
  sourceNote: string;
  isConfirmed: boolean;
}

export const benchmarkRanges: Record<string, GoalBenchmark> = {
  lead_generation: {
    id: "lead_generation",
    label: "Lead Generation",
    metricLabel: "Estimated Qualified Leads",
    metricUnit: "leads",
    // ₹14.65 (RS Water Solutions direct conversion) to ₹142 (₹55 CR Real Estate high-ticket blended CPL)
    costPerUnitMin: 15,
    costPerUnitMax: 142,
    sourceNote: "Based on verified campaigns: ₹14.65 (RS Water) to ₹142 (₹55 CR Real Estate CPL).",
    isConfirmed: true,
  },
  app_installs: {
    id: "app_installs",
    label: "App Installs",
    metricLabel: "Estimated App Installs",
    metricUnit: "installs",
    // TODO(shahal): Confirm actual client CPI benchmarks from CuteKaari / Relax Call ad accounts
    costPerUnitMin: 8,
    costPerUnitMax: 35,
    sourceNote: "Preliminary benchmark range. (TODO: Shahal to confirm actual client CPI numbers).",
    isConfirmed: false,
  },
  ecommerce_sales: {
    id: "ecommerce_sales",
    label: "E-commerce Sales",
    metricLabel: "Estimated ROAS & Revenue",
    metricUnit: "ROAS multiplier",
    costPerUnitMin: 0,
    costPerUnitMax: 0,
    // TODO(shahal): Confirm actual e-commerce ROAS benchmark range from client accounts
    roasMin: 2.8,
    roasMax: 5.2,
    sourceNote: "Preliminary benchmark range: 2.8x - 5.2x ROAS. (TODO: Shahal to confirm actual e-com store metrics).",
    isConfirmed: false,
  },
};
