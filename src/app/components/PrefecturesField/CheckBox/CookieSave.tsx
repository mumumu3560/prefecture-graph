"use client";
import { usePrefStore } from "@/app/global/store";

interface CheckboxProps {
  receivedData: PopulationResult | null;
  prefData: string;
}

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

const CookieSave: React.FC<CheckboxProps> = ({ receivedData, prefData }) => {
  const addPrefecture = usePrefStore((state) => state.addPrefPopulationData);

  if (!receivedData || prefData === "") {
  } else {
    const addingData: PopulationResult = receivedData!;
    addPrefecture(addingData);
  }

  return <div></div>;
};

export default CookieSave;
