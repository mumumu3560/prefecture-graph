// NoChartSection.tsx
import React from "react";
import { LineChart } from "recharts";

import { CartesianGrid, XAxis } from "recharts";

interface NoChartSectionProps {
  mediaWidth: number;
  mediaHeight: number;
}

const NoChartSection: React.FC<NoChartSectionProps> = ({
  mediaWidth,
  mediaHeight,
}) => (
  <LineChart
    width={mediaWidth}
    height={mediaHeight}
    data={[{ year: "", data1: 0, data2: 0, data3: 0 }]}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis
      dataKey="year"
      label={{ value: "年度", position: "insideBottom", offset: 0 }}
    />
  </LineChart>
);

export default NoChartSection;
