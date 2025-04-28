const express = require("express");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const dotenv = require("dotenv");
const userRouter = require("./routes/user");
const resumeRouter = require("./routes/userResume");
const resumesRouter = require("./routes/resumes");
const careerRouter = require("./routes/userCareer");
const careersRouter = require("./routes/careers");
const businessRouter = require("./routes/business");
const applicationRouter = require("./routes/businessApplication");
const applicationsRouter = require("./routes/applications");
const recruitmentRouter = require("./routes/businessRecruitment");
const recruitmentsRouter = require("./routes/recruitments");
const userInfoRouter = require("./routes/userInfo");
const adminRouter = require("./routes/admin");
const testRouter = require("./routes/test");
const matchingRouter = require("./routes/matching");
const aligoRouter = require("./routes/aligo");
const db = require("./models");
const passportConfig = require("./passport");
const { UserBusiness } = require("./models");
dotenv.config();
const app = express();

db.sequelize
  .sync()
  .then(() => {
    console.log("db connected");
  })
  .catch(console.err);

passportConfig();

// if (process.env.NODE_ENV === "production") {
//   app.use(morgan("combined"));
//   app.use(hpp());
//   app.use(helmet());
// } else {
//   app.use(morgan("dev"));
// }
// npm i pm2 cross-env helmet hpp
// (package.json) "cross-env NODE_ENV=production pm2 start app"

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost",
      // "localhost:443",
      // "http://localhost:3050",
      // "http://localhost:443",
      // "http://accydream.com",
      // "http://accydream.com:3000",
      "http://175.45.195.45:3000",
      "http://175.45.195.45",
      // "http://accydream.com:3050",
      // "https://www.accydream.com",
      // "https://www.accydream.com:3000",
      // "https://www.accydream.com:3050",
    ],
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
      secure: false,
      // secure: true,
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  console.log("server accessed");
  res.status(200).send("server on");
});

app.use("/user", userRouter);
app.use("/resume", resumeRouter);
app.use("/resumes", resumesRouter);
app.use("/career", careerRouter);
app.use("/careers", careersRouter);
app.use("/business", businessRouter);
app.use("/application", applicationRouter);
app.use("/applications", applicationsRouter);
app.use("/recruitment", recruitmentRouter);
app.use("/recruitments", recruitmentsRouter);
app.use("/userInfo", userInfoRouter);
app.use("/admin", adminRouter);
app.use("/test", testRouter);
app.use("/matching", matchingRouter);
app.use("/aligo", aligoRouter);
// app.use((err, req, res, next) => {
//   // 에러 처리 미들웨어
// });
const port = 3060;

const schedule = require("node-schedule");
const job = schedule.scheduleJob("0 0 1 1 *", async function () {
  console.log("결제 금액 초기화");
  try {
    await UserBusiness.update(
      { business_member_pay: 0 },
      {
        where: {},
      }
    );
    console.log(
      "All non-null business_member_pay elements set to 0 on February 19th, 2024."
    );
  } catch (error) {
    console.error("Scheduled task error:", error);
  }
});
app.listen(port, () => {
  console.log(`${port}에서 서버 실행 중`);
});
