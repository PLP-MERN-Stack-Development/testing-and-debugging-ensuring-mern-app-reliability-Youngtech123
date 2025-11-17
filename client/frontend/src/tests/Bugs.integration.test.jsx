import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import Bugs from "../components/Bugs";
import { BrowserRouter } from "react-router-dom";
import { expect, beforeAll, afterEach, afterAll, test } from "@jest/globals";
import "@testing-library/jest-dom";



const server = setupServer(
  rest.get("http://localhost:5000/api/bugs", (req, res, ctx) => {
    return res(ctx.json([
      { _id: "1", title: "Bug 1", description: "Desc 1", status: "open" }
    ]));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("renders fetched bugs", async () => {
  render(
    <BrowserRouter>
      <Bugs />
    </BrowserRouter>
  );

  await waitFor(() => screen.getByText("Bug 1"));
  expect(screen.getByText("Bug 1")).toBeInTheDocument();
  expect(screen.getByText("Desc 1")).toBeInTheDocument();
});
