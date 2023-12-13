import { {{pascalCase name}}Command, I{{pascalCase name}}CommandParams } from "./{{pascalCase name}}Command";

describe("Given a {{pascalCase name}}Command", () => {
  let command = new {{pascalCase name}}Command();

  beforeEach(async () => {
    command = new {{pascalCase name}}Command();
  });

  describe("with valid params", () => {
    let params: I{{pascalCase name}}CommandParams;

    beforeEach(async () => {
      // init params
    });

    it("should be able to execute", () => {
      expect(command.canExecute(params)).toBe(true);
    });

    describe("when executed", () => {
      it("should <do something>", async () => {
        await command.execute(params);
      });
    });
  });

  describe("with invalid params", () => {
    let params: I{{pascalCase name}}CommandParams;

    beforeEach(async () => {
      // init params
    });

    it("should not be able to execute", () => {
      expect(command.canExecute(params)).toBe(false);
    });

    describe("when executed", () => {
      it("should not <do something>", async () => {
        await command.execute(params);
      });
    });
  });
});
