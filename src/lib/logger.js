"use strict";

import uuidv4 from "uuid/v4";
import { consoleLogger } from "./adapters";

class Logger {
  static debug(msg, options = {}) {
    const payload = this.generatePayload("debug", msg, options);
    this.output(payload);
    return payload;
  }

  static error(msg, options = {}) {
    const payload = this.generatePayload("error", msg, options);
    this.output(payload);
    return payload;
  }

  static info(msg, options = {}) {
    const payload = this.generatePayload("info", msg, options);
    this.output(payload);
    return payload;
  }

  static warn(msg, options = {}) {
    const payload = this.generatePayload("warn", msg, options);
    this.output(payload);
    return payload;
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

    return Object.assign(standardPayload, options);
  }

  static output(payload) {
    consoleLogger(payload);
  }
}

export default Logger;
