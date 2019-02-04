import { StackDriverClient as Driver } from "./StackDriverClient";
import { checkLogger } from "../util/checkLogger";

describe("StackDriverClient", () => {
  it("Subscribes to StackDriverClient + receives message", () => {
    checkLogger(Driver);
  });
});
