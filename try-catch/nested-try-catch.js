#!/usr/bin/env node

try {
  console.log("trying...");
  if (process.env.ARG1 === "fail") {
    throw "failing, as instructed";
  }
  console.log("still trying...");
} catch (error) {
  console.log(error);
  console.log("failed");
  process.exit(1);
} finally {
  console.log("finally!");
  // "finally!" doesn't print in the error case
  // maybe that's obvious, but whatever
}
