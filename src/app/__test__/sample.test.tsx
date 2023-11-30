import React from "react";
import { render } from "@testing-library/react";
import Sample from "../components/Sample";

describe("Sample", () => {
  it("コンポーネントのレンダリングのテスト", async () => {
    render(<Sample />);
  });
});
