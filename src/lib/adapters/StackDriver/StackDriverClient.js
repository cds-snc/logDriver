/*
+------------------------------------------------------------------+
| import { Logger, StackDriverClient } from "@cdssnc/logger";      |
|                                                                  |
|  StackDriverClient.init(                                         |
|    "your-api-key",                                               |
|    "your-project-id"                                             |
|   );                                                             |
|                                                                  |
|    // window.onError should now catch and report to StackDriver  | 
|                                                                  |                     
|    alt:                                                          |
|    Logger.subscribe("error", StackDriverClient.log);             |
|    Logger.warn("works as well");                                 |  
|                                                                  |
+------------------------------------------------------------------+
*/

import { windowExists } from "../../../windowExists";

export const StackDriverClient = {};
let errorHandler = false;

if (windowExists()) {
  const StackTrace = require("stacktrace-js");
  window.StackTrace = StackTrace;
  const StackdriverErrorReporter = require("stackdriver-errors-js")
    .StackdriverErrorReporter;
  errorHandler = new StackdriverErrorReporter();
}

StackDriverClient.init = (apiKey, projectId) => {
  try {
    errorHandler.start({
      key: apiKey,
      projectId: projectId
    });
  } catch (e) {
    console.log(e.message);
  }
};

StackDriverClient.log = (level, payload) => {
  if (!payload || !errorHandler) {
    console.log("payload or errorHandler not set");
    return;
  }

  try {
    switch (level) {
      default:
        errorHandler.report(JSON.stringify(payload));
        break;
    }
  } catch (e) {
    console.log(e.message);
  }
};
