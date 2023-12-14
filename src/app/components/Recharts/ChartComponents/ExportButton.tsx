import React, { useState } from "react";
import Papa from "papaparse";
import Encoding from "encoding-japanese";
import { PopulationCategory, PopulationResult } from "@/app/types/types";

interface ExportButtonProps {
  data: PopulationResult[];
}

const ExportButton: React.FC<ExportButtonProps> = ({ data }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [selectedPref, setSelectedPref] = useState<string>("");
  const [downloadData, setDownloadData] = useState<PopulationCategory[]>([]);

  const openPopover = () => {
    setIsPopoverOpen(true);
  };

  const closePopover = () => {
    setIsPopoverOpen(false);
  };

  const handlePrefSelect = (prefName: string) => {
    setSelectedPref(prefName);
    setDownloadData(
      data.find((item) => item.prefName === prefName)?.data || [],
    );
    closePopover();
  };

  const handleExportClick = () => {
    if (selectedPref) {
      const csvData = Papa.unparse({
        fields: ["Prefecture", "Label", "Year", "Value", "Rate"],
        data: downloadData.flatMap((item) =>
          item.data.map((dataItem) => [
            selectedPref,
            item.label,
            dataItem.year,
            dataItem.value,
            dataItem.rate || "",
          ]),
        ),
      });

      const sjisEncodedData = Encoding.convert(csvData, {
        to: "SJIS",
        from: "UNICODE",
        type: "string",
      }) as string;

      const csvWithBOM = "\uFEFF" + sjisEncodedData;

      const blob = new Blob([new Uint8Array([0xef, 0xbb, 0xbf]), csvWithBOM], {
        type: "text/csv;charset=Shift_JIS",
      });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = `${selectedPref}_PopulationData.csv`;
      link.click();
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <button onClick={openPopover}>CSV出力</button>
      {isPopoverOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            zIndex: 2,
          }}
        >
          <p>都道府県を選択してください:</p>
          <ul>
            {data.map((item) => (
              <li
                key={item.prefName}
                onClick={() => handlePrefSelect(item.prefName)}
              >
                {item.prefName}
              </li>
            ))}
          </ul>
        </div>
      )}
      {selectedPref && (
        <div>
          <p>選択された都道府県: {selectedPref}</p>
          <button onClick={handleExportClick}>Download CSV</button>
        </div>
      )}
    </div>
  );
};

export default ExportButton;
