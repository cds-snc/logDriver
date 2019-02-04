# CDS Log Driver

[![Maintainability](https://api.codeclimate.com/v1/badges/f3fbbbb66e6823d680c6/maintainability)](https://codeclimate.com/github/cds-snc/logDriver/maintainability)

Creates a standardized logging format for output + log collection.

```javascript
standardPayload = {
    cloudEventsVersion: "0.2",
    contentType: "text/plain",
    data: msg,
    eventID: uuidv4(),
    eventTime: new Date().toISOString(),
    eventType: "com.github.cds-snc." + level,
    eventTypeVersion: "1.0",
    source: "/"
};
```

## Adapters

- StackDriver Node
- StackDriver Client