const express = require("express");
const m1 = require("./lib/m1");
const m2 = require("./lib/m2");
const app = express();

// app.use("/ab", m1);
// app.use("/ab", m2);
app.get("/ab", m1, m2, function (req, res) {
  res.send("Hello World\n");
});
app.get("/ab", (req, res) => {
  res.send("landed here!\n");
});

module.exports = app;
