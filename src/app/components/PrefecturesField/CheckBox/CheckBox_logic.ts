export function CheckBoxLogic(
  prefCode: number,
  isChecked: boolean,
  selectedPrefectures: number[],
): void {
  if (isChecked) {
    console.log("チェックされました");
    selectedPrefectures.push(prefCode);
  } else {
    console.log("チェックが外されました");
    const index = selectedPrefectures.indexOf(prefCode);
    selectedPrefectures.splice(index, 1);
  }
}
