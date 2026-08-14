import { CountryPageBody } from "@/components/site/CountryPageBody";
import { countries } from "@/lib/data";

export default function MalawiPage() {
  return <CountryPageBody c={countries.malawi} />;
}