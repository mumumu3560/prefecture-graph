import { cookies } from "next/headers";
import { fetchPopulation } from "@/app/components/api_relation/fecth_population";

export  async function CookieGet(): Promise<PopulationResult> {
  const cookieStore = cookies();
  
  const fetchPrefCode = decodeURIComponent(cookieStore.get("prefCode")?.value ?? "");
  const fetchPrefName = decodeURIComponent(cookieStore.get("prefName")?.value ?? "");

  const populationResult2: PopulationResult = await fetchPopulation(Number(fetchPrefCode), fetchPrefName);

  console.log("populationResult2:", populationResult2);
  return populationResult2;

}