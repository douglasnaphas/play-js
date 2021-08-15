const m2 = [
  (req, res, next) => {
    res.locals.acc = `${res.locals.acc},m2-1`;
    return next();
  },
  (req, res, next) => {
    res.locals.acc = `${res.locals.acc},m2-2`;
    return next();
  },
];
module.exports = m2;
