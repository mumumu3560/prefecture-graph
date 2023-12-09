/*
"use client";

import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

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

interface ChartDataItem {
  year: number;
  [key: string]: number;
}

interface ChartData extends Array<ChartDataItem> {}

interface Props {
  prefPopulationData: PopulationResult[];
}

const transformData = (prefPopulationData: PopulationResult[]): ChartData => {
  const chartData: ChartData = [];

  // Assuming all categories have the same years, you can use the years from the first category
  const years = prefPopulationData[0]?.data.map((item) => item.year) || [];

  years.forEach((year) => {
    const chartDataItem: ChartDataItem = { year };

    prefPopulationData.forEach((prefData) => {
      const prefValue = prefData.data.find((item) => item.year === year)?.value || 0;
      chartDataItem[prefData.prefName] = prefValue;
    });

    chartData.push(chartDataItem);
  });

  return chartData;
};

const PopulationChart: React.FC<Props> = ({ prefPopulationData }) => {
  const chartData = transformData(prefPopulationData);

  return (
    <div>
      <LineChart
        width={500}
        height={300}
        data={chartData}
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

        {prefPopulationData.map((prefData, index) => (
          <Line
            key={index}
            type="monotone"
            dataKey={prefData.prefName}
            stroke={`#${((1 << 24) * Math.random() | 0).toString(16)}`} // Generate a random color
            activeDot={{ r: 8 }}
          />
        ))}
      </LineChart>
    </div>
  );
};

export default PopulationChart;

*/