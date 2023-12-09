"use client";

import React from "react"; /*{ useState } */ 
import {usePrefStore} from '@/app/global/store';
//import { useRouter } from "next/navigation";


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

const data:{year: number, 北海道: number, 香川: number, amt: number}[] = [
  {
    year: 2000,
    北海道: 4000,
    香川: 2400,
    amt: 2400
  },
  {
    year: 2005,
    北海道: 3000,
    香川: 1398,
    amt: 2210
  },
  {
    year: 2010,
    北海道: 2000,
    香川: 9800,
    amt: 2290
  },
  {
    year: 2015,
    北海道: 2780,
    香川: 3908,
    amt: 2000
  },
  {
    year: 2020,
    北海道: 1890,
    香川: 4800,
    amt: 2181
  },
  {
    year: 2025,
    北海道: 2390,
    香川: 3800,
    amt: 2500
  },
  {
    year: 2030,
    北海道: 3490,
    香川: 4300,
    amt: 2100
  }
];

export default function App() {
  console.log("dddddddddddddddddd");

  const prefPopulationData: PopulationResult[] = usePrefStore((state) => state.prefPopulationData);
  console.log("prefPopulationData: " + prefPopulationData);
  console.log("ここがrecharts");
  console.log(prefPopulationData[0]);

  return (
    <div>
        <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="香川"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="北海道" stroke="#82ca9d" />

    </LineChart>

    <Line type="monotone" dataKey="北海道" stroke="#82ca9d" />
    
    </div>


  );
}