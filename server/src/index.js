const express = require("express");
const app = express();
const cors = require("cors");
const { fetch } = require("./controller");


const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors({ origin: "*" }));


app.get("/", fetch);

app.listen(port, () => {
  console.log("Its working!");
});
