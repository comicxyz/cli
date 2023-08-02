const { default: axios } = require("axios");

const baseUrl = "http://localhost:3000";

/**
 * @type {import("axios").AxiosInstance}
 */
const client = axios.create({
    baseURL: baseUrl,
    json: true
});

module.exports = client;