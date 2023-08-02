const client = require("./client");

function getChapters(url) {
  return client({
    method: "post",
    data: {
      url,
    },
    url: "/get-chapters",
  });
}

const args = process.argv.slice(2);

const [filename, index] = args;

const data = require(filename);

getChapters(data[index].url)
    .then((result) => {
        console.log(JSON.stringify(result.data.data, 1, " "));
    })