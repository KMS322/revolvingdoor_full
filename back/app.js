const express = require("express");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const dotenv = require("dotenv");
const userRouter = require("./routes/user");
const postRouter = require("./routes/post");
const resumeRouter = require("./routes/userResume");
const resumesRouter = require("./routes/resumes");
const db = require("./models");
const passportConfig = require("./passport");

dotenv.config();
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
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
    credentials: true,
    cookie: {
      httpOnly: true,
      secure: false, // HTTPS를 사용하면 true로 변경
      maxAge: 1000 * 60 * 60 * 24, // 세션 쿠키의 유효 기간 (1일)
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send("hello express");
});

app.use("/user", userRouter);
app.use("/post", postRouter);
app.use("/resume", resumeRouter);
app.use("/resumes", resumesRouter);
// app.use((err, req, res, next) => {
//   // 에러 처리 미들웨어
// });

app.listen(3065, () => {
  console.log("서버 실행 중");
});

// 디비 실행 : npx sequelize db:create
// npx sequelize db:drop
// npx sequelize migration:generate --name your-migration-name
// npx sequelize db:migrate
