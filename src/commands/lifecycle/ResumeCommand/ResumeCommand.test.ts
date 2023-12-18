import { ResumeCommand, IResumeCommandParams } from "./ResumeCommand";

describe("Given a ResumeCommand", () => {
  let command = new ResumeCommand();

  beforeEach(async () => {
    command = new ResumeCommand();
    // clear mocks
  });

  describe("with valid params", () => {
    let params: IResumeCommandParams;

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
