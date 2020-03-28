const axios = require("axios");
const retFromAsync = async () => {
  return await axios
    .get("https://jsonplaceholder.typicode.com/posts/1")
    .then(r => r.data);
};
module.exports = retFromAsync;
