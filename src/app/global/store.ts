import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import type {} from '@redux-devtools/extension' // required for devtools typing


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
  /*
  prefArrays: number[]
  addPref: (prefCode: number) => void
  removePref: (prefCode: number) => void
  */

  prefPopulationData: PopulationResult[]
  addPrefPopulationData: (data: PopulationResult) => void
  removePrefPopulationData: (prefName: string) => void

  counter: number
  incrementCounter: () => void

  isAfterRemove: boolean

}





export const usePrefStore = create<prefState>()(
  devtools(

      (set) => ({

        /*
        prefArrays: [],
        
        addPref: (prefCode: number) => set((state) => ({ prefArrays: [...state.prefArrays, prefCode] })),
        
        removePref: (prefCode: number) =>
          set((state) => ({ prefArrays: state.prefArrays.filter((pref) => pref !== prefCode) })),

        */

        prefPopulationData: [],

        /*
        addPrefPopulationData: (data: PopulationResult) => 
          set((state) => {
            console.log('Adding population data:', data);
            return { prefPopulationData: [...state.prefPopulationData, data] , isAfterRemove: false};
          }),
        */

        addPrefPopulationData: (data: PopulationResult) => 
          set((state) => {

            const isPrefNameExist = state.prefPopulationData.some(prefData => prefData.prefName === data.prefName);
            console.log("state.prefPopulationData:", state.prefPopulationData);
                    
            if (isPrefNameExist) {
              console.log(`Population data for ${data.prefName} already exists. Skipping addition.`);
              return { prefPopulationData: state.prefPopulationData, isAfterRemove: false };
            }
        
            console.log('Adding population data:', data);
            return { prefPopulationData: [...state.prefPopulationData, data], isAfterRemove: false };
          }),


        

        /*
        removePrefPopulationData: (prefName: string) =>
          set((state) => (
            { prefPopulationData: state.prefPopulationData.filter((pref) => pref.prefName !== prefName) }
          )),
        */

          removePrefPopulationData: (prefName: string) => set((state) => {
            console.log("Before removal:", state.prefPopulationData);
            const newPrefPopulationData = state.prefPopulationData.filter((pref) => pref.prefName !== prefName);
            console.log("After removal:", newPrefPopulationData);
            console.log("isAfterRemove:", state.isAfterRemove);
            return { prefPopulationData: newPrefPopulationData, isAfterRemove: true };
          }),
          

        counter: 0,
        incrementCounter: () => set((state) => ({ counter: state.counter + 1 })),

        isAfterRemove: false,
      }),

      {
        name: 'prefCode-storage',
      },
 
  ),
)