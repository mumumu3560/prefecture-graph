import React from 'react'
import styles from "./page.module.css";

import { fetchPrefectures } from "./components/api_relation/fecth_prefectures";

import PrefecturesField from "./components/PrefecturesField/PrefecturesField_view";
import Chart from "./components/Recharts/Recharts_view";
//import Chart from "./components/Recharts/Recharts_test";
import { fetchBoundaryYear } from './components/api_relation/fetch_boundary_year';

export const runtime = 'edge';



interface Prefecture {
  prefCode: number;
  prefName: string;
}


//https://zenn.dev/tfutada/articles/36ad71ab598019
export default async function Home() {
  const prefectures: Prefecture[] = await fetchPrefectures();
  const boundaryYear: number = await fetchBoundaryYear();
  

  return (
    <main className={styles.main}>

      <h1 className={styles.title}>都道府県別人口推移グラフ</h1>
      
      <section>
        <h2 className={styles.subtile}>都道府県一覧</h2>
          <PrefecturesField
            key={"aa"}
            prefectures={prefectures}
          />
      </section>

      
      <section>
        <h2 className={styles.subtitle}>人口情報チャート</h2>
          <Chart boundaryYear={boundaryYear} />
      </section>

      <div>

      </div>

    </main>
  );
}

