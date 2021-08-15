const m2 = [
  (req, res, next) => {
    console.log("m2-1 happened");
    return next();
  },
  (req, res, next) => {
    console.log("m2-2 happened");
    return next();
  },
];
module.exports = m2;
