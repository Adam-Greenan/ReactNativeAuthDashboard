import { {{pascalCase name}}Adapter } from "./{{pascalCase name}}Adapter";

describe("Given a {{pascalCase name}}Adapter", () => {
  let adapter: {{pascalCase name}}Adapter;

  beforeEach(async () => {
    adapter = new {{pascalCase name}}Adapter();
    // mock data sources
  });

  it("should match expected data", async () => {
    expect(adapter.data).toBeNull();
  });
});
