const retFromAsync = require("./ret-from-async");

// console.log(retFromAsync()); // prints Promise { <pending> }

const retFromAsync2 = async () => {
  return Promise.resolve({
    userId: 1,
    id: 1,
    title: "sun aut facere",
    body: "quia et suscipit"
  });
};

(async () => {
  const data = await retFromAsync();
  console.log(data); // prints the data as desired
})();

(async () => {
  const data2 = await retFromAsync2();
  console.log(data2);
})();

// console.log(retFromAsync2()); // prints Promise { <pending> }
