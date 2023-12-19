import "@testing-library/jest-dom";

import { data1, data2, data3, data4 } from "./data";
import { expected1, expected2, expected3, expected4 } from "./expected";

import { convertPrefectureData } from "../../recharts_data_converting";

describe("recharts_data_converting.tsのテスト", () => {
  test("test2 data1が正しく変換されるか", () => {
    const result = convertPrefectureData(data1);

    expect(result).toEqual(expected1);
  });

  test("test2 data2が正しく変換されるか", () => {
    const result = convertPrefectureData(data2);

    expect(result).toEqual(expected2);
  });

  test("test3 変換先がおかしいとき", () => {
    const result = convertPrefectureData(data3);

    expect(result).not.toEqual(expected3);
  });

  test("test4 一つの都道府県大量", () => {
    const result = convertPrefectureData(data4);

    expect(result).toEqual(expected4);
  });
});
