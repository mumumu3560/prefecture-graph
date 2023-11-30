import axios from "axios";
import { env } from '@/env/server.mjs';

//RESAS APIのデータ元
//https://opendata.resas-portal.go.jp/docs/api/v1/population/composition/perYear.html
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
  boundaryYear: number;
  data: PopulationCategory[];
}

const fetchPopulation = async (prefCode: number): Promise<PopulationResult> => {
  try {
    const results = await axios.get<{ message: null; result: PopulationResult }>(
      `${env.POPULATION_API_URL}${prefCode}`,
      {
        headers: { "X-API-KEY": env.API_KEY },
      }
    );

    const formattedData: PopulationResult = {
      boundaryYear: results.data.result.boundaryYear,
      data: results.data.result.data.map((category: PopulationCategory) => ({
        label: category.label,
        data: category.data.map((populationData: PopulationData) => ({
          year: populationData.year,
          value: populationData.value,
          rate: populationData.rate || undefined,
        })),
      })),
    };

    console.log("Formatted Data:", formattedData);
    return formattedData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export { fetchPopulation };
