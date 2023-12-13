import { {{pascalCase name}}, I{{ pascalCase name }} } from "./{{pascalCase name}}";
import { getSnapshot } from "mobx-state-tree";

describe("Given a {{pascalCase name}} model", () => {
  let model: I{{ pascalCase name }};

  beforeEach(() => {
    model = {{ pascalCase name }}.create();
  });

  it("should match expected data", () => {
    const expected = {};
    expect(getSnapshot(model)).toMatchObject(expected);
  });
});
