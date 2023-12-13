import { LoginCommand, ILoginCommandParams } from "./LoginCommand";

describe("Given a LoginCommand", () => {
  let command = new LoginCommand();

  beforeEach(async () => {
    command = new LoginCommand();
  });

  describe("with valid params", () => {
    let params: ILoginCommandParams;

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
    let params: ILoginCommandParams;

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
