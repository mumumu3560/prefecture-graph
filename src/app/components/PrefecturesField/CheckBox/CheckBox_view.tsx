"use client";

import React, { useState } from "react";
import styles from "./CheckBox.module.css";
import {usePrefStore} from '@/app/global/store';
//import {usePrefStore} from '../../../../app/global/store';
import { useRouter } from "next/navigation";


interface CheckboxProps {
  prefCode: number;
  prefName: string;

  //cookieDataは元々cookieにデータがあった場合にチェックボックスにチェックを入れるために使う。
  cookieData: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  prefCode,
  prefName,
  cookieData
}) => {

  const [isChecked, setIsChecked] = useState(cookieData === prefName ? true :false);

  const removePrefecture = usePrefStore((state) => state.removePrefPopulationData);

  const router = useRouter();

  //具体的な処理を書く
  const handleCheckboxChange = async () => {

    if(isChecked){
      //ここはチェックボックスが外されたときの処理
      document.cookie = `prefCode=""`;
      document.cookie = `prefName=""`;

      removePrefecture(prefName);

      //router.refreshによりサーバーコンポーネントの再描画を行う。
      router.refresh();
    }
    else{
      //ここはチェックボックスが付けられたときの処理
      document.cookie = `prefCode=${encodeURIComponent(prefCode)}`;
      document.cookie = `prefName=${encodeURIComponent(prefName)}`;

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
