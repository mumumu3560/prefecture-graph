import { PopulationResult } from "@/app/types/types";

//これはRechartsで使うデータ型
type AllPrefecturesData = { year: number; [prefName: string]: number }[];

type ResultType = {
  総人口: AllPrefecturesData;
  年少人口: AllPrefecturesData;
  生産年齢人口: AllPrefecturesData;
  老年人口: AllPrefecturesData;
  [key: string]: AllPrefecturesData; // インデックスシグネチャを追加
};

//具体的な変換前後のデータはconvert_testで確認できる。
export function convertPrefectureData(input: PopulationResult[]): ResultType {
  const result: ResultType = {
    総人口: [],
    年少人口: [],
    生産年齢人口: [],
    老年人口: [],
  };

  input.forEach((prefecture) => {
    const prefName = prefecture.prefName;

    prefecture.data.forEach((populationGroup) => {
      const label = populationGroup.label;
      const data = populationGroup.data;

      data.forEach((populationData) => {
        // AllPrefecturesData型の配列の中に、populationData.yearが含まれているものを探す。
        //あれば{ year: 1960, '香川県': 1, '東京都': 9 }のようなデータを返す。
        //なければundefinedを返す。
        const existingData = result[label].find(
          (d) => d.year === populationData.year,
        );

        // あれば、そのデータのprefNameの値をpopulationData.valueにする。
        if (existingData) {
          //c++でいうところのmapのようなものprefNameがkeyでpopulationData.valueがvalue
          existingData[prefName] = populationData.value;
        } else {
          // 対応するyearがなければ新しいデータを作って、prefNameの値をpopulationData.valueにする。
          const newData = {
            year: populationData.year,
            [prefName]: populationData.value,
          };
          result[label].push(newData);
        }
      });
    });
  });

  return result;
}
