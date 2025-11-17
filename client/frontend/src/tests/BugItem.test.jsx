import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { expect, test } from '@jest/globals';
import { BrowserRouter } from "react-router-dom";
import BugItem from "../components/BugItem";




test("renders bug item correctly", () => {
  const bug = { _id: "1", title: "Test Bug", description: "Bug desc", status: "open" };
  
  render(
    <BrowserRouter>
      <BugItem bug={bug} />
    </BrowserRouter>
  );

  expect(screen.getByText(/Test Bug/i)).toBeInTheDocument();
  expect(screen.getByText(/Bug desc/i)).toBeInTheDocument();
  expect(screen.getByText(/Status:/i)).toHaveTextContent("Status: open");
});
