import { rest, setupWorker } from "msw";
import recipesData from "./recipes.json";

const handlers = [
  rest.get("/api/recipes", (req, res, ctx) => {
    console.log("before log");
    console.log(recipesData);
    console.log("after log");
    return res(ctx.status(200), ctx.json(recipesData));
  }),
];

export const worker = setupWorker(...handlers);
