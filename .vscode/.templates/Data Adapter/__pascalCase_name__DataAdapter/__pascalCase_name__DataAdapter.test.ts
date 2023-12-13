import React from "react";
import { {{pascalCase name}}DataAdapter } from "./{{pascalCase name}}DataAdapter";

describe("Given a {{pascalCase name}}DataAdapter", () => {
  let adapter: {{pascalCase name}}DataAdapter;

  beforeEach(async () => {
    adapter = new {{pascalCase name}}DataAdapter();
  });

  describe("when filled", () => {
    const expected = null;

    it("should match expected data", async () => {
      expect(adapter.data).toBeNull();
      await adapter.fill();
      expect(adapter.data).toBe(expected);
    });
  });

  describe("when not filled", () => {
    it("data should be null", () => {
      expect(adapter.data).toBeNull();
    });
  });
});
