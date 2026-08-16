export const SOURCE = "Source: MicroLoan Foundation Annual Report & Financial Statements 2023.";

export const dataCurrencyNote =
  "All figures on this site are from MicroLoan Foundation's 2023 Annual Report unless explicitly marked 2024. More recent 2024 results are available in MLF's 2024 Annual Report and are only reflected here on the pages where the year-on-year change is most material (Zimbabwe, Financials).";

export const orgWide = {
  womenSupported: 144943,
  activeFemaleEntrepreneurs: 93908,
  loansDisbursedGBP: 17.329,
  loanBookGBP: 5.267,
  averageLoanGBP: 89,
  totalIncomeGBP: 6.141,
  totalExpenditureGBP: 5.622,
  interestIncomeGBP: 4.896,
  voluntaryIncomeGBP: 1.178,
  interestPaidGBP: 1.051,
  loanProvisionsGBP: 0.532,
  operatingFxLossGBP: 0.247,
};

export type CountryKey = "malawi" | "zambia" | "zimbabwe" | "southAfrica";

export interface FollowUpYear {
  year: string;
  activeClients: number;
  loanBookLabel: string;
  par30: number;
  oss: number;
  note: string;
}

export interface CountryStats {
  key: CountryKey;
  name: string;
  slug: string;
  activeClients: number;
  loanBookGBP: number;
  loanBookLabel: string;
  averageLoanGBP: number;
  par30: number;
  repaymentRate: number;
  oss: number;
  portfolioYield: number;
  macro: string[];
  currencyRisk: string;
  climateExposure: string;
  digitalAdoption: string;
  keyProblems: string[];
  opportunities: string[];
  narrative: string;
  followUp?: FollowUpYear;
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
    macro: [
      "10x active-client growth in 2023 (234 → 2,205) — a rate of growth that outpaced the institution's ability to season and monitor the resulting book",
      "172% inflation",
      "USD-denominated lending strategy",
    ],
    currencyRisk: "Extreme macro backdrop (172% inflation) managed by lending predominantly in USD rather than local currency. USD lending solved the currency problem; it did not, on its own, solve credit risk — see the 2024 follow-up below.",
    climateExposure: "Present but secondary to hyperinflation and book-seasoning risk as the dominant operating factors in 2023.",
    digitalAdoption: "Constrained by limited cash and banking infrastructure for repayment collection.",
    keyProblems: [
      "PAR30 is highly sensitive to loan-book age; rapid growth in 2022–23 masked underwriting risk that surfaced once the book matured in 2024",
      "172% inflation makes local-currency lending largely unviable",
      "Cash and banking infrastructure limits repayment-collection options",
    ],
    opportunities: [
      "USD lending durably solved Zimbabwe's currency problem; credit risk management has not yet been proven at scale — 2023's 0% PAR30 was a function of book age, not underwriting quality",
      "Any further growth should be gated to portfolio performance (for example, PAR30 held under a defined threshold across two consecutive periods) rather than scaled on the strength of a single low-delinquency year",
      "The 2023→2024 reversal is itself a useful precedent for how fast an unseasoned, fast-growing book can deteriorate — directly relevant to sequencing any new market",
    ],
    narrative:
      "Zimbabwe is the smallest and most volatile market. In 2023 it posted 0% PAR30 and 133% OSS on a loan book that had just grown roughly tenfold in a single year — but this reflects an unseasoned portfolio, not proven quality. In 2024, once the book went through its first full repayment cycle, PAR30 rose to 27.7% and OSS fell to 79%. USD lending solved the currency problem; it did not solve credit risk.",
    followUp: {
      year: "2024",
      activeClients: 2350,
      loanBookLabel: "£151,733 (converted)",
      par30: 27.7,
      oss: 79,
      note: "2024 figures are from MLF's 2024 Annual Report, shown here because the reversal from 2023 is directly material to how Zimbabwe's 2023 metrics should be read.",
    },
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
    opportunities: [
      "Zimbabwe's 2023→2024 reversal is a useful sequencing precedent: any new-market launch, including South Africa, should build in a seasoning period before headline metrics are treated as proof of model quality.",
    ],
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
    "MLF's average loan size (£89 in 2023) is small relative to typical microfinance benchmarks, and its delivery model is rural and high-touch. That combination produces a high cost-to-serve per pound lent. Operating self-sufficiency (OSS) above 100% in Malawi (103%) and Zambia (103%) was achieved through scale, portfolio yield and early-stage digitisation. Zimbabwe's 2023 OSS of 133% looked stronger still, but fell to 79% in 2024 as its loan book matured — a reminder that OSS read from a single, unseasoned year can overstate durable sustainability.",
  levers: [
    "Scale — more clients per branch spreads fixed field costs across a larger portfolio",
    "Staff productivity — clients per field officer is the single biggest driver of cost-to-serve",
    "Digitalisation — mobile-money disbursement (100% in Zambia) cuts cash-handling cost and time",
    "Operating self-sufficiency (OSS) — the ratio of operating income to operating cost, best read across multiple years rather than a single snapshot",
  ],
};

export const riskCategories = [
  {
    id: "credit",
    name: "Credit risk",
    level: "Elevated",
    detail:
      "PAR30 ranged from 0% (Zimbabwe) to 8.8% (Malawi) in 2023. Zimbabwe's 0% reflects a loan book too young to have a meaningful arrears history, not superior credit quality — its PAR30 rose to 27.7% in 2024 once the book seasoned. Excluding Zimbabwe, 2023 PAR30 ranged from 7.1% (Zambia) to 8.8% (Malawi).",
  },
  {
    id: "climate",
    name: "Climate risk",
    level: "High",
    detail: "With roughly 90% of clients engaged in smallholder farming, weather shocks (notably Cyclone Freddy in Malawi) translate directly into lower harvest and business income.",
  },
  {
    id: "fx",
    name: "FX risk",
    level: "Severe",
    detail: "Malawi (-44% Kwacha), Zambia (-41.8% Kwacha) and Zimbabwe (172% inflation) each faced significant currency pressure in 2023, contributing to a £247K operating exchange loss group-wide.",
  },
  {
    id: "liquidity",
    name: "Liquidity & funding risk",
    level: "Elevated",
    detail:
      "Interest paid on borrowings reached £1.051M in 2023 — 61% higher than 2022 — and equalled 89% of voluntary income raised that year. This is a structural, growing cost rather than a one-off, driven by debt-funded loan book expansion. Rated Elevated to align with its trajectory relative to Credit and FX risk.",
  },
  {
    id: "operational",
    name: "Operational risk",
    level: "Moderate",
    detail: "High staff turnover in Zambia is the clearest disclosed operational risk — field officer continuity is closely tied to group cohesion and repayment discipline.",
  },
  {
    id: "regulatory",
    name: "Regulatory risk",
    level: "Watch",
    detail: "Operating across four jurisdictions with different microfinance, banking and mobile-money regulatory regimes adds compliance complexity.",
  },
];

export const digitalFinance = {
  reference: "Zambia — 100% mobile-money disbursement (2023 reference point)",
  pillars: [
    { title: "Mobile-money lending", detail: "Loan capital sent directly to a client's mobile-money wallet rather than cash, reducing branch handling and travel time." },
    { title: "Digital disbursement", detail: "Zambia disbursed 100% of loans via mobile money in 2023 — the group's most digitally mature market." },
    { title: "Digital savings", detail: "A digital savings initiative launched in Zambia in 2023, building on the mobile-money rail already used for disbursement." },
    { title: "Repayment tracking", detail: "Digital rails create a repayment history per client that field officers can monitor between group meetings." },
    { title: "Customer financial history", detail: "Digitised transaction history is the foundation for any future credit-scoring model." },
    { title: "Future credit scoring", detail: "Malawi's planned agricultural credit-scoring product depends on this kind of digitised repayment and transaction history — and, per Zimbabwe's 2024 results, on data that spans more than one book cycle." },
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

export const financialsDetail = {
  incomeExpenditure: {
    columns: ["", "2023", "2022"],
    rows: [
      ["Total income", "£6,140,987", "£5,327,658"],
      ["Total expenditure", "£5,621,792", "£4,763,323"],
      ["Net income (pre exchange/revaluation)", "£519,195", "£564,335"],
    ],
  },
  loanBookByCountry: {
    columns: ["Malawi", "Zambia", "Zimbabwe"],
    rows: [["£2,051,243", "£2,956,743", "£233,891"]],
  },
  par30ByCountry: {
    columns: ["Malawi", "Zambia", "Zimbabwe*"],
    rows: [["8.8%", "7.1%", "0%"]],
    footnote: "*Zimbabwe's 0% reflects an unseasoned 2023 loan book, not superior credit quality — see Zimbabwe country page and Risk Management.",
  },
  ossByCountry: {
    columns: ["Malawi", "Zambia", "Zimbabwe*"],
    rows: [["103%", "103%", "133%"]],
    footnote: "*Zimbabwe's OSS fell to 79% in 2024 once its loan book matured — see Zimbabwe country page.",
  },
};

export const partnersDetail = {
  efficiencyRatio: [
    { year: "2020", ratio: 3.3 },
    { year: "2021", ratio: 4.0 },
    { year: "2022", ratio: 2.9 },
    { year: "2023", ratio: 3.4 },
  ],
  efficiencyNote:
    "Fundraising efficiency ratio: income raised divided by the cost of raising it. As a share of voluntary income (cost ÷ income), the ratio has held in a 25–34% band for four consecutive years, above typical sector best-practice targets of 10–15%.",
  channelMix: [
    { channel: "Trusts and institutions", amount: 623645, share: 53 },
    { channel: "Individuals and events", amount: 490155, share: 42 },
    { channel: "Donated services and facilities", amount: 55643, share: 5 },
    { channel: "Corporates", amount: 9011, share: 1 },
  ],
  channelMixTotal: 1178454,
  volatility: [
    { year: "2020", income: 963432, change: null },
    { year: "2021", income: 1100124, change: 14 },
    { year: "2022", income: 946085, change: -14 },
    { year: "2023", income: 1178454, change: 25 },
  ],
  volatilityNote:
    "Voluntary income has swung in both directions in nearly every year shown — this channel has not shown a stable growth trend over the period reported.",
  topDonors2023: [
    "WildHearts Group and Foundation",
    "Whole Planet Foundation",
    "The Paul Foundation",
    "The Allan & Nesta Ferguson Charitable Settlement",
    "Rita and David Slowe Charitable Trust",
    "The MacDaibhidh Charitable Trust",
  ],
  technicalAssistancePartners: [
    "Swiss Capacity Building Fund",
    "GIZ",
    "Grameen Crédit Agricole",
    "Social Performance Task Force",
  ],
};