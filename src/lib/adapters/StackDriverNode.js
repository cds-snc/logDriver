// import { ErrorReporting } from "@google-cloud/error-reporting";

// const errors = new ErrorReporting({ reportMode: "always" });

// usage
// import { StackDriverNodeLogger } from "@cdssnc/logger/src/lib/adapters/StackDriverNode";
// Logger.subscribe("error", StackDriverNodeLogger.log)

export const StackDriverNodeLogger = {};
StackDriverNodeLogger.log = (level, payload) => {
  if (!payload) return;
  switch (level) {
    default:
      console.log("stack driver =>", "level =>", level, "payload =>", payload);
      break;
  }
};
