import { cookies } from "next/headers";
import { fetchPopulation } from "@/app/components/api_relation/fecth_population";

export const runtime = "edge";

interface PopulationData {
  year: number;
  value: number;
  rate?: number;
}

interface PopulationCategory {
  label: string;
  data: PopulationData[];
}

//boundaryYearは2020でこれ以上は推定値
interface PopulationResult {
  prefName: string;
  data: PopulationCategory[];
}

export async function CookieGet(): Promise<PopulationResult | null> {
  const cookieStore = cookies();

  const fetchPrefCode = decodeURIComponent(
    cookieStore.get("prefCode")?.value ?? "",
  );
  const fetchPrefName = decodeURIComponent(
    cookieStore.get("prefName")?.value ?? "",
  );

  if (fetchPrefCode == "" || fetchPrefName == "") {
    return null;
  }

  const populationResult2: PopulationResult | null = await fetchPopulation(
    Number(fetchPrefCode),
    fetchPrefName,
  );
  if (populationResult2 == null) {
    return null;
  }
  return populationResult2;
}
