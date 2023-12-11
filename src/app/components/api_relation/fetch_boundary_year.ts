import 'server-only'
import { env } from "@/env/server.mjs";


const fetchBoundaryYear = async (): Promise<number> => {

  try {
    const response = await fetch(`${env.POPULATION_API_URL}${1}`, {
      headers: { "X-API-KEY": env.API_KEY },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch population data }`);
    }

    const result = await response.json();

    const boundaryYear = result.result.boundaryYear;


    return boundaryYear;
  } catch (error) {
    throw error;
  }
};

export { fetchBoundaryYear };
