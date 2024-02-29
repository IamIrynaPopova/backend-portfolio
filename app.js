const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const getFormData = require("./operations");


app.post("/api", getFormData);

app.listen(3001, () => {
  console.log("Example app listening on port 3001!");
});

module.exports = app;
