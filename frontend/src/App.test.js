import { render, screen } from "@testing-library/react";
import App from "../src/App";

test("renders Hello Soma", () => {
  render(<App />);
  expect(screen.getByText(/Hello Soma/i)).toBeInTheDocument();
});
