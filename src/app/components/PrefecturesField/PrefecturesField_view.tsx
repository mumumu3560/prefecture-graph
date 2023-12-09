import CheckBox from "./CheckBox/CheckBox_view";
import styles from "./PrefecturesField.module.css";
import { CookieGet } from "./PrefecturesField_logic";

import CookieSave from "./CheckBox/CookieSave";

import { cookies } from "next/headers";

//都道府県コードと名前の保持
interface Prefecture {
  prefCode: number;
  prefName: string;
}

//都道府県とチェックボックスの関連付け
interface CheckboxListProps {
  prefectures: Prefecture[];
}

const CheckBoxList: React.FC<CheckboxListProps> = async ({
  prefectures,
}) => {

  console.log("ccccccccccccccccccccccccccccc");

  const cookieStore = cookies();
  const isAfter = decodeURIComponent(cookieStore.get("isAfterRemove")?.value ?? "");
  let count: number = 1;
  console.log("isAfter: " + isAfter);
  if(isAfter === "true"){
    count++;
  }
  else{
    count--;
  }

  const populationData = await CookieGet();

  //ここには地域ごとの都道府県の数を入れる。
  const eachPrefecturesNum: number[] = [7, 7, 9, 7, 5, 4, 8];
  const areaName: string[] = [
    "北海道・東北",
    "関東",
    "中部",
    "近畿",
    "中国",
    "四国",
    "九州・沖縄",
  ];

  //地域ごとに都道府県を分類
  //indexは地域のインデックス
  const renderCheckboxByArea = () => {
    return areaName.map((area:string , index:number) => (
      <div key={index} className={styles.areaSection}>
        <h4 className={styles.areaNameBox}>{area}</h4>
        {renderCheckboxesForArea(index)}
      </div>
    ));
  };

  

  //ある地域の都道府県のチェックボックスリストを表示
  const renderCheckboxesForArea = async (areaIndex: number) => {

    //北海道・東北の場合は0～6、関東の場合は7～13、というように、
    //都道府県の数を取得するための開始インデックスを取得
    let startIndex:number = 0;
    if(areaIndex > 0){
      for(let i:number = 0; i < areaIndex; i++){
        startIndex += eachPrefecturesNum[i];
      }
    }

    //開始インデックスから都道府県の数を足したインデックスを取得
    const endIndex:number = startIndex + eachPrefecturesNum[areaIndex];
    //<CookieSave populationData={await CookieGet()}></CookieSave>
    
    //開始インデックスから終了インデックスまでの都道府県を取得
    const areaPrefectures:Prefecture[] = prefectures.slice(startIndex, endIndex);


    



    return areaPrefectures.map((prefecture) => (
      <CheckBox
        key={prefecture.prefCode}
        prefCode={prefecture.prefCode}
        prefName={prefecture.prefName}
      />
    ));
  };

  

  return (
    <div>
      <div className={styles.container}>{renderCheckboxByArea()}</div>
      <CookieSave 
        receivedData={populationData} isAfterRemove={isAfter} checkCounter={count}
      >

      </CookieSave>
    </div>

  );
};

export default CheckBoxList;
