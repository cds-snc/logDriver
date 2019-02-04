const windowExists = () => typeof window === "object";

let ErrorReporting;
if (!windowExists()) {
  ErrorReporting = require("@google-cloud/error-reporting").ErrorReporting;
}

/*
+------------------------------------------------------------------+
| import { Logger, StackDriverNodeLogger } from "@cdssnc/logger";  |                                |
| Logger.subscribe("error", StackDriverNodeLogger.log);            |
+------------------------------------------------------------------+
*/

export const StackDriverNode = {};
StackDriverNode.log = (level, payload) => {
  if (!ErrorReporting) {
    throw new Error("@google-cloud/error-reporting not set");
  }
  const errors = new ErrorReporting({ reportMode: "always" });
  if (!payload) return;
  switch (level) {
    default:
      console.log("StackDriver Node:", payload);
      errors.report(JSON.stringify(payload));
      break;
  }
};
