// NoGraphSection.tsx
import React from 'react';
import { LineChart } from 'recharts';

const NoGraphSection: React.FC = () => (
  <LineChart
    width={800}
    height={400}
    data={[{ year: '', data1: 0, data2: 0, data3: 0 }]}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    }}
  >
    {/* ... 他のコード */}
  </LineChart>
);

export default NoGraphSection;
