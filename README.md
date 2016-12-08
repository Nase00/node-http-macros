Extremely lightweight Electron app to map HTTP requests to key presses.

See [Electron's globalShortcut documention](https://github.com/electron/electron/blob/master/docs/api/global-shortcut.md).

# How to use

```bash
git clone https://github.com/Nase00/node-http-macros
cd node-http-macros
npm install
```

Within the root, create and populate `requests.json` with an object containing your desired requests.

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

Once `requests.json` exists, run with `npm start`.
