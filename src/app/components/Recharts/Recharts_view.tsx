"use client";

import React, { useState, useEffect } from "react";
import { usePrefStore } from "@/app/global/store";
import { convertPrefectureData } from "./recharts_data_converting";
import ChartSection from "./ChartComponents/ChartSection";
import NoGraphSection from "./ChartComponents/NoGraphSection";
import GraphInfoSection from "./ChartComponents/GraphInfoSection";
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
        const width = chartContainer.clientWidth;
        const height = width * 0.7; // 例: 幅の半分の高さに設定
        setChartDimensions({ width, height });
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
          <GraphInfoSection
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
                mediaWidth={chartDimensions.width * 1.3}
                mediaHeight={chartDimensions.height * 1.3}
              />
            </div>
          ) : (
            <NoGraphSection
              mediaWidth={chartDimensions.width * 1.3}
              mediaHeight={chartDimensions.height * 1.3}
            />
          )}
        </div>
      </div>
    </ResponsiveContainer>
  );
}
