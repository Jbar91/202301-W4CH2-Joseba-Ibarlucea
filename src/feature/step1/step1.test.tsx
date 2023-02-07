import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Step1 from "./step1";

describe("Given the step1 comp", () => {
  describe("When it's instantiated", () => {
    test("Then it should render", () => {
      render(<Step1 />);
      const btn = screen.getByRole("button", { name: "Next" });
      expect(btn).toBeInTheDocument();
    });
  });
});
