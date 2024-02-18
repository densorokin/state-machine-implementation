import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  test("btn render", () => {
    render(<Button>TEST</Button>);
    expect(screen.getByTestId("button-wrap")).toBeInTheDocument();
  });

  test("btn class", () => {
    render(<Button>TEST</Button>);

    const btn = screen.getByTestId("button");
    expect(btn).toHaveClass("btn");
    fireEvent.click(btn);
  });
});
