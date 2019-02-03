import Logger from "../../../lib/logger";
import { StackDriverNodeLogger } from "../../../lib/adapters/StackDriverNode";

describe("StackDriverNodeLogger", () => {
  it("Subscribes to logger and receives message", () => {
    StackDriverNodeLogger.log = jest.fn();
    const callee = StackDriverNodeLogger.log;
    Logger.subscribe("error", callee);
    Logger.debug("The message");
    expect(callee).toBeCalled();
    expect(callee.mock.calls[0][0]).toBe("debug");
    expect(callee.mock.calls[0][1].data).toBe("The message");
  });
});
