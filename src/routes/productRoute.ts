import express, { Router } from "express";
import {
  getAllProducts,
  getOneProduct,
  create,
  edit,
  remove,
} from "../controllers/productController";

const productRouter: Router = express.Router();

productRouter.get("/products", getAllProducts);
productRouter.get("/product/:id", getOneProduct);
productRouter.post("/product/create", create);
productRouter.put("/product/:id/edit", edit); //the logic is wrong here !
productRouter.delete("/product/:id/delete", remove);

export default productRouter;
