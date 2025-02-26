function makeClass() {
  return {
    f1 (p1) {
      console.log(`f1 p1 is ${p1}`);
    },
    f2 (p2) {
      console.log(`f2 p1 is ${p2}`);
    },
    getXPlus1(x) { return x + 1; }
  }
}
let c1 = makeClass();
c1.f1('hi');
c1.f2('two');
console.log(c1.getXPlus1(5));
