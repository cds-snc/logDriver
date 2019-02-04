import { ErrorReporting } from "@google-cloud/error-reporting";

/*
+------------------------------------------------------------------+
| import { StackDriverNodeLogger } from "@cdssnc/StackDriverNode"  |                                |
| Logger.subscribe("error", StackDriverNodeLogger.log)             |
+------------------------------------------------------------------+
*/

export const StackDriverNodeLogger = {};
StackDriverNodeLogger.log = (level, payload) => {
  const errors = new ErrorReporting({ reportMode: "always" });
  if (!payload) return;
  switch (level) {
    default:
      errors.report(JSON.stringify(payload));
      console.log("stack driver =>", "level =>", level, "payload =>", payload);
      break;
  }
};
