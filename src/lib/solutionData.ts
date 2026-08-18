// ============================================================================
// SOLUTION DATA NOTICE
// This file holds the GMCC team's proposed funding strategy ("Anchor &
// Amplify") and its supporting case studies. Unlike lib/data.ts, this is
// analysis and recommendation, not MLF-published fact. The 10-year funding
// model is an illustrative GMCC estimation, explicitly labelled as such
// everywhere it is displayed, and is not an MLF-published projection.
// ============================================================================

export const solutionMeta = {
  name: "Anchor & Amplify",
  tagline: "A measured 10-year funding strategy to reach $30M sustainably",
  headlineThesis:
    "Rather than aggressively scaling high-cost individual fundraising, MLF should build a diversified funding base over 10 years. Institutional and foundation partnerships anchor the strategy, corporate partnerships broaden the base, and digital fundraising gradually adds recurring donors and qualified prospects. The objective is a stable $30M funding pool by Year 10, not a short-term fundraising spike.",
};

export interface Horizon {
  id: string;
  number: number;
  name: string;
  years: string;
  cumulativeTarget: string;
  primaryEngine: string;
  fundraisingCost: string;
}

export const horizons: Horizon[] = [
  {
    id: "build-anchor",
    number: 1,
    name: "Build & Anchor",
    years: "Years 0–3",
    cumulativeTarget: "$7.0M cumulative",
    primaryEngine:
      "Build 2–3 anchor foundation and institutional relationships while strengthening the fundraising function.",
    fundraisingCost:
      "Initially higher, then improves as multi-year relationships reduce acquisition cost.",
  },
  {
    id: "diversify-scale",
    number: 2,
    name: "Diversify & Scale",
    years: "Years 4–7",
    cumulativeTarget: "$19.6M cumulative",
    primaryEngine:
      "Expand into aligned foundations, corporate partnerships, major philanthropy and new donor geographies.",
    fundraisingCost:
      "Target ~15–20% as institutional and corporate income becomes more predictable.",
  },
  {
    id: "sustain-amplify",
    number: 3,
    name: "Sustain & Amplify",
    years: "Years 7–10",
    cumulativeTarget: "$30.0M cumulative",
    primaryEngine:
      "Renew anchor partnerships, deepen corporate relationships and scale low-cost digital recurring giving.",
    fundraisingCost:
      "Target ~10–15% through renewals, recurring giving and a diversified funding base.",
  },
];

export interface Pillar {
  id: string;
  number: number;
  title: string;
  summary: string;
  points: string[];
  whatToStop: string;
}

export const pillars: Pillar[] = [
  {
    id: "expand-diversify",
    number: 1,
    title: "Expand and diversify the funding base",
    summary: "Lead with institutional capital, not retail scale.",
    points: [
      "MLF's own 2024 report names the fix it has not yet funded: a philanthropic fund modelled on what unlocked scale for Asian and Latin American MFIs but has not been extended to African ones. Treat the $30M target as the capital that finally builds that fund.",
      "A handful of $2 to 5M multi-year commitments from DFI-adjacent funders, in the vein of existing relationships like Grameen Credit Agricole Foundation and SIDI, both already on MLF's donor list, gets you to roughly a third of the target at a fundraising cost per dollar far below the individuals and events channel.",
      "Fix the geographic concentration risk. 84% of income currently comes through UK and Europe. The same year regional drought hit both the loan portfolio (Zimbabwe and Zambia PAR30) and the funding base, which suggests correlated downside if UK giving softens simultaneously. Target: shift to a 65/20/15 UK-Europe/US/Australia split by Year 4.",
      "Treat corporates as the most underdeveloped lever. Corporate giving is currently roughly 2% of the mix (23,523 pounds of 1.14M), despite FTSE 100 healthcare and basic-materials companies giving at 2 to 4x the average ratio-to-profit in the case's own appendix. A targeted ESG or CSR push in 2 to 3 high-ratio sectors is a realistic path to 8 to 10% of the mix without competing on cost with the institutional pipeline.",
    ],
    whatToStop:
      "Stop treating growth of the individual donor base as the primary lever in the pitch to judges. It is a legitimate secondary channel for Horizon 3, but leading with it fails the case's own cost constraint: this channel's cost-to-income ratio worsened in the most recent year available, cost up 7%, income down 3%, the opposite of the direction the brief requires.",
  },
  {
    id: "cost-ceiling",
    number: 2,
    title: "Hit the cost ceiling by re-sequencing, not by cutting",
    summary:
      "The 30%-falling-to-10-15% constraint is a ratio, so the fix is which dollars you raise, not how little you spend.",
    points: [
      "Institutional grants and legacy gifts have near-zero marginal cost once the relationship exists. Retail acquisition does not.",
      "Years 0 to 3: build a small, senior institutional-partnerships function focused on securing anchor commitments while keeping fundraising cost within the case ceiling.",
      "Years 4 to 7: as institutional income compounds, the fundraising ratio should fall even as absolute investment rises modestly.",
      "Years 7 to 10: reinvest the ratio headroom into a lean digital recurring-giving program, adding donor breadth without breaking the fundraising-cost ceiling.",
    ],
    whatToStop:
      "Stop building a large events and individual-giving acquisition team early. It is the most expensive way to hit a dollar target under this cost structure, and it is the channel the underlying financials show is already underperforming its own historical efficiency.",
  },
  {
    id: "reach",
    number: 3,
    title: "Reach: decouple funding raised from capital deployed to clients",
    summary:
      "$30M in philanthropic funding is not the same pool of money as the loan capital required to serve 1 million women.",
    points: [
      "Scaling current reach, roughly 160,000 to 190,000 depending on which of the case's own figures you anchor to, to 1,000,000 requires an estimated $35 to 60M of loan-book capital at current capital-per-client intensity, a separate, larger number than the fundraising target.",
      "Position the $30M as catalytic or first-loss capital, not as the loan book itself. Philanthropic capital's job is to de-risk and unlock a multiple of blended or DFI debt at reasonable cost, the model MLF already partially uses with Grameen Credit Agricole and Oikocredit-type facilities.",
      "A realistic structure: $1 of philanthropic capital unlocking $2 to 3 of concessional blended debt gets the loan-capital gap into reach without requiring the fundraising target itself to be 2 to 3x larger.",
    ],
    whatToStop:
      "Stop presenting '$30M raised' as equal to 'reach target funded.' Presenting the two as directly linked either overstates what $30M achieves or understates the real capital requirement. A credible board deck needs to show the bridge, not skip it.",
  },
  {
    id: "risk-gates",
    number: 4,
    title: "Mitigate rapid-expansion risk: sequence by portfolio health, not ambition",
    summary:
      "Zimbabwe's loan book grew roughly 26x in one year, had its first full repayment cycle, and PAR30 went from 0% to 27.7%.",
    points: [
      "Portfolio quality gates: no country or branch receives its next capital tranche until PAR30 stays under a defined threshold, for example 5%, for two consecutive reporting periods. Capital follows proven repayment discipline, not the reverse.",
      "Correlated-risk buffer: Malawi, Zambia, Zimbabwe and now South Africa sit in the same climate and currency risk bloc. The same El Nino cycle hit all three in 2024. Ringfence roughly 5% of raised capital as a weather and macro contingency reserve rather than assuming four-country diversification provides real protection inside one climate system.",
      "New-market discipline: apply the Zimbabwe lesson directly to South Africa. Cap first-24-month growth rate regardless of donor appetite to fund faster expansion, since the case data shows unseasoned rapid growth is the leading indicator of the next crisis, not macro shocks alone.",
    ],
    whatToStop:
      "Stop deploying capital on a growth curve alone. Rapid capital deployment into an unseasoned book is the demonstrated failure mode in MLF's own 2023 to 2024 data.",
  },
];

// ----------------------------------------------------------------------------
// 10-year funding estimation model
// Illustrative GMCC projection, not an MLF-published figure.
// Figures in $M, new income raised per year by channel.
// ----------------------------------------------------------------------------

export interface FundingYear {
  year: string;
  foundationGrant: number;
  corporate: number;
  digital: number;
  cumulative: number;
  horizon: string;
}

export const tenYearFundingModel: FundingYear[] = [
  {
    year: "Year 0",
    foundationGrant: 0,
    corporate: 0,
    digital: 0,
    cumulative: 0,
    horizon: "Build & Anchor",
  },
  {
    year: "Year 1",
    foundationGrant: 1.3,
    corporate: 0.5,
    digital: 0.2,
    cumulative: 2.0,
    horizon: "Build & Anchor",
  },
  {
    year: "Year 2",
    foundationGrant: 1.4,
    corporate: 0.7,
    digital: 0.3,
    cumulative: 4.4,
    horizon: "Build & Anchor",
  },
  {
    year: "Year 3",
    foundationGrant: 1.4,
    corporate: 0.9,
    digital: 0.3,
    cumulative: 7.0,
    horizon: "Build & Anchor",
  },
  {
    year: "Year 4",
    foundationGrant: 1.5,
    corporate: 1.1,
    digital: 0.4,
    cumulative: 10.0,
    horizon: "Diversify & Scale",
  },
  {
    year: "Year 5",
    foundationGrant: 1.6,
    corporate: 1.1,
    digital: 0.4,
    cumulative: 13.1,
    horizon: "Diversify & Scale",
  },
  {
    year: "Year 6",
    foundationGrant: 1.7,
    corporate: 1.1,
    digital: 0.4,
    cumulative: 16.3,
    horizon: "Diversify & Scale",
  },
  {
    year: "Year 7",
    foundationGrant: 1.7,
    corporate: 1.2,
    digital: 0.4,
    cumulative: 19.6,
    horizon: "Diversify & Scale",
  },
  {
    year: "Year 8",
    foundationGrant: 1.7,
    corporate: 1.2,
    digital: 0.5,
    cumulative: 23.0,
    horizon: "Sustain & Amplify",
  },
  {
    year: "Year 9",
    foundationGrant: 1.7,
    corporate: 1.3,
    digital: 0.5,
    cumulative: 26.5,
    horizon: "Sustain & Amplify",
  },
  {
    year: "Year 10",
    foundationGrant: 1.6,
    corporate: 1.4,
    digital: 0.5,
    cumulative: 30.0,
    horizon: "Sustain & Amplify",
  },
];

export const fundingModelNote =
  "Illustrative 10-year GMCC estimation model, not an MLF-published projection. The model uses a measured funding ramp rather than assuming rapid fundraising growth. Foundation and institutional funding anchor the first phase, corporate partnerships expand during the middle phase, and digital recurring giving gradually becomes a supporting channel.";

export const fundingModelSummary = {
  totalYear10: 30.0,
  digitalShareYear10: 0.5 / 3.5,
  corporateShareYear10: 1.4 / 3.5,
  foundationShareYear10: 1.6 / 3.5,
};

// ----------------------------------------------------------------------------
// Supporting case studies
// ----------------------------------------------------------------------------

export interface CaseStudy {
  id: string;
  pillar: string;
  name: string;
  detail: string;
  url: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "finca-mastercard",
    pillar: "Pillar 1: Anchor funding",
    name: "FINCA Africa and Mastercard Foundation, 2013",
    detail:
      "The closest direct analog available. A single $12.7M, 4.5-year institutional partnership to scale financial inclusion specifically in Malawi and Zambia, two of MLF's own three core markets, same target demographic of low-income, unbanked, women-focused clients. The strongest single precedent to cite: it proves a large single-donor institutional anchor can fund exactly this kind of expansion in exactly this geography.",
    url: "https://finca.org/mastercard-partnership",
  },
  {
    id: "mastercard-brac",
    pillar: "Pillar 1: Anchor funding",
    name: "Mastercard Foundation and BRAC, Accelerating Impact for Young Women",
    detail:
      "Proof that a single foundation partnership can scale to millions of women. By 2033, the programme aims to reach 2 million adolescent girls and young women across seven African countries, having already engaged over 382,000 through more than 18,000 microfinance groups since 2021. Directly supports MLF's own 1 million by 2035 reach target as achievable via concentrated institutional funding rather than broad retail fundraising.",
    url: "https://www.bracinternational.org/news/mastercard-foundation-and-brac-expand-landmark-partnership-to-unlock-pathways-to-dignified-and-fulfilling-work-for-2-million-young-women-across-africa/",
  },
  {
    id: "uncdf-microlead",
    pillar: "Pillar 1: Anchor funding",
    name: "UNCDF MicroLead, Gates Foundation to Mastercard Foundation",
    detail:
      "A precedent for a competitively-allocated grant and loan facility funding multiple MFIs at once. The $23.5M, six-year project aimed to increase access to microfinance, particularly savings services, for 450,000 low-income people across sub-Saharan Africa. A useful governance model for how MLF's proposed $30M philanthropic fund could be structured.",
    url: "https://www.uncdf.org/article/1006/the-mastercard-foundation-and-the-un-capital-development-fund-uncdf-launch-expansion-of-migration",
  },
  {
    id: "ubs-optimus",
    pillar: "Pillar 1 and 3: Catalytic capital",
    name: "UBS Optimus Foundation, SDG Outcomes Fund",
    detail:
      "A textbook first-loss structure. By taking a philanthropic first-loss tranche position, the foundation absorbs early-stage risk, making the fund more attractive to commercial investors and unlocking additional private-sector capital, directly supporting the $1 philanthropic to $2 to 3 blended debt bridge in Pillar 3.",
    url: "https://www.cambridge.org/core/books/catalytic-capital/unlocking-catalytic-capital/9ECE9A33B636D5307F2E0627B2A67CEF",
  },
  {
    id: "danone-livelihoods",
    pillar: "Pillar 1 and 3: Catalytic capital",
    name: "Danone Fund for Nature and Livelihoods Fund, via Grameen Foundation",
    detail:
      "A philanthropic-plus-blended structure specifically financing agricultural MFIs, structurally close to MLF's smallholder client base. Launched in 2012, it blends short and long-term loans to producer organisations, SMEs and agriculture-focused microfinance institutions, with the philanthropic partner providing technical expertise and social performance measurement.",
    url: "https://www.cambridge.org/core/books/catalytic-capital/mobilizing-catalytic-finance/CF297BA88D6B6C04B3867686587C3AC4",
  },
  {
    id: "charity-water",
    pillar: "Pillar 2: Digital recurring giving",
    name: "charity: water, The Spring monthly giving program",
    detail:
      "The best-documented proof that shifting from one-off event and individual fundraising to a digital recurring program lowers cost per dollar and builds predictable revenue. The program now generates $19.8M in annual recurring revenue, solving a problem nearly identical to MLF's, needing to find up to 85% new donors each year without a recurring base. Supports moving MLF toward a lower-cost recurring model, positioned as a Horizon 3 addition, not the primary engine.",
    url: "https://www.nonprofitpro.com/post/the-success-of-charity-waters-monthly-donor-community/",
  },
  {
    id: "andhra-pradesh",
    pillar: "Pillar 4: Rapid-expansion risk",
    name: "Andhra Pradesh microfinance crisis, India, 2010",
    detail:
      "The sector's canonical cautionary tale. Non-performing assets among Andhra Pradesh MFIs reached over 96% after rapid expansion without adequate credit assessment: loan officers under strict targets issued multiple loans to the same borrower without evaluating repayment capacity, pushing households into unsustainable debt. The root cause maps almost exactly onto the Zimbabwe pattern in MLF's own 2023 to 2024 data, the strongest evidence available for hard PAR30 gates before releasing the next capital tranche.",
    url: "https://www.researchgate.net/publication/262126331_Microfinance_Institutions_in_Andhra_Pradesh_Crisis_and_Diagnosis",
  },
];

export const solutionClosingGuidance =
  "Lead with FINCA and Mastercard Foundation: it is not just thematically relevant, it is the same two countries, which makes it more persuasive than a generic precedent. Use charity: water to defend the retail-fundraising-is-Horizon-3 sequencing decision. Use Andhra Pradesh as the anchor case in the risk-mitigation section: it is the one case a judge is likely to already know, so citing it correctly and tying it back to MLF's own Zimbabwe PAR30 data signals sector fluency rather than optimism.";