"use client";

import React, { useState } from "react";
import styles from "./CheckBox.module.css";
import { usePrefStore } from "@/app/global/store";
import { useRouter } from "next/navigation";

import { useEffect } from "react";

interface CheckboxProps {
  prefCode: number;
  prefName: string;

  //cookieDataは元々cookieにデータがあった場合にチェックボックスにチェックを入れるために使う。
  cookieData: string;

  areaCode: number;
}

const Checkbox: React.FC<CheckboxProps> = ({
  prefCode,
  prefName,
  cookieData,
  areaCode,
}) => {

  /*
  //ハイドレーションを意識する。useEffectでここを変えてみる
  const [isChecked, setIsChecked] = useState(
    cookieData === prefName ? true : false,
  );
  */

  const [isChecked, setIsChecked] = useState(false);
  const [cookie, setCookie] = useState("");

  useEffect(() => {
    // このuseEffectはクライアント側でのみ実行されます
    // ここでクッキーを読み取る

    setCookie(cookieData);

    setIsChecked(cookie === prefName ? true : false);
  }, []); // 空の依存性配列は、初回のレンダリング後にクライアントでのみ一度だけ実行されることを保証します

  const removePrefecture = usePrefStore(
    (state) => state.removePrefPopulationData,
  );

  const router = useRouter();

  //具体的な処理を書く
  const handleCheckboxChange = async () => {
    if (isChecked) {
      //ここはチェックボックスが外されたときの処理
      document.cookie = `prefCode=""`;
      document.cookie = `prefName=""`;

      removePrefecture(prefName);

      //router.refreshによりサーバーコンポーネントの再描画を行う。
      router.refresh();
    } else {
      //ここはチェックボックスが付けられたときの処理
      document.cookie = `prefCode=${encodeURIComponent(prefCode)}`;
      document.cookie = `prefName=${encodeURIComponent(prefName)}`;

      router.refresh();
    }

    setIsChecked(!isChecked);
  };

  //地域ごとにチェックボックスの色を変えてみた。
  const getAreaCodeClassName = () => {
    switch (areaCode) {
      case 0:
        return isChecked ? styles.areaCode0 : "";
      case 1:
        return isChecked ? styles.areaCode1 : "";
      case 2:
        return isChecked ? styles.areaCode2 : "";
      case 3:
        return isChecked ? styles.areaCode3 : "";
      case 4:
        return isChecked ? styles.areaCode4 : "";
      case 5:
        return isChecked ? styles.areaCode5 : "";
      case 6:
        return isChecked ? styles.areaCode6 : "";
      default:
        return ""; // デフォルトのクラス名
    }
  };

  return (
    <div>
      <label
        className={`
      ${styles.checkboxContainer} 
      ${isChecked ? styles.checked : ""} 
      ${getAreaCodeClassName()}
      `}
      >
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
