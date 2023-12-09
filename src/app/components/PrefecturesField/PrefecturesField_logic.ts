import { cookies } from "next/headers";
import { fetchPopulation } from "@/app/components/api_relation/fecth_population";


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

    console.log("CookieGet is called");
    const cookieStore = cookies();
    
    const fetchPrefCode = decodeURIComponent(cookieStore.get("prefCode")?.value ?? "");
    const fetchPrefName = decodeURIComponent(cookieStore.get("prefName")?.value ?? "");

    const isAfterRemove = decodeURIComponent(cookieStore.get("isAfterRemove")?.value ?? "");
    console.log("ttttttttttt");
    console.log("isAfterRemove:", isAfterRemove);

    if(fetchPrefCode == "" || fetchPrefName == "" || isAfterRemove !== "false"){
        console.log("cookie is empty");
        return null;
    }

    console.log("fetchPrefCode:", fetchPrefCode);

    const populationResult2: PopulationResult = await fetchPopulation(Number(fetchPrefCode), fetchPrefName);
    
    return populationResult2;
}