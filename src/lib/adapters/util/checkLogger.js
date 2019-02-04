import Logger from "../../logger";

export const checkLogger = Driver => {
  Driver.log = jest.fn();
  const callee = Driver.log;
  Logger.subscribe("error", callee);
  Logger.debug("The client message");
  expect(callee).toBeCalled();
  expect(callee.mock.calls[0][0]).toBe("debug");
  expect(callee.mock.calls[0][1].data).toBe("The client message");
};
