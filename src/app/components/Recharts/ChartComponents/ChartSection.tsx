import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

type AllPrefecturesData = { year: number; [prefName: string]: number }[];

type ResultType = {
  総人口: AllPrefecturesData;
  年少人口: AllPrefecturesData;
  生産年齢人口: AllPrefecturesData;
  老年人口: AllPrefecturesData;
  [key: string]: AllPrefecturesData;
};

interface ChartSectionProps {
  data_all: ResultType;
  activeGraph: string;
  colors: string[];
  mediaWidth: number;
  mediaHeight: number;
}

interface ChartSectionProps {
  data_all: ResultType;
  activeGraph: string;
  colors: string[];
}

const ChartSection: React.FC<ChartSectionProps> = ({
  data_all,
  activeGraph,
  colors,
  mediaWidth,
  mediaHeight,
}) => (
  <LineChart
    className="line-chart"
    width={mediaWidth}
    height={mediaHeight}
    data={data_all[activeGraph]}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 50,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis
      dataKey="year"
      label={{ value: "年度", position: "insideBottom", offset: -20 }}
    />
    <YAxis tickFormatter={(value) => `${(value / 1000).toLocaleString()}k`} />
    <Tooltip />
    <Legend
      verticalAlign="bottom"
      height={4}
      iconSize={20}
      iconType="plainline"
      wrapperStyle={{ bottom: 20 }}
    />

    {Object.keys(data_all[activeGraph][0])
      .filter((key) => key !== "year")
      .map((key, index) => (
        <Line
          key={index}
          type="monotone"
          dataKey={key}
          stroke={colors[index % colors.length]}
          activeDot={{ r: 8 }}
          unit={"人"}
        />
      ))}
  </LineChart>
);

export default ChartSection;
