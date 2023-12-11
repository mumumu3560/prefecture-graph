
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import React from "react";
import ButtonSection from "../../ChartComponents/ButtonSection";


describe("ButtonSectionのテスト", () => {
    test("テスト1 関数に与えられる引数がそれぞれのボタンの文字となっていることの確認", () => {
        // モック関数の作成
        const mockHandleGraphChange = jest.fn();
      
        const { getByText } = render(
          <ButtonSection handleGraphChange={mockHandleGraphChange} />
        );
      
        // 各ボタンをクリックして動作を確認
        fireEvent.click(getByText("総人口"));
        //mockHandleGraphChangeが引数"総人口"で呼び出されたということ。
        expect(mockHandleGraphChange).toHaveBeenCalledWith("総人口");
      
        fireEvent.click(getByText("年少人口"));
        expect(mockHandleGraphChange).toHaveBeenCalledWith("年少人口");
      
        fireEvent.click(getByText("生産年齢人口"));
        expect(mockHandleGraphChange).toHaveBeenCalledWith("生産年齢人口");
      
        fireEvent.click(getByText("老年人口"));
        expect(mockHandleGraphChange).toHaveBeenCalledWith("老年人口");
      });


      test("テスト2 テスト1と同様だが間違っている場合。", () => {
        // モック関数の作成
        const mockHandleGraphChange = jest.fn();
      
        const { getByText } = render(
          <ButtonSection handleGraphChange={mockHandleGraphChange} />
        );
      
        // 各ボタンをクリックして動作を確認
        fireEvent.click(getByText("総人口"));
        //mockHandleGraphChangeが引数"総人口"で呼び出されたということ。
        expect(mockHandleGraphChange).not.toHaveBeenCalledWith("");
      
        fireEvent.click(getByText("年少人口"));
        expect(mockHandleGraphChange).not.toHaveBeenCalledWith("年人口");
      
        fireEvent.click(getByText("生産年齢人口"));
        expect(mockHandleGraphChange).not.toHaveBeenCalledWith("生産年齢人口 ");
      
        fireEvent.click(getByText("老年人口"));
        expect(mockHandleGraphChange).not.toHaveBeenCalledWith("老");
      });

  });
