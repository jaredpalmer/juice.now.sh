# Juice Microservice

[Automattic's juice](https://www.npmjs.com/package/juice) CSS inliner as a microservice.

## Usage

Send a POST request to `https://juice.now.sh`

```json
{
  "options": {
    "applyAttributesTableElements": true,
    "applyHeightAttributes": true,
    "applyStyleTags": true,
    "applyWidthAttributes": true,
    "extraCss": "",
    "insertPreservedExtraCss": true,
    "inlinePseudoElements": true,
    "preserveIMportant": false,
    "preserveMediaQueries": true,
    "removeStyleTags": true,
    "webResources": {},
    "xmlMode": false
  },
  "html": "<!doctype html>
<html>
  <head>
    <style>
      .yolo {
        color: blue;
      }
    </style>
  </head>
  <body>
    <div class="yolo">hello</div>
  </body>
</html>"
}

juice.now.sh will respond and return your CSS-inlined HTML in a nice envelope.

```json
{
  "html": { ... }
}
```

That's it. :smile:

---
MIT License
