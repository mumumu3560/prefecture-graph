"use client";
import { usePrefStore } from "@/app/global/store";
import { PopulationResult } from "@/app/types/types";

interface CheckboxProps {
  receivedData: PopulationResult | null;
  prefData: string;
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
