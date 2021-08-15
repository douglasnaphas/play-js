const m1 = [
  (req, res, next) => {
    console.log("m1-1 happened");
    return next("route");
  },
  (req, res, next) => {
    console.log("m1-2 happened");
    return next();
  },
];
module.exports = m1;
