import "server-only";
import { env } from "@/env/server.mjs";
import { PopulationData, PopulationCategory, PopulationResult } from "@/app/types/types";


const fetchPopulation = async (
  prefCode: number,
  prefName: string,
): Promise<PopulationResult | null> => {
  if (isNaN(prefCode) || prefName == "") {
    return null;
  }
  try {
    const response = await fetch(`${env.POPULATION_API_URL}${prefCode}`, {
      headers: { "X-API-KEY": env.API_KEY },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch population data for ${prefName}: ${response.statusText}`,
      );
    }

    const result = await response.json();

    // resultにはmessage:nullがあるのでそれは除外
    const formattedData: PopulationResult = {
      prefName: prefName,
      data: result.result.data.map((category: PopulationCategory) => ({
        label: category.label,
        data: category.data.map((populationData: PopulationData) => ({
          year: populationData.year,
          value: populationData.value,
          rate: populationData.rate || -1,
        })),
      })),
    };

    return formattedData;
  } catch (error) {
    throw error;
  }
};

export { fetchPopulation };
