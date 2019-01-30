'use strict'

class Logger {

  static debug(msg, options = {}){
    this.generatePayload("debug", msg, options)
  }

  static error(msg, options = {}){
    this.generatePayload("error", msg, options)
  }

  static info(msg, options = {}){
    this.generatePayload("info", msg, options)
  }

  static warn(msg, options = {}){
    this.generatePayload("warn", msg, options)
  }

  static generatePayload(level, msg, options){
    var standardPayload = {
                cloudEventsVersion: "0.1",
                contentType: "text/plain",
                data: msg,
                eventID: envDetails + "-" + Date.now(),
                eventTime: new Date().toISOString(),
                eventType: "com.github.cds-snc.vac-benefits-directory." + level,
                eventTypeVersion: "1.0",
                source: "/"
              };
            return Object.assign(standardPayload, options);
  }
}


export default Logger
