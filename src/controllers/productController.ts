import { Request, Response } from "express";
import { ProductStore, Product } from "../db/models/product";
const productStore = new ProductStore();

export const getAllProducts = async (_req: Request, res: Response) => {
  try {
    const products = await productStore.index();
    res.send(
      products.length ? products : { msg: "no products could be found " }
    );
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

export const getOneProduct = async (req: Request, res: Response) => {
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
};

export const create = async (req: Request, res: Response) => {
  const product: Product = {
    ...req.body,
  };
  try {
    const newProduct = await productStore.create(product);
    res.send({ msg: "this is created product", product: newProduct });
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};
// fix the logic
export const edit = async (req: Request, res: Response) => {
  const product: Product = {
    id: req.params.id,
    ...req.body,
  };
  try {
    const edited = await productStore.edit(product);
    res.send({ msg: `this is edited product`, edited });
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const deleted = await productStore.delete(req.params.id);
    res.send({ msg: "this is id of deleted product", deleted });
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};