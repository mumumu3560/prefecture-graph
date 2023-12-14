export interface PopulationData {
    year: number;
    value: number;
    rate?: number;
  }

export interface PopulationCategory {
    label: string;
    data: PopulationData[];
  }
  
  //boundaryYearは2020でこれ以上は推定値
export interface PopulationResult {
    prefName: string;
    data: PopulationCategory[];
  }

export type AllPrefecturesData = { year: number; [prefName: string]: number }[];