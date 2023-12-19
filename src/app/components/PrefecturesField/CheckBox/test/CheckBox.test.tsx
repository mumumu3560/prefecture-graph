import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import CheckBoxView from "../CheckBox_view";
import React from "react";

//参考
//https://typescriptbook.jp/tutorials/component-test
//https://stackoverflow.com/questions/69193525/how-to-get-the-correct-classname-in-react-testing-if-there-are-multiple-classnam

beforeAll(() => {
  // Cookieの設定
  Object.defineProperty(global.document, "cookie", {
    writable: true,
    configurable: true,
    value: "",
  });
});

afterEach(() => {
  // Cookieの値は都度初期化
  Object.defineProperty(global.document, "cookie", {
    writable: true,
    configurable: true,
    value: "",
  });
});

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      asPath: "/",
      refresh: () => {
        return;
      },
    };
  },
}));

describe("CheckBoxコンポーネントテスト", () => {
  test("test1 チェックボックスのラベルのテスト", () => {
    const { getByText } = render(
      <CheckBoxView prefCode={1} prefName="青森" cookieData="" areaCode={1} />,
    );

    const labelElement = getByText(/青森/i);
    expect(labelElement).toBeInTheDocument();
  });

  //test2
  test("test2 Cookieのデータが渡されたときにチェックされるか", () => {
    const { getByLabelText } = render(
      <CheckBoxView
        prefCode={2}
        prefName="青森"
        cookieData="青森"
        areaCode={1}
      />,
    );

    const checkboxElement = getByLabelText(/青森/i);
    expect(checkboxElement).toBeChecked();
  });

  //test3
  test("test3 チェックボックスのデフォルトスタイルのテスト", () => {
    const { getByLabelText } = render(
      <CheckBoxView prefCode={1} prefName="青森" cookieData="" areaCode={1} />,
    );
    const checkboxElement = getByLabelText(/青森/i);
    expect(checkboxElement.parentNode).toHaveClass("checkboxContainer");
    expect(checkboxElement.parentNode).not.toHaveClass("checked");
  });

  //test4
  test("test4 クリック後のチェックボックスのスタイル", () => {
    const { getByLabelText } = render(
      <CheckBoxView prefCode={1} prefName="青森" cookieData="" areaCode={1} />,
    );

    const checkboxLabel = getByLabelText(/青森/i);

    fireEvent.click(checkboxLabel);

    expect(checkboxLabel.parentNode).toHaveClass("checked");
  });

  //test5 cookieのテスト
  //実際にはdocument.cookieには二回値が入っているがそれのテストがわからない
  test("test5 Cookieテスト", () => {
    const { getByLabelText } = render(
      <CheckBoxView prefCode={1} prefName="青森" cookieData="" areaCode={1} />,
    );

    const checkboxLabel = getByLabelText(/青森/i);

    expect(checkboxLabel).not.toBeChecked();

    fireEvent.click(checkboxLabel);

    expect(checkboxLabel).toBeChecked();

    expect(document.cookie).toContain(`prefName=${encodeURIComponent("青森")}`);

    //expect(document.cookie).toContain(`prefCode=${encodeURIComponent(1)}`);
  });
});
