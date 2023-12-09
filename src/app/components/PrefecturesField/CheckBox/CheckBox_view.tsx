"use client";

import React, { useState } from "react";
import styles from "./CheckBox.module.css";
import {usePrefStore} from '@/app/global/store';
import { useRouter } from "next/navigation";


interface CheckboxProps {
  prefCode: number;
  prefName: string;
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



const Checkbox: React.FC<CheckboxProps> = ({
  prefCode,
  prefName,
}) => {

  const [isChecked, setIsChecked] = useState(false);

  //分割代入とselectorの書き方がある。再描画されるのは分割代入の方らしい
  //https://reffect.co.jp/react/zustand#count-2

  const removePrefecture = usePrefStore((state) => state.removePrefPopulationData);
  //const increment = usePrefStore((state) => state.incrementCounter);

  const router = useRouter();

  //具体的な処理を書く
  const handleCheckboxChange = async () => {
document.cookie = 'isAfterRemove=true';
    console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbb");

    if(isChecked){
      //cookieの方でisAfterRemoveをtrueにする
      
      console.log("removePrefecture: " + prefName);
      removePrefecture(prefName);
      console.log("ここがどうなっている");
      router.refresh();
    }
    else{
      document.cookie = `prefCode=${encodeURIComponent(prefCode)}`;
      document.cookie = `prefName=${encodeURIComponent(prefName)}`;
      //cookieの方でisAfterRemoveをfalseにする
      document.cookie = 'isAfterRemove=false';
      //increment();
      router.refresh();
    }
    

    setIsChecked(!isChecked);

  };

  

  return (

    <div>
      <label className={`${styles.checkboxContainer} 
        ${isChecked ? styles.checked : ""}`}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      {prefName}
      </label>

    </div>

  );
};

export default Checkbox;
