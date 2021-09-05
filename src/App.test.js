import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import React from "react";
import userEvent from "@testing-library/user-event";

//As the jest docs says, test and it are the same
//and describe is just for when you prefer your tests to be organized into groups

test("testId", () => {
  render(<div data-testid="custom-element" />);
  const element = screen.getByTestId("custom-element");
  expect(element).toBeInTheDocument();
});

/* test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText("Hello");
  expect(linkElement).toBeInTheDocument();
}); */

it("renders learn react link 2", () => {
  render(<App />);
  const linkElement = screen.getByTestId("helloCls");
  expect(linkElement).toHaveTextContent(/hello/i);
});

test("test click", () => {
  render(<App />);
  const clickEle = screen.getByTestId("h2Clk");
  userEvent.click(clickEle);

  const resDom = screen.getByTestId("result");

  expect(resDom).toHaveTextContent(1);
});

//Jest it vs test
/* Examining other test frameworks
Thus, I begin with filtering out the 3 most popular Javascript Testing frameworks and they are listed below.
- Mocha
- Jest
- Jasmine
After some searching, Jest is the latest to enter the market among these JS testing frameworks.
Mocha initial release was on 22 November 2011 and Jasmine is around the same time as well, between 2009–2011.
Both of these two frameworks also used it() instead of test().
My Wild Guess
After the whole discovery process, I can make my wild guess with enough evidence.
In order to make people effortlessly use Jest and reduce the learning curve by reuse a similar term. Thus, Jest team choose to expose it() as well.
Although test() sounds more intuitive and developers like it, but people who are familiar with Jasmine and Mocha can remain to use it() effortlessly. */
