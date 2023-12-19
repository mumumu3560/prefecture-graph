import { cookies } from "next/headers";
import { fetchPopulation } from "@/app/components/api_relation/fecth_population";
import { PopulationResult } from "@/app/types/types";


export const runtime = "edge";



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
