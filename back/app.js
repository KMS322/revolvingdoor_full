const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/user");
const postRouter = require("./routes/post");
const db = require("./models");
const passportConfig = require("./passport");

const app = express();

db.sequelize
  .sync()
  .then(() => {
    console.log("db 연결 성공");
  })
  .catch(console.err);

passportConfig();

app.use(
  cors({
    // origin: 'https://domain.com'
    origin: "*",
    // credentials: false,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello express");
});

app.use("/user", userRouter);
app.use("/post", postRouter);

app.listen(3065, () => {
  console.log("서버 실행 중");
});

// 디비 실행 : npx sequelize db:create
