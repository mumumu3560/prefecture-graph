"use client";

import React, { useState, useEffect } from "react";
import { usePrefStore } from "@/app/global/store";
import { convertPrefectureData } from "./recharts_data_converting";
import ChartSection from "./ChartComponents/ChartSection";
import NoChartSection from "./ChartComponents/NoChartSection";
import ChartInfoSection from "./ChartComponents/ChartInfoSection";
import ButtonsSection from "./ChartComponents/ButtonSection";

import styles from "./Recharts.module.css";
import { ResponsiveContainer } from "recharts";

export default function PopulationChart({
  boundaryYear,
}: {
  boundaryYear: number;
}) {
  //画面サイズの取得
  const [chartDimensions, setChartDimensions] = useState({
    width: 800,
    height: 400,
  });

  useEffect(() => {
    const handleResize = () => {
      const chartContainer = document.getElementById("chart-container");
      if (chartContainer) {

        //画面の大きさによってグラフの大きさを変更
        if(chartContainer.clientWidth < 500){
          const width = chartContainer.clientWidth*1.3;
          const height = width * 0.5*1.3; 
          setChartDimensions({ width, height });
        }
        else{
          const width = chartContainer.clientWidth;
          const height = width * 0.5;
          setChartDimensions({ width, height });
        }
      }
    };

    handleResize(); // 初回描画時にも実行
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [chartDimensions.width, chartDimensions.height]);

  const prefPopulationData = usePrefStore((state) => state.prefPopulationData);
  const [activeGraph, setActiveGraph] = useState("総人口");
  const handleGraphChange = (graph: string) => {
    setActiveGraph(graph);
  };

  const data_all = convertPrefectureData(prefPopulationData);
  const colors = [
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#ff7f50",
    "#4caf50",
    "#2196f3",
    "#f44336",
  ];
  const shouldShowGraph =
    data_all[activeGraph] && data_all[activeGraph].length > 0;

  return (
    <ResponsiveContainer width="90%">
      <div>
        <div className={styles.graph}>
          <ChartInfoSection
            activeGraph={activeGraph}
            boundaryYear={boundaryYear}
          />
          <ButtonsSection handleGraphChange={handleGraphChange} />
          {shouldShowGraph ? (
            <div id="chart-container" style={{ width: "100%", height: "100%" }}>
              <ChartSection
                data_all={data_all}
                activeGraph={activeGraph}
                colors={colors}
                mediaWidth={chartDimensions.width}
                mediaHeight={chartDimensions.height}
              />
            </div>
          ) : (
            <NoChartSection
              mediaWidth={chartDimensions.width}
              mediaHeight={chartDimensions.height}
            />
          )}
        </div>
      </div>
    </ResponsiveContainer>
  );
}
