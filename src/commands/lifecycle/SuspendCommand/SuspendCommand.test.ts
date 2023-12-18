import { SuspendCommand, ISuspendCommandParams } from "./SuspendCommand";

describe("Given a SuspendCommand", () => {
  let command = new SuspendCommand();

  beforeEach(async () => {
    command = new SuspendCommand();
    // clear mocks
  });

  describe("with valid params", () => {
    let params: ISuspendCommandParams;

    beforeEach(async () => {
      // init params
    });

    it("should be able to exectue", () => {
      expect(command.canExecute()).toBe(true);
    });

    describe("when executed", () => {
      it("should <do something>", async () => {
        await command.execute(params);
      });
    });
  });
});
