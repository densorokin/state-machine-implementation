import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  test("btn render", () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText("TEST")).toBeInTheDocument();
  });
});
