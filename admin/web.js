const express = require("express");
const path = require("path");
const app = express();
// const port = process.env.PORT;
const port = 3306;

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
