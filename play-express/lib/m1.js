const m1 = [
  (req, res, next) => {
    res.locals.acc = `${res.locals.acc},m1-1`;
    return next("route");
  },
  (req, res, next) => {
    res.locals.acc = `${res.locals.acc},m1-2`;
    return next();
  },
];
module.exports = m1;
