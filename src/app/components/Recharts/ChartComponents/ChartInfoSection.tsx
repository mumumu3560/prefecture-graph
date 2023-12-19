// ChartInfoSection.tsx
import React from "react";
import styles from "../Recharts.module.css";

interface ChartInfoSectionProps {
  activeGraph: string;
  boundaryYear: number;
}

const ChartInfoSection: React.FC<ChartInfoSectionProps> = ({
  activeGraph,
  boundaryYear,
}) => (
  <>
    <div className={styles.title}>{activeGraph}推移</div>
    <div className={styles.comment}>
      ※{boundaryYear}年以降は推測値 出典:
      <a
        href="https://resas.go.jp/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.externalLink}
      >
        RESAS
      </a>
    </div>
    <div className={styles.comment}>
      ※グラフツール:
      <a
        href="https://recharts.org/en-US/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.externalLink}
      >
        Recharts
      </a>
    </div>
  </>
);

export default ChartInfoSection;
