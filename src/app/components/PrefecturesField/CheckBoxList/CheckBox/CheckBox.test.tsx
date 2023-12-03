import "@testing-library/jest-dom";
import { render, /*screen, */ fireEvent} from "@testing-library/react";
import CheckBoxView from "./CheckBox_view";
//import CheckBoxLogic from "./CheckBox_logic";
import React from "react";

//参考https://typescriptbook.jp/tutorials/component-test
describe("Buttonコンポーネントのテスト", () => {

    //チェックボックスのラベルが正しく表示されているかこれはTokyoと表示されるか
    test('renders checkbox with correct label', () => {
        const { getByText } = render(
          <CheckBoxView prefCode={1} prefName="Tokyo" selectedPrefectures={[]} />
        );
      
        const labelElement = getByText(/Tokyo/i);
        expect(labelElement).toBeInTheDocument();
    });

    //チェックボックスに配列が渡されたときにチェックボックスのprefCodeが正しく渡されるか
    test('handles checkbox change', () => {
        const selectedPrefectures: number[] = [];
        const { getByLabelText } = render(
          <CheckBoxView prefCode={2} prefName="Tokyo" selectedPrefectures={selectedPrefectures} />
        );
      
        const checkboxElement = getByLabelText(/Tokyo/i);
      
        // チェックボックスをクリックしてチェックを切り替える
        fireEvent.click(checkboxElement);
      
        // チェックが正しく切り替わったことを確認
        expect(selectedPrefectures[0]).toEqual(2);
    });
});
