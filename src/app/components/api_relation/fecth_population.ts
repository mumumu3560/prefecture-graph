import { env } from "@/env/server.mjs";

interface PopulationData {
  year: number;
  value: number;
  rate?: number;
}

interface PopulationCategory {
  label: string;
  data: PopulationData[];
}

interface PopulationResult {
  prefName: string;
  data: PopulationCategory[];
}

const fetchPopulation = async (prefCode: number, prefName: string): Promise<PopulationResult> => {
  try {
    const response = await fetch(`${env.POPULATION_API_URL}${prefCode}`, {
      headers: { "X-API-KEY": env.API_KEY },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch population data for ${prefName}: ${response.statusText}`);
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

    // console.log("Formatted Data:", formattedData);
    return formattedData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export { fetchPopulation };






















/*
import axios from "axios";
import { env } from "@/env/server.mjs";

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
  prefName: string;
  data: PopulationCategory[];
}

const fetchPopulation = async (prefCode: number, prefName: string): Promise<PopulationResult> => {
  try {
    const results = await axios.get<{
      message: null;
      result: PopulationResult;
    }>(`${env.POPULATION_API_URL}${prefCode}`, {
      headers: { "X-API-KEY": env.API_KEY },
    });

    //resultにはmessage:nullがあるのでそれは除外
    const formattedData: PopulationResult = {
      prefName: prefName,
      data: results.data.result.data.map((category: PopulationCategory) => ({
        label: category.label,
        data: category.data.map((populationData: PopulationData) => ({
          year: populationData.year,
          value: populationData.value,
          rate: populationData.rate || -1,
        })),
      })),
    };

    //console.log("Formatted Data:", formattedData);
    return formattedData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export { fetchPopulation };
*/
