import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type {} from "@redux-devtools/extension"; // required for devtools typing

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

interface prefState {
  prefPopulationData: PopulationResult[];
  addPrefPopulationData: (data: PopulationResult) => void;
  removePrefPopulationData: (prefName: string) => void;
}

export const usePrefStore = create<prefState>()(
  devtools(
    (set) => ({
      prefPopulationData: [],

      addPrefPopulationData: (data: PopulationResult) =>
        set((state) => {
          const isPrefNameExist = state.prefPopulationData.some(
            (prefData) => prefData.prefName === data.prefName,
          );

          if (isPrefNameExist) {

            return { prefPopulationData: state.prefPopulationData };
          }

          return { prefPopulationData: [...state.prefPopulationData, data] };
        }),

      removePrefPopulationData: (prefName: string) =>
        set((state) => {
          const newPrefPopulationData = state.prefPopulationData.filter(
            (pref) => pref.prefName !== prefName,
          );
          return { prefPopulationData: newPrefPopulationData };
        }),
    }),

    {
      name: "prefCode-storage",
    },
  ),
);
