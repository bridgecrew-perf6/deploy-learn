const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const newsApi =
    "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=26e92693046341ad9d594421f6e1b21d";

app.get("/", async (req, res) => {
    const data = await axios.get(newsApi);
    res.json({ data: data.data.articles });
});

app.listen(3001, () => {
    console.log("I have started the server.");
});
