import styles from "./page.module.css";
import { fetchPrefectures } from "./components/api_relation/fecth_prefectures";
//import CheckBoxView from "./components/PrefecturesField/CheckBoxList/CheckBox/CheckBox_view";
import PrefecturesField from "./components/PrefecturesField/PrefecturesField_view";
import React from 'react'

import Chart from "./components/Recharts/Recharts_view";
//import { fetchPopulation } from "./components/api_relation/fecth_population";
//import testChart from "./components/Recharts/recharts_test1";
//import { convertPrefectureData } from "./components/Recharts/recharts_test222";
//import { result } from "./components/Recharts/recharts_test2222";
export const runtime = 'edge';



interface Prefecture {
  prefCode: number;
  prefName: string;
}

/*
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
*/

// awaitを使うにはasyncをつける必要がある
//https://zenn.dev/tfutada/articles/36ad71ab598019
export default async function Home() {
  const prefectures: Prefecture[] = await fetchPrefectures();

  
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>都道府県別人口推移グラフ</h1>
      <h2 className={styles.aaa}>都道府県一覧</h2>
      <div>
        <PrefecturesField
          key={"aa"}
          prefectures={prefectures}
        />
      </div>

      <div>
        <Chart></Chart>
      </div>

      <div>
      </div>
    </main>
  );
}

