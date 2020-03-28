const retFromAsync = require("./ret-from-async");

// console.log(retFromAsync()); // prints Promise { <pending> }

(async () => {
  const data = await retFromAsync();
  console.log(data); // prints the data as desired
})();
