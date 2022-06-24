import { ProductStore } from "../../db/models/product";

const storeProduct = new ProductStore();

describe("jacket model", () => {
  it("should have an index method", () => {
    expect(storeProduct.index).toBeDefined();
  });
  it("should return list fo jackets, empty arr ", async () => {
    const jackets = await storeProduct.index();
    expect(jackets).toEqual([]);
  });
  it("create method should add a jacket", async () => {
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

  it("index method should return a list of books", async () => {
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

  it("show method should return the correct book", async () => {
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

  it("delete method should remove the book", async () => {
    await storeProduct.delete("1");
    const result = await storeProduct.index();
    expect(result).toEqual([]);
  });
});
