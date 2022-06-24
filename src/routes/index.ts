import express from "express";
import jacketRouter from "./jacketRoute";

const allRoutes = (app: express.Application) => {
  app.use(jacketRouter);
};

export default allRoutes;
