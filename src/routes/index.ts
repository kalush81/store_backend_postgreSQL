import express from "express";
import productRouter from "./productRoute";

const allRoutes = (app: express.Application) => {
  app.use(productRouter);
};

export default allRoutes;
