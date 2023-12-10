interface PopulationData {
    year: number;
    value: number;
    rate?: number;
  }
  
  interface PopulationCategory {
    label: string;
    data: PopulationData[];
  }
  
  interface PopulationResult {
    prefName: string;
    data: PopulationCategory[];
  }
  
  type AllPrefecturesData = { year: number; [prefName: string]: number }[];
  
  type ResultType = {
      総人口: AllPrefecturesData;
      年少人口: AllPrefecturesData;
      生産年齢人口: AllPrefecturesData;
      老年人口: AllPrefecturesData;
      [key: string]: AllPrefecturesData; // インデックスシグネチャを追加
  };
  
  export function convertPrefectureData(input: PopulationResult[]): ResultType {
      const result: ResultType = {
          総人口: [],
          年少人口: [],
          生産年齢人口: [],
          老年人口: []
      };
  
      input.forEach(prefecture => {
          const prefName = prefecture.prefName;
  
          prefecture.data.forEach(populationGroup => {
              const label = populationGroup.label;
              const data = populationGroup.data;
  
              data.forEach(populationData => {
                  const existingData = result[label].find(d => d.year === populationData.year);
  
                  if (existingData) {
                      existingData[prefName] = (existingData[prefName] || 0) + populationData.value;
                  } else {
                      const newData = { year: populationData.year, [prefName]: populationData.value };
                      result[label].push(newData);
                  }
              });
          });
      });
  
      return result;
  }
  
  /*
  
  // 例: テストデータ
  const testData: PrefectureData[] = [
      {
          prefName: "Tokyo",
          data: [
              { label: "総人口", data: [{ year: 2020, value: 100, rate: 1.5 }, { year: 2021, value: 120, rate: 2.0 }] },
              { label: "年少人口", data: [{ year: 2020, value: 30, rate: 1.2 }, { year: 2021, value: 40, rate: 1.8 }] }
          ]
      },
      {
          prefName: "Osaka",
          data: [
              { label: "総人口", data: [{ year: 2020, value: 80, rate: 1.2 }, { year: 2021, value: 90, rate: 1.5 }] },
              { label: "年少人口", data: [{ year: 2020, value: 25, rate: 1.0 }, { year: 2021, value: 35, rate: 1.4 }] }
          ]
      }
  ];
  
  
  
  
  export const output = convertPrefectureData(testData2);
  console.log(output);
  
  */