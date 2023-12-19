// ButtonsSection.tsx
import React from "react";
import styles from "../Recharts.module.css";

interface ButtonsSectionProps {
  handleGraphChange: (graph: string) => void;
}

const ButtonsSection: React.FC<ButtonsSectionProps> = ({
  handleGraphChange,
}) => (
  <div className={styles.buttons}>
    <button className={styles.all} onClick={() => handleGraphChange("総人口")}>
      総人口
    </button>

    <button
      className={styles.child}
      onClick={() => handleGraphChange("年少人口")}
    >
      年少人口
    </button>

    <button
      className={styles.worker}
      onClick={() => handleGraphChange("生産年齢人口")}
    >
      生産年齢人口
    </button>

    <button
      className={styles.old}
      onClick={() => handleGraphChange("老年人口")}
    >
      老年人口
    </button>
  </div>
);

export default ButtonsSection;
