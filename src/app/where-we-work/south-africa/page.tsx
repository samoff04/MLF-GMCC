import { CountryPageBody } from "@/components/site/CountryPageBody";
import { countries } from "@/lib/data";

export default function SouthAfricaPage() {
  return <CountryPageBody c={countries.southAfrica} />;
}