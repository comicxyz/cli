const { default: axios } = require("axios");
const client = require("./client");

async function browse() {
    try {
        const response = await client.get("/services/manhwasusu");
        return response.data;
    } catch (error) {
        return error;
    }
}

async function main() {
    const result = await browse();
    const data = result.data;
    console.log(JSON.stringify(data.comics));
}

main();