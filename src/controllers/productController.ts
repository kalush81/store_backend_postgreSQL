import { Request, Response } from "express";
import { ProductStore, Product } from "../db/models/product";
const productStore = new ProductStore();

export const getAllProducts = async (_req: Request, res: Response) => {
  try {
    const products = await productStore.index();
    if (products.length) {
      res.status(200);
      return res.send(products);
    }
    res.status(204); //OK but no content
    res.send({ msg: "no products on the stock" });
  } catch (err) {
    res.status(500);
    res.json(`${(err as Error).message}`);
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
    res.status(500);
    res.json(`${(err as Error).message}`);
  }
};

export const create = async (req: Request, res: Response) => {
  const product: Product = {
    ...req.body,
  };
  try {
    const newProduct = await productStore.create(product);
    res.status(201) //OK created
    res.send({ msg: "this is created product", product: newProduct });
  } catch (err) {
    res.status(500);
    res.json(`${(err as Error).message}`);
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
    res.status(500);
    res.json(`${(err as Error).message}`);
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const deleted = await productStore.delete(req.params.id);
    res.send({ msg: "this is id of deleted product", deleted });
  } catch (err) {
    res.status(400);
    res.json(`${(err as Error).message}`);
  }
};
