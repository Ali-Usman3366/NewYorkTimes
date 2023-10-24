const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");

app.use(express.json());
app.use(cors({ origin: "*" }));

const axiosInstance = axios.create({
  baseURL: "https://api.nytimes.com/svc/topstories/v2",
  header: {
    "Access-Control-Allow_Origin": "*",
    "content-type": "application/json",
  },
});

app.get("/", async (req, res) => {
  try {
    const response = await axiosInstance.get(
      "/science.json?api-key=286GFG9QA3Y5VdbHZRQNnaxj4U5yQGRr"
    );
    if (response?.data?.results && response?.data?.results?.length) {
      res.status(200).json(response?.data?.results);
    } else {
      res
        .status(400)
        .json({ message: "something went wrong while getting data!" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

app.listen(4000, () => {
  console.log("Its working!");
});
