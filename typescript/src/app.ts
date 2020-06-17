// lib/app.ts
import express = require('express');
// Create a new express application instance
const app: express.Application = express();

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

