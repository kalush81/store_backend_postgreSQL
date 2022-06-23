import { JacketStore } from "../../db/models/jacket";

const storeJacket = new JacketStore();

describe("jacket model", () => {
  it("should have an index method", () => {
    expect(storeJacket.index).toBeDefined();
  });
  it("should return list fo jackets, empty arr ", async () => {
    const jackets = await storeJacket.index();
    expect(jackets).toEqual([]);
  });
  it('create method should add a jacket', async () => {
    const result = await storeJacket.create({
      name: 'burton snb jacket',
      description: 'nice winter jacket',
      quantity: 1,
      price: 100
    });
    expect(result).toEqual({
      id: 1,
      name: 'burton snb jacket',
      description: 'nice winter jacket',
      quantity: 1,
      price: 100
    });
  });

  it('index method should return a list of books', async () => {
    const result = await storeJacket.index();
    expect(result).toEqual([{
      id: 1,
      name: 'burton snb jacket',
      description: 'nice winter jacket',
      quantity: 1,
      price: 100
    }]);
  });

  it('show method should return the correct book', async () => {
    const result = await storeJacket.getOnById("1");
    expect(result).toEqual({
      id: 1,
      name: 'burton snb jacket',
      description: 'nice winter jacket',
      quantity: 1,
      price: 100
    });
  });

  it('delete method should remove the book', async () => {
    await storeJacket.delete("1");
    const result = await storeJacket.index()
    expect(result).toEqual([]);
  });
});
