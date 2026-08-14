import { CountryPageBody } from "@/components/site/CountryPageBody";
import { countries } from "@/lib/data";

export default function ZambiaPage() {
  return <CountryPageBody c={countries.zambia} />;
}