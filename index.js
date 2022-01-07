const express = require("express");
const axios = require("axios");
const { config } = require("dotenv");
config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const newsApi = process.env.NEWS_API;

app.get("/", async (req, res) => {
    const data = await axios.get(newsApi);
    res.json({ data: data.data.articles });
});

app.listen(process.env.PORT, () => {
    console.log("I have started the server.");
});
