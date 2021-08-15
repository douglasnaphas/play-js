const express = require("express");
const m1 = require("./lib/m1");
const m2 = require("./lib/m2");
const app = express();

app.use("/c", m1);
app.use("/c", m2);
app.get("/c", (req, res) => {
  return res.send(`${res.locals.acc}`);
});
app.get("/ab", m1, m2, function (req, res) {
  res.send("Hello World\n");
});
app.get("/ab", (req, res) => {
  res.send(`${res.locals.acc}`);
});

module.exports = app;
