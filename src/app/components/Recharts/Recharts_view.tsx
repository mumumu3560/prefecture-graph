"use client";

import React, { useState } from "react"; 
import {usePrefStore} from '@/app/global/store';

import { convertPrefectureData } from "./recharts_data_converting";

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


import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

export default function App() {


  const prefPopulationData: PopulationResult[] = usePrefStore((state) => state.prefPopulationData);

  const [activeGraph, setActiveGraph] = useState("総人口");


  const handleGraphChange = (graph: string) => {
    setActiveGraph(graph);
  };

  const data_all = convertPrefectureData(prefPopulationData);

 //色はよくわからないので7色をループするようにする。
    const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50', '#4caf50', '#2196f3', '#f44336'];
    const shouldShowGraph = data_all[activeGraph] && data_all[activeGraph].length > 0;   
    return (
      <div>

        <div>
          <button onClick={() => handleGraphChange("総人口")}>総人口</button>
          <button onClick={() => handleGraphChange("年少人口")}>年少人口</button>
          <button onClick={() => handleGraphChange("生産年齢人口")}>生産年齢人口</button>
          <button onClick={() => handleGraphChange("老年人口")}>老年人口</button>
        </div>
      
        <div>
        {shouldShowGraph && (
          <LineChart
            width={800}
            height={400}
            data={data_all[activeGraph]}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" label={{ value: "年度", position: "insideBottomRight", offset: 0 }} />
            <YAxis label={{ value: "人口", angle: -90, position: "insideLeft" }}/>
            <Tooltip />
            <Legend />
    
            {Object.keys(data_all[activeGraph][0]) // Assuming the first object in data contains all possible keys
              .filter(key => key !== 'year') // Exclude 'year' from keys
              .map((key, index) => (
                <Line
                  key={index}
                  type="monotone"
                  dataKey={key}
                  stroke={colors[index % colors.length]} // Random color
                  activeDot={{ r: 8 }}
                />
              ))
            }
          </LineChart>
          )
        }
        </div>
        {!shouldShowGraph && <p>都道府県のデータがありません。</p>}
      </div>
    );
}