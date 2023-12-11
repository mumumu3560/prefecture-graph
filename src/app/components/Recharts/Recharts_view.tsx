
"use client";

// PopulationChart.tsx
import React, { useState } from 'react';
import { usePrefStore } from '@/app/global/store';
import { convertPrefectureData } from './recharts_data_converting';
import ChartSection from './ChartComponents/ChartSection';
import NoGraphSection from './ChartComponents/NoGraphSection';
import GraphInfoSection from './ChartComponents/GraphInfoSection';
import ButtonsSection from './ChartComponents/ButtonSection';

import styles from './Recharts.module.css';

export default function PopulationChart({ boundaryYear }: { boundaryYear: number }) {
  const prefPopulationData = usePrefStore((state) => state.prefPopulationData);
  const [activeGraph, setActiveGraph] = useState('総人口');
  const handleGraphChange = (graph: string) => {
    setActiveGraph(graph);
  };

  const data_all = convertPrefectureData(prefPopulationData);
  const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50', '#4caf50', '#2196f3', '#f44336'];
  const shouldShowGraph = data_all[activeGraph] && data_all[activeGraph].length > 0;

  return (
    <div>
      <div className={styles.graph}>
        <GraphInfoSection activeGraph={activeGraph} boundaryYear={boundaryYear} />
        <ButtonsSection handleGraphChange={handleGraphChange} />
        {shouldShowGraph ? (
          <ChartSection data_all={data_all} activeGraph={activeGraph} colors={colors} />
        ) : (
          <NoGraphSection />
        )}
      </div>
    </div>
  );
}
