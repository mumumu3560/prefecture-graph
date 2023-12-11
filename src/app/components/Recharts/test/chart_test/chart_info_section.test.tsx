import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import ChartInfoSection from "../../ChartComponents/ChartInfoSection";

describe("ChartInfoSectionのテスト", () => {
    
    test("test1 href要素が正しいリンクを持っているか", () => {
        const props = {
            activeGraph: "aaa",
            boundaryYear: 2022,
        };
    
        const { getByText, getByRole } = render(
            <ChartInfoSection {...props} />
        );
    
        expect(getByText("aaa推移")).toBeInTheDocument();
        expect(getByText("※2022年以降は推測値 出典:")).toBeInTheDocument();
        expect(getByRole("link", { name: /RESAS/i })).toHaveAttribute(
            "href",
            "https://resas.go.jp/"
        );


        expect(getByText("※グラフツール:")).toBeInTheDocument();
        expect(getByRole("link", { name: /Recharts/i })).toHaveAttribute(
            "href",
            "https://recharts.org/en-US/"
        );
    });

});