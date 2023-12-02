import styles from "./page.module.css";
import { fetchPrefectures } from "./components/api_relation/fecth_prefectures";
import CheckBoxView from "./components/PrefecturesField/CheckBoxList/CheckBox/CheckBox_view";

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
      <CheckBoxView
        key={0}
        prefCode={0}
        prefName={"北海道"}
        selectedPrefectures={addedPrefectures}
      />
    </main>
  );
}
