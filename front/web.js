const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3050;
// const port = 80;

app.use(express.static(path.join(__dirname, "build")));

app.get("/", function (req, res) {
  res.status(200).sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
