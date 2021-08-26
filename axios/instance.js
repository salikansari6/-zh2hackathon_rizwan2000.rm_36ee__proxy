const axios = require("axios");
require("dotenv").config();

const AxiosInstance = axios.create({
  baseURL: process.env.baseURL,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "X-Zeta-AuthToken": process.env.authToken,
  },
});

module.exports = AxiosInstance;
