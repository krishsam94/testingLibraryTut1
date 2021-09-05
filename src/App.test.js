import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import React from "react";

test("testId", () => {
  render(<div data-testid="custom-element" />);
  const element = screen.getByTestId("custom-element");
  expect(element).toBeInTheDocument();
});

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText("Hello");
  expect(linkElement).toBeInTheDocument();
});

test("renders learn react link 2", () => {
  render(<App />);
  const linkElement = screen.getByTestId("helloCls");
  expect(linkElement).toHaveTextContent(/hello/i);
});