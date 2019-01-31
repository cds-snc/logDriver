/* eslint no-console: 0 */
import { consoleLogger } from "../../../lib/adapters/console";

describe("consoleLogger", () => {
  it("logs out debug level output", () => {
    console.debug = jest.fn();
    consoleLogger("debug", "foo");
    expect(console.debug).toBeCalled();
  });

  it("logs out error level output", () => {
    console.error = jest.fn();
    consoleLogger("error", "foo");
    expect(console.error).toBeCalled();
  });

  it("logs out info level output", () => {
    console.info = jest.fn();
    consoleLogger("info", "foo");
    expect(console.info).toBeCalled();
  });

  it("logs out warn level output", () => {
    console.warn = jest.fn();
    consoleLogger("warn", "foo");
    expect(console.warn).toBeCalled();
  });
});
