import Logger from "../../logger";
import { StackDriverClient } from "./StackDriverClient";

describe("StackDriverClient", () => {
  it("Subscribes to logger and receives message", () => {
    StackDriverClient.log = jest.fn();
    const callee = StackDriverClient.log;
    Logger.subscribe("error", callee);
    Logger.debug("The client message");
    expect(callee).toBeCalled();
    expect(callee.mock.calls[0][0]).toBe("debug");
    expect(callee.mock.calls[0][1].data).toBe("The client message");
  });
});
