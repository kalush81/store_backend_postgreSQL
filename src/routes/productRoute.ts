import express, { Router, Request, Response } from "express";
import { Product, ProductStore } from "../db/models/product";

const productRouter: Router = express.Router();

const productStore = new ProductStore();

productRouter.get("/products", async (_req: Request, res: Response) => {
  try {
    const products = await productStore.index();
    res.send(
      products.length ? products : { msg: "no products could be found " }
    );
  } catch (err) {
    res.status(400);
    res.json({
      err: `could not send products. Relation products probably doesn't exist`,
    });
  }
});

productRouter.get("/products/:id", async (req: Request, res: Response) => {
  try {
    const product = await productStore.getOnById(req.params.id);
    res.send(
      product
        ? product
        : { msg: `product with id: ${req.params.id} doesn't exist` }
    );
  } catch (err) {
    res.status(400);
    res.json(err);
  }
});

productRouter.post("/products", async (req: Request, res: Response) => {
  const product: Product = {
    ...req.body,
  };
  try {
    const newProduct = await productStore.create(product);
    res.send({ msg: "this is the CREATE route", product: newProduct });
  } catch (err) {
    res.status(400);
    res.json(err);
  }
});

productRouter.put("/products/:id", async (req: Request, res: Response) => {
  const product: Product = {
    id: req.params.id,
    ...req.body,
  };
  try {
    const edited = await productStore.edit(product);
    res.send({ msg: `this is the EDIT route`, edited });
  } catch (err) {
    res.status(400);
    res.json(err);
  }
});

productRouter.delete("/products/:id", async (req: Request, res: Response) => {
  try {
    const deleted = await productStore.delete(req.params.id)
    res.send({ msg: "this is the DELETE route", deleted });
  } catch (err) {
    res.status(400);
    res.json(err);  
  }
});



export default productRouter;
