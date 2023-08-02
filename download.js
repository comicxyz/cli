const client = require("./client");

/**
 * 
 * @param {{url: string, title: string, seriesTitle: string, seriesUrl: string, comicInfoXml: Object}[]} chapters 
 * @returns {any}
 */
function downloadUrl(chapters) {
    return client({
        method: "post",
        data: {
            chapters,
        },
        url: "/add-job-download-chapters",
    });
}

const args = process.argv.slice(2);

const [filename, index] = args;

const data = require(filename);
console.log(data.title);
console.log(data.url);
console.log(data.chapters.length, "chapters");

downloadUrl(data.chapters)