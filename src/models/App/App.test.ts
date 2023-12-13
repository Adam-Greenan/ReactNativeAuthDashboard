import { App, IApp } from "./App";
import { getSnapshot } from "mobx-state-tree";

describe("Given a App model", () => {
  let model: IApp;

  beforeEach(() => {
    model = App.create();
  });

  it("should match expected data", () => {
    const expected = {};
    expect(getSnapshot(model)).toMatchObject(expected);
  });
});
