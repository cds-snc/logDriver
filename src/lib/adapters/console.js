export const consoleLogger = payload => {
  switch (payload.eventType.replace("com.github.cds-snc", "")) {
    case "debug":
      console.debug(payload);
      break;
    case "error":
      console.error(payload);
      break;
    case "info":
      console.info(payload);
      break;
    case "warn":
      console.warn(payload);
      break;
  }
};
