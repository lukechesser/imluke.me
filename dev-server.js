const fs = require("fs");
const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

// Serve assets
app.use(express.static('dist'));

app.listen(port, () => {
  console.log("Listening on port", port)
});
