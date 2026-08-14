export const SOURCE = "Source: MicroLoan Foundation Annual Report & Financial Statements 2023.";

export const orgWide = {
  womenSupported: 144943,
  activeFemaleEntrepreneurs: 93908,
  loansDisbursedGBP: 17.329, // £M
  loanBookGBP: 5.267, // £M
  averageLoanGBP: 89,
  totalIncomeGBP: 6.141, // £M
  totalExpenditureGBP: 5.622, // £M
  interestIncomeGBP: 4.896, // £M
  voluntaryIncomeGBP: 1.178, // £M
  interestPaidGBP: 1.051, // £M
  loanProvisionsGBP: 0.532, // £M (write-offs / provisions)
  operatingFxLossGBP: 0.247, // £M
};

export type CountryKey = "malawi" | "zambia" | "zimbabwe" | "southAfrica";

export interface CountryStats {
  key: CountryKey;
  name: string;
  slug: string;
  activeClients: number;
  loanBookGBP: number; // £M
  loanBookLabel: string;
  averageLoanGBP: number;
  par30: number; // %
  repaymentRate: number; // %
  oss: number; // %
  portfolioYield: number; // %
  macro: string[];
  currencyRisk: string;
  climateExposure: string;
  digitalAdoption: string;
  keyProblems: string[];
  opportunities: string[];
  narrative: string;
}

export const countries: Record<CountryKey, CountryStats> = {
  malawi: {
    key: "malawi",
    name: "Malawi",
    slug: "malawi",
    activeClients: 37177,
    loanBookGBP: 2.051,
    loanBookLabel: "£2.051M",
    averageLoanGBP: 85,
    par30: 8.8,
    repaymentRate: 96,
    oss: 103,
    portfolioYield: 67,
    macro: ["44% Kwacha devaluation", "28.7% inflation", "Cyclone Freddy disruption"],
    currencyRisk: "Severe — a 44% devaluation of the Kwacha materially eroded local-currency portfolio value against GBP-denominated funding.",
    climateExposure: "High — Cyclone Freddy damaged client businesses and infrastructure, compounding repayment stress in an already agriculture-heavy portfolio.",
    digitalAdoption: "Earlier stage than Zambia; digitisation and agricultural credit scoring are planned rather than deployed at scale.",
    keyProblems: [
      "PAR30 deteriorated to 8.8% as macro and climate shocks compressed household incomes",
      "Management deliberately slowed lending growth to protect portfolio quality",
      "Agricultural and climate vulnerability concentrated risk in rural branches",
    ],
    opportunities: [
      "Planned agricultural credit scoring to price climate and crop risk more precisely",
      "ESG-aligned agriculture loan products for climate-resilient inputs",
      "Digitisation of disbursement and repayment to lower cost-to-serve",
    ],
    narrative:
      "Malawi carried the heaviest macro and climate shock of the 2023 portfolio. Management's response — slowing growth rather than chasing scale — is the clearest evidence in the annual report that MLF prioritised portfolio quality over headline expansion.",
  },
  zambia: {
    key: "zambia",
    name: "Zambia",
    slug: "zambia",
    activeClients: 54526,
    loanBookGBP: 2.957,
    loanBookLabel: "£2.957M",
    averageLoanGBP: 95,
    par30: 7.1,
    repaymentRate: 97,
    oss: 103,
    portfolioYield: 84,
    macro: ["30% active-client growth", "33% local-currency portfolio growth", "41.8% Kwacha depreciation", "13.1% inflation"],
    currencyRisk: "High — 41.8% Kwacha depreciation offset a large share of local-currency portfolio growth once translated to GBP.",
    climateExposure: "Material — a largely agricultural client base remains exposed to rainfall variability and input-price shocks.",
    digitalAdoption: "Most advanced of the four markets: 100% of disbursements moved to mobile money in 2023, alongside a new digital savings initiative.",
    keyProblems: [
      "High staff turnover strained field operations even as the client base scaled",
      "Currency depreciation eroded the GBP value of strong local-currency growth",
      "Weather and agricultural price risk remain a structural exposure",
    ],
    opportunities: [
      "Full mobile-money disbursement is a platform for credit-scoring and digital savings products",
      "Largest client base gives Zambia the clearest path to scale economics",
      "Digital savings initiative can build repayment resilience against future shocks",
    ],
    narrative:
      "Zambia is MLF's largest and most digitally advanced market. Growth in clients and local-currency portfolio was strong, but FX depreciation shows how much of that growth was absorbed before it reached the group's reporting currency — a central tension in the 2023 results.",
  },
  zimbabwe: {
    key: "zimbabwe",
    name: "Zimbabwe",
    slug: "zimbabwe",
    activeClients: 2205,
    loanBookGBP: 0.233891,
    loanBookLabel: "£233,891",
    averageLoanGBP: 150,
    par30: 0,
    repaymentRate: 100,
    oss: 133,
    portfolioYield: 236,
    macro: ["10x active-client growth (234 → 2,205)", "172% inflation", "USD-denominated lending strategy"],
    currencyRisk: "Extreme macro backdrop (172% inflation) managed by lending predominantly in USD rather than local currency.",
    climateExposure: "Present but secondary to hyperinflation as the dominant operating risk in 2023.",
    digitalAdoption: "Constrained by limited cash and banking infrastructure for repayment collection.",
    keyProblems: [
      "172% inflation makes local-currency lending largely unviable",
      "Cash and banking infrastructure limits repayment-collection options",
      "Extreme currency risk requires continuous operational adaptation",
    ],
    opportunities: [
      "USD lending strategy has produced 0% PAR30 and 133% OSS — a template worth studying",
      "Client base grew tenfold, suggesting substantial unmet demand once currency risk is managed",
      "Small base means marginal investment could scale a proven model quickly",
    ],
    narrative:
      "Zimbabwe is the smallest market but the standout performer on every quality metric: 0% PAR30, 100% repayment, 133% OSS. The USD lending strategy insulated the portfolio from hyperinflation.",
  },
  southAfrica: {
    key: "southAfrica",
    name: "South Africa",
    slug: "south-africa",
    activeClients: 0,
    loanBookGBP: 0,
    loanBookLabel: "Not separately disclosed",
    averageLoanGBP: 0,
    par30: 0,
    repaymentRate: 0,
    oss: 0,
    portfolioYield: 0,
    macro: ["Part of MLF's four-country sub-Saharan Africa footprint"],
    currencyRisk: "Not separately disclosed in the 2023 statistics provided for this project.",
    climateExposure: "Not separately disclosed in the 2023 statistics provided for this project.",
    digitalAdoption: "Not separately disclosed in the 2023 statistics provided for this project.",
    keyProblems: ["Detailed 2023 portfolio metrics for South Africa were not included in the figures supplied for this project."],
    opportunities: ["A natural next step is to source or estimate South Africa-specific metrics separately from the disclosed Malawi/Zambia/Zimbabwe data."],
    narrative:
      "MLF operates a South Africa entity as part of its regional footprint, but the country-level 2023 operating metrics supplied for this project cover Malawi, Zambia and Zimbabwe only.",
  },
};

export const countryList = [countries.malawi, countries.zambia, countries.zimbabwe, countries.southAfrica];

export const socialImpact = {
  newClientsBelow250: 79,
  newClientsBelow125: 50,
  foodSecurity: 84,
  assetOwnershipIncrease: 96,
  movingOutOfExtremePoverty: 17,
  improvedQualityOfLife: 98,
  increasedConfidence: 98,
  ableToSave: 70,
  businessProfitIncrease: 377,
};

export const howWeWorkSteps = [
  { title: "Community outreach", detail: "Field officers introduce the programme to rural communities and identify women interested in group membership." },
  { title: "Groups form", detail: "Women self-select into small solidarity groups, sharing accountability for attendance, savings and repayment." },
  { title: "Seven training modules", detail: "Groups complete a structured business-skills curriculum before any capital is disbursed." },
  { title: "First microloan", detail: "A small first loan — averaging £89 group-wide in 2023 — is disbursed against group guarantee." },
  { title: "Business investment", detail: "Clients deploy capital into stock, tools or inputs for an existing or new small business." },
  { title: "Repayment & field support", detail: "Field officers provide ongoing mentoring alongside scheduled group repayment meetings." },
  { title: "Savings", detail: "Clients build a savings habit alongside repayment, creating a buffer against future shocks." },
  { title: "Repeat borrowing & growth", detail: "Successful clients qualify for larger repeat loans as their businesses and track record grow." },
];

export const modelEconomics = {
  summary:
    "MLF's average loan size (£89 in 2023) is small relative to typical microfinance benchmarks, and its delivery model is rural and high-touch. That combination produces a high cost-to-serve per pound lent. Operating self-sufficiency (OSS) above 100% in Malawi (103%) and Zambia (103%), and well above it in Zimbabwe (133%), was achieved through scale, portfolio yield and early-stage digitisation rather than by abandoning small, high-impact loans.",
  levers: [
    "Scale — more clients per branch spreads fixed field costs across a larger portfolio",
    "Staff productivity — clients per field officer is the single biggest driver of cost-to-serve",
    "Digitalisation — mobile-money disbursement (100% in Zambia) cuts cash-handling cost and time",
    "Operating self-sufficiency (OSS) — the ratio of operating income to operating cost",
  ],
};

export const riskCategories = [
  { id: "credit", name: "Credit risk", level: "Elevated", detail: "PAR30 ranged from 0% (Zimbabwe) to 8.8% (Malawi) in 2023. Malawi's deterioration reflects currency, inflation and climate shocks flowing through to household repayment capacity." },
  { id: "climate", name: "Climate risk", level: "High", detail: "With roughly 90% of clients engaged in smallholder farming, weather shocks (notably Cyclone Freddy in Malawi) translate directly into lower harvest and business income." },
  { id: "fx", name: "FX risk", level: "Severe", detail: "Malawi (-44% Kwacha), Zambia (-41.8% Kwacha) and Zimbabwe (172% inflation) each faced significant currency pressure in 2023, contributing to a £247K operating exchange loss group-wide." },
  { id: "liquidity", name: "Liquidity & funding risk", level: "Moderate", detail: "Interest paid on borrowings reached £1.051M in 2023, squeezing the margin between portfolio yield and cost of capital." },
  { id: "operational", name: "Operational risk", level: "Moderate", detail: "High staff turnover in Zambia is the clearest disclosed operational risk." },
  { id: "regulatory", name: "Regulatory risk", level: "Watch", detail: "Operating across four jurisdictions with different microfinance, banking and mobile-money regulatory regimes adds compliance complexity." },
];

export const digitalFinance = {
  reference: "Zambia — 100% mobile-money disbursement (2023 reference point)",
  pillars: [
    { title: "Mobile-money lending", detail: "Loan capital sent directly to a client's mobile-money wallet rather than cash, reducing branch handling and travel time." },
    { title: "Digital disbursement", detail: "Zambia disbursed 100% of loans via mobile money in 2023 — the group's most digitally mature market." },
    { title: "Digital savings", detail: "A digital savings initiative launched in Zambia in 2023, building on the mobile-money rail already used for disbursement." },
    { title: "Repayment tracking", detail: "Digital rails create a repayment history per client that field officers can monitor between group meetings." },
    { title: "Customer financial history", detail: "Digitised transaction history is the foundation for any future credit-scoring model." },
    { title: "Future credit scoring", detail: "Malawi's planned agricultural credit-scoring product depends on this kind of digitised repayment and transaction history." },
  ],
};

export const agricultureClimate = {
  clientShare: 90,
  chain: [
    "Climate shock (drought, cyclone, erratic rainfall)",
    "Lower harvest or business income",
    "Repayment stress at group level",
    "Higher PAR30",
    "Portfolio-quality impact and slower lending growth",
  ],
  solutions: [
    "Agricultural credit scoring — price climate and crop risk into loan terms",
    "Crop-specific loan products — align repayment schedules to harvest cycles",
    "Climate-resilient agriculture inputs — drought-tolerant seed, irrigation support",
    "Savings buffers — build a cushion clients can draw on after a shock",
    "Diversification — encourage non-farm income streams alongside farming",
    "Digital monitoring — early warning of stress via mobile-money transaction patterns",
  ],
};