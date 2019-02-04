import { StackDriverNode as Driver } from "./StackDriverNode";
import { checkLogger } from "../util/checkLogger";

describe("StackDriverNode", () => {
  it("Subscribes to StackDriverNode + receives message", () => {
    checkLogger(Driver);
  });
});
