import { LaunchCommand, ILaunchCommandParams } from "./LaunchCommand";

describe("Given a LaunchCommand", () => {
  let command = new LaunchCommand();

  beforeEach(async () => {
    command = new LaunchCommand();
    // clear mocks
  });

  describe("with valid params", () => {
    let params: ILaunchCommandParams;

    beforeEach(async () => {
      // init params
    });

    it("should be able to exectue", () => {
      expect(command.canExecute(params)).toBe(true);
    });

    describe("when executed", () => {
      it("should <do something>", async () => {
        await command.execute(params);
      });
    });
  });
});
