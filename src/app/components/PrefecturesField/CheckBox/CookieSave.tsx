"use client";
import {usePrefStore} from '@/app/global/store';
//import { useRouter } from "next/navigation";


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

const CookieSave: React.FC<CheckboxProps> = ({
  receivedData,
  prefData
}) => {

  /*
  const thisIsAfterRemove = usePrefStore((state) => state.isAfterRemove);
  
  
  
  */

  //const counter = usePrefStore((state) => state.counter);
  const addPrefecture = usePrefStore((state) => state.addPrefPopulationData);
  //const populationData = usePrefStore((state) => state.prefPopulationData);
  console.log("gaghaegh:a");
  console.log("goaehgh@gag");

  //再レンダリングされないようにするには？？

  const shouldAddPrefecture:boolean = true;
  //高々47回しか回らないので、O(n)でも問題ない
  
  /*
  for(let i = 0; i < populationData.length; i++){
    if(populationData[i].prefName === receivedData?.prefName){
      shouldAddPrefecture = false;
      break;
    }
  }
  */

  //console.log("isAfterRemove: " + isAfterRemove);

  
  /*
  console.log("thisisAfterRemove: " + thisIsAfterRemove);
  console.log("counter is: " + counter);
  */
  console.log("receivedData: " + receivedData?.prefName);
  console.log("shouldAddPrefecture: " + shouldAddPrefecture);

  //counterは最初のみ
  //|| counter === 0
  if(!receivedData || prefData === ""){
    console.log("populationData is null");
  }
  else{
    console.log("receivedData is not null");
    const addingData:PopulationResult = receivedData;
    addPrefecture(addingData);
    //console.log(populationData.length);
  }

  console.log(receivedData);

  console.log("populationData:Here");
  //ここで今までのpopulationDataを出力する
  /**
   for(let i = 0; i < populationData.length; i++){
    console.log(populationData[i].prefName);
  }
   */
  console.log("populationData:Here_Last");

  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

  return (
    <div></div>
  );
};

export default CookieSave;


