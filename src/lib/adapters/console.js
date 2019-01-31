export const consoleLogger = (level, payload) => {
  switch (level) {
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
    default:
      break;
  }
};
