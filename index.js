const express = require("express");
const axios = require("axios");
const { config } = require("dotenv");
const cors = require("cors");

config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const newsApi = process.env.NEWS_API;
const newsApiHarshit = process.env.NEWS_API_HARSHIT;

app.get("/", async (req, res) => {
  const data = await axios.get(newsApi);
  res.json({ data: data.data.articles });
});

app.get("/harshit", async (req, res) => {
  try {
    const data = await axios.get(
      `${newsApiHarshit}&category=${req.query.category}`
    );
    res.json({ articles: data.data.articles });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.listen(process.env.PORT, () => {
  console.log("I have started the server.");
});
