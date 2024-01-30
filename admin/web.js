const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
// const port = process.env.PORT || 3000;
const port = 3000;
// const port = 3306;

app.use(
  cors({
    origin: ["http://www.accydream.com:3060"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
