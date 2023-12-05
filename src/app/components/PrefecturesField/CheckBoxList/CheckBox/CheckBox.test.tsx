import "@testing-library/jest-dom";
import { render, /*screen, */ fireEvent } from "@testing-library/react";
import CheckBoxView from "./CheckBox_view";
//import CheckBoxLogic from "./CheckBox_logic";
import React from "react";
//import userEvent from '@testing-library/user-event';

//参考https://typescriptbook.jp/tutorials/component-test
//https://stackoverflow.com/questions/69193525/how-to-get-the-correct-classname-in-react-testing-if-there-are-multiple-classnam

describe("Buttonコンポーネントのテスト", () => {
  //test1 チェックボックスのラベルが正しく表示されているかこれはTokyoと表示されるか
  test("renders checkbox with correct label", () => {
    const { getByText } = render(
      <CheckBoxView prefCode={1} prefName="青森" selectedPrefectures={[]} />,
    );

    const labelElement = getByText(/青森/i);
    expect(labelElement).toBeInTheDocument();
  });

  //test2 チェックボックスに配列が渡されたときにチェックボックスのprefCodeが正しく渡されるか
  test("handles checkbox change", () => {
    const selectedPrefectures: number[] = [];
    const { getByLabelText } = render(
      <CheckBoxView
        prefCode={2}
        prefName="青森"
        selectedPrefectures={selectedPrefectures}
      />,
    );

    const checkboxElement = getByLabelText(/青森/i);

    // チェックボックスをクリックしてチェックを切り替える
    fireEvent.click(checkboxElement);

    // チェックが正しく切り替わったことを確認
    expect(selectedPrefectures[0]).toEqual(2);
  });

  //test3 チェックボックスのスタイルが正しく適用されているか(デフォルト)
  test("renders checkbox with default style", () => {
    const { container } = render(
      <CheckBoxView prefCode={1} prefName="青森" selectedPrefectures={[]} />,
    );
    expect(container.firstChild).toHaveClass("checkboxContainer");
    // デフォルトスタイルが適用されていることを確認
    expect(container.firstChild).not.toHaveClass("checked");
  });

  //test4 チェックボックスのスタイルが正しく適用されているか(チェックボックスクリック後)
  test("changes style on checkbox click", () => {
    const { container, getByLabelText } = render(
      <CheckBoxView prefCode={1} prefName="青森" selectedPrefectures={[]} />,
    );

    const checkboxContainer = container.firstChild;
    const checkboxLabel = getByLabelText(/青森/i);

    // チェックボックスがデフォルトスタイルであることを確認
    expect(checkboxContainer).toHaveClass("checkboxContainer");
    expect(checkboxContainer).not.toHaveClass("checked");

    // チェックボックスをクリックしてスタイルが変更されたことを確認
    fireEvent.click(checkboxLabel);

    expect(checkboxContainer).toHaveClass("checked");
  });
});
