import { JacketStore } from "../../db/models/jacket";

const storeJacket = new JacketStore();

describe("xxx", () => {
  it("should work", () => {
    expect(storeJacket.index).toBeDefined();
  });
  it("should return list fo jackets, empty arr ", async () => {
    const jackets = await storeJacket.index();
    expect(jackets).toEqual([]);
  });
});
