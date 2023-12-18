import { getSnapshot } from "mobx-state-tree";
// import { mockAppSnapshot } from "test/mockAppSnapshot";

import { IApp } from "./App";

describe("Given a App model", () => {
  let model: IApp;

  // beforeEach(() => {
  //   model = App.create(mockAppSnapshot());
  // });

  it("should match expected data", () => {
    const expected = {};
    expect(getSnapshot(model)).toMatchObject(expected);
  });
});
