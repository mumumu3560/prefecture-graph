import styles from "./page.module.css";
import { fetchPrefectures } from "./components/api_relation/fecth_prefectures";
//import CheckBoxView from "./components/PrefecturesField/CheckBoxList/CheckBox/CheckBox_view";
import PrefecturesField from "./components/PrefecturesField/PrefecturesField_view";

interface Prefecture {
  prefCode: number;
  prefName: string;
}

// awaitを使うにはasyncをつける必要がある
//https://zenn.dev/tfutada/articles/36ad71ab598019
export default async function Home() {
  const prefectures: Prefecture[] = await fetchPrefectures();

  const addedPrefectures: number[] = [];

  console.log("Prefectures:", prefectures);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>都道府県別人口推移グラフ</h1>
      <div>
        <PrefecturesField
          key={1}
          prefectures={prefectures}
          selectedPrefectures={addedPrefectures}
        />
      </div>
    </main>
  );
}
