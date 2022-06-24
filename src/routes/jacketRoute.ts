import express, { Router, Request, Response } from "express";
import { Product, ProductStore } from "../db/models/product";

const productRouter: Router = express.Router();

const jacketStore = new ProductStore()

productRouter.get("/jackets", async (_req: Request, res: Response) => {
  try {
    const jackets = await jacketStore.index()
    res.send(jackets);
  } catch (err) {
    res.status(400);
    res.json({err: 'could not send jackets'})
  }
});

productRouter.get("/products/:id", (_req: Request, res: Response) => {
  try {
    res.send("this is the getOnById route");
  } catch (err) {
    res.status(400);
    res.json(err);
  }
});

productRouter.post("/products", (req: Request, res: Response) => {
  const product: Product = {
    name: req.body.name,
    quantity: req.body.quantity,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category
  };
  try {
    res.send("this is the CREATE route");
  } catch (err) {
    res.status(400);
    res.json(err);
  }
});

productRouter.put("/products/:id", (req: Request, res: Response) => {
  const product: Product = {
    id: Number(req.params.id),
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    quantity: req.body.quantity,
    category: req.body.category
  };
  try {
    res.send(`this is the EDIT route, ${product}`);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
});

productRouter.delete("/products/:id", (_req: Request, res: Response) => {
  try {
    res.send("this is the DELETE route");
  } catch (err) {
    res.status(400);
    res.json(err);
  }
});

export default productRouter;
