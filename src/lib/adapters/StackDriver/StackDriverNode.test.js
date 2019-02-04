import Logger from "../../logger";
import { StackDriverNode } from "./StackDriverNode";

describe("StackDriverNode", () => {
  it("Subscribes to logger and receives message", () => {
    StackDriverNode.log = jest.fn();
    const callee = StackDriverNode.log;
    Logger.subscribe("error", callee);
    Logger.debug("The message to node");
    expect(callee).toBeCalled();
    expect(callee.mock.calls[0][0]).toBe("debug");
    expect(callee.mock.calls[0][1].data).toBe("The message to node");
  });
});
