"use strict";

import uuidv4 from "uuid/v4";
import { consoleLogger } from "./adapters";

class Logger {
  static debug(msg, options = {}) {
    return this.generatePayload("debug", msg, options);
  }

  static error(msg, options = {}) {
    return this.generatePayload("error", msg, options);
  }

  static info(msg, options = {}) {
    return this.generatePayload("info", msg, options);
  }

  static warn(msg, options = {}) {
    return this.generatePayload("warn", msg, options);
  }

  static generatePayload(level, msg, options) {
    const standardPayload = {
      cloudEventsVersion: "0.2",
      contentType: "text/plain",
      data: msg,
      eventID: uuidv4(),
      eventTime: new Date().toISOString(),
      eventType: "com.github.cds-snc." + level,
      eventTypeVersion: "1.0",
      source: "/"
    };

    const payload = Object.assign(standardPayload, options);
    this.output(level, payload);
    return payload;
  }

  static output(level, payload) {
    consoleLogger(level, payload);
  }
}

export default Logger;
