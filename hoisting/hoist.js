console.log(x); // undefined
x = "pre";
console.log(x); // pre
var x = "echs";
console.log(x); // echs
// console.log(y); // cannot access 'y' before initialization
const y = "why";
// console.log(z); // z is not defined
function useZ() {
  var z = "zet";
}
useZ();
// console.log(z); // z is not defined
