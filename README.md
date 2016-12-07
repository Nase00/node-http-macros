Maps HTTP requests to key presses.

Create and populate `requests.json` with an object containing your desired requests.

Example of a single macro that sends a request to `http://hostname/path/to/api` when `Q` is pressed:
```json
{
  "Q": {
    "options": {
      "port": "",
      "path": "http://hostname/path/to/api",
      "method": "POST",
      "headers": {
        "foo": "bar",
        "Content-Type": "application/json"
      }
    },
    "body": {}
  }
}
```
