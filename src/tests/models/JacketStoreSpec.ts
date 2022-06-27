import { ProductStore } from "../../db/models/product";

const storeProduct = new ProductStore();

describe("product model", () => {
  it("should have an index method", () => {
    expect(storeProduct.index).toBeDefined();
  });
  it("should return list of products, empty arr ", async () => {
    const products = await storeProduct.index();
    expect(products).toEqual([]);
  });
  it("create method should add a product", async () => {
    const result = await storeProduct.create({
      name: "burton snb jacket",
      description: "nice winter jacket",
      quantity: 1,
      price: 100,
      category: "jacket",
    });
    expect(result).toEqual({
      id: 1,
      name: "burton snb jacket",
      description: "nice winter jacket",
      quantity: 1,
      price: 100,
      category: "jacket",
    });
  });

  it("index method should return a list of products", async () => {
    const result = await storeProduct.index();
    expect(result).toEqual([
      {
        id: 1,
        name: "burton snb jacket",
        description: "nice winter jacket",
        quantity: 1,
        price: 100,
        category: "jacket",
      },
    ]);
  });

  it("show method should return the correct product", async () => {
    const result = await storeProduct.getOnById("1");
    expect(result).toEqual({
      id: 1,
      name: "burton snb jacket",
      description: "nice winter jacket",
      quantity: 1,
      price: 100,
      category: "jacket",
    });
  });

  it("edit method should edit the product", async () => {
    const product = {
      id: 1,
      name: "burton snb jacket",
      description: "nice winter jacket",
      quantity: 5,
      price: 50,
      category: "jacket",
    };
    await storeProduct.edit(product);
    const result = await storeProduct.index();
    expect(result).toEqual([product]);
  });

  it("delete method should remove the product", async () => {
    await storeProduct.delete("1");
    const result = await storeProduct.index();
    expect(result).toEqual([]);
  });

  it("create method should add a product", async () => {
    const result = await storeProduct.create({
      name: "burton snb jacket",
      description: "nice winter jacket",
      quantity: 1,
      price: 100,
      category: "jacket",
    });
    expect(result).toEqual({
      id: 2,
      name: "burton snb jacket",
      description: "nice winter jacket",
      quantity: 1,
      price: 100,
      category: "jacket",
    });
  });
});
