import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { StatCard, SourceNote, Card } from "@/components/ui/Card";
import { Reveal } from "@/components/site/Reveal";
import { ChartCard } from "@/components/charts/ChartShell";
import { DataTable } from "@/components/charts/DataTable";
import { GroupedBarChart, SimplePieChart, SimpleBarChart } from "@/components/charts/Charts";
import { orgWide, countryList, financialsDetail } from "@/lib/data";

export default function FinancialsPage() {
  const incomeExpenditure = [
    { year: "2023", income: orgWide.totalIncomeGBP, expenditure: orgWide.totalExpenditureGBP },
  ];
  const incomeComposition = [
    { name: "Interest income", value: orgWide.interestIncomeGBP },
    { name: "Voluntary income", value: orgWide.voluntaryIncomeGBP },
  ];
  const countryLoanBook = countryList
    .filter((c) => c.activeClients > 0)
    .map((c) => ({ country: c.name, loanBook: c.loanBookGBP }));
  const countryAvgLoan = countryList
    .filter((c) => c.activeClients > 0)
    .map((c) => ({ country: c.name, avgLoan: c.averageLoanGBP }));
  const par30ByCountry = countryList
    .filter((c) => c.activeClients > 0)
    .map((c) => ({ country: c.name, par30: c.par30 }));
  const ossByCountry = countryList
    .filter((c) => c.activeClients > 0)
    .map((c) => ({ country: c.name, oss: c.oss }));

  return (
    <>
      <Section tone="baobab">
        <Reveal>
          <Eyebrow light>Financials</Eyebrow>
          <h1 className="mt-3 max-w-3xl text-balance font-display text-4xl font-medium text-sand md:text-5xl">
            The 2023 financial dashboard
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-sand/80">
            The GMCC insight: MLF's 2023 story is not simply growth versus decline. Operational
            sustainability improved while FX depreciation, inflation, portfolio deterioration and
            higher funding costs created significant financial pressure.
          </p>
        </Reveal>
      </Section>

      <Section tone="white">
        <div className="grid gap-6 md:grid-cols-4">
          <StatCard value={`£${orgWide.loansDisbursedGBP}M`} label="Loans disbursed" />
          <StatCard value={`£${orgWide.loanBookGBP}M`} label="Loan book" tone="clay" />
          <StatCard value={`£${orgWide.interestIncomeGBP}M`} label="Interest income" tone="gold" />
          <StatCard value={`£${orgWide.voluntaryIncomeGBP}M`} label="Voluntary income" />
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <ChartCard
            title="Income vs expenditure, 2023"
            note="£M, group total"
            table={<DataTable columns={financialsDetail.incomeExpenditure.columns} rows={financialsDetail.incomeExpenditure.rows} />}
          >
            <GroupedBarChart
              data={incomeExpenditure}
              xKey="year"
              bars={[
                { key: "income", color: "#1f4b3f", label: "Total income" },
                { key: "expenditure", color: "#c1622d", label: "Total expenditure" },
              ]}
            />
          </ChartCard>
          <ChartCard title="Income composition, 2023" note="Interest vs voluntary income, £M">
            <SimplePieChart data={incomeComposition} />
          </ChartCard>
        </div>
      </Section>

      <Section tone="sandDeep">
        <SectionHeading eyebrow="Cost of funding" title="Borrowing cost and provisions" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <StatCard value={`£${orgWide.interestPaidGBP}M`} label="Interest paid on borrowings" />
          <StatCard value={`£${orgWide.loanProvisionsGBP}M`} label="Loan provisions / write-offs" tone="clay" />
          <StatCard value={`£${orgWide.operatingFxLossGBP}M`} label="Operating exchange losses" tone="gold" />
        </div>
        <Reveal>
          <Card className="mt-8 max-w-3xl">
            <p className="text-sm leading-relaxed text-ink/75">
              Rising interest paid on borrowings, a £532K provision for loan write-offs, and a
              £247K operating exchange loss together illustrate the financial pressure behind an
              improving operating self-sufficiency position — the trade-off at the centre of MLF's
              2023 results.
            </p>
          </Card>
        </Reveal>
      </Section>

      <Section tone="white">
        <SectionHeading eyebrow="Country portfolio" title="Loan book, average loan, PAR30 and OSS by country" />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <ChartCard
            title="Loan book by country"
            note="£M"
            table={<DataTable columns={financialsDetail.loanBookByCountry.columns} rows={financialsDetail.loanBookByCountry.rows} />}
          >
            <SimpleBarChart data={countryLoanBook} dataKey="loanBook" xKey="country" color="#1f4b3f" />
          </ChartCard>
          <ChartCard title="Average loan by country" note="£">
            <SimpleBarChart data={countryAvgLoan} dataKey="avgLoan" xKey="country" color="#c1622d" />
          </ChartCard>
          <ChartCard
            title="PAR30 by country"
            note="%"
            table={
              <DataTable
                columns={financialsDetail.par30ByCountry.columns}
                rows={financialsDetail.par30ByCountry.rows}
                footnote={financialsDetail.par30ByCountry.footnote}
              />
            }
          >
            <SimpleBarChart data={par30ByCountry} dataKey="par30" xKey="country" unit="%" color="#e2a13c" />
          </ChartCard>
          <ChartCard
            title="Operating self-sufficiency by country"
            note="%"
            table={
              <DataTable
                columns={financialsDetail.ossByCountry.columns}
                rows={financialsDetail.ossByCountry.rows}
                footnote={financialsDetail.ossByCountry.footnote}
              />
            }
          >
            <SimpleBarChart data={ossByCountry} dataKey="oss" xKey="country" unit="%" color="#1f4b3f" />
          </ChartCard>
        </div>
        <SourceNote />
      </Section>
    </>
  );
}