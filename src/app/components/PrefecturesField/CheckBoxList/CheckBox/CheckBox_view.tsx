"use client";

import React, { useState } from 'react';
import { CheckBoxLogic } from './CheckBox_logic';
import styles from './CheckBox.module.css';

interface CheckboxProps {
  prefCode: number;
  prefName: string;
  selectedPrefectures: number[];
}

const Checkbox: React.FC<CheckboxProps> = ({ prefCode, prefName, selectedPrefectures }) => {
  const [isChecked, setIsChecked] = useState(false);

  //具体的な処理を書く
  const handleCheckboxChange = () => {
    CheckBoxLogic(prefCode, !isChecked, selectedPrefectures);
    setIsChecked(!isChecked);
    
  };

  return (

    
    <div className={`${styles.checkboxContainer} ${isChecked ? styles.checked : ''}`}>
      <label>
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
        {prefName}
      </label>
    </div>
    
  );
};

export default Checkbox;
