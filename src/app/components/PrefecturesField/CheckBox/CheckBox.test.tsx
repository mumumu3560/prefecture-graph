import "@testing-library/jest-dom";
import { render, /*screen, */ fireEvent } from "@testing-library/react";
import CheckBoxView from "./CheckBox_view";
import React from "react";

//参考
//https://typescriptbook.jp/tutorials/component-test
//https://stackoverflow.com/questions/69193525/how-to-get-the-correct-classname-in-react-testing-if-there-are-multiple-classnam

/*

*/
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      asPath: '/',
      refresh: () => {return;},
    };
  },
}));

//jest.mock("next/navigation", () => ({ useRouter() { return { push: () => { return; }, }; },))
//jest.mock('next/router', () => require('next-router-mock'));

//jest.mock('next/navigation', () => require('next/router'));


describe("Buttonコンポーネントのテスト", () => {
  //test1 チェックボックスのラベルが正しく表示されているかこれはTokyoと表示されるか
  test("test1 renders checkbox with correct label", () => {
    const { getByText } = render(
      <CheckBoxView prefCode={1} prefName="青森" cookieData="" />,
    );

    const labelElement = getByText(/青森/i);
    expect(labelElement).toBeInTheDocument();
  });

  //test2 チェックボックスにcookieDataが渡されたときにチェックボックスがチェックされているか
  test("test2 handles checkbox change", () => {
    const { getByLabelText } = render(
      <CheckBoxView
        prefCode={2}
        prefName="青森"
        cookieData="青森"
      />,
    );

    const checkboxElement = getByLabelText(/青森/i);
    expect(checkboxElement).toBeChecked();

  });

  //ここから下が成功しない
  
  //test3 チェックボックスのスタイルが正しく適用されているか(デフォルト)
  test("test3 renders checkbox with default style", () => {
    const { getByLabelText } = render(
      <CheckBoxView prefCode={1} prefName="青森" cookieData="" />,
    );
    const checkboxElement = getByLabelText(/青森/i);
    expect(checkboxElement.parentNode).toHaveClass("checkboxContainer");
    // デフォルトスタイルが適用されていることを確認
    expect(checkboxElement.parentNode).not.toHaveClass("checked");
  });

  //test4 チェックボックスのスタイルが正しく適用されているか(チェックボックスクリック後)
  test("test4 changes style on checkbox click", () => {
    const { getByLabelText } = render(
      <CheckBoxView prefCode={1} prefName="青森" cookieData="" />,
    );

    const checkboxLabel = getByLabelText(/青森/i);

    // チェックボックスをクリックしてスタイルが変更されたことを確認
    fireEvent.click(checkboxLabel);

    expect(checkboxLabel.parentNode).toHaveClass("checked");
  });
});
