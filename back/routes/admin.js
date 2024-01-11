const express = require("express");
const router = express.Router();
const allUserRouter = require("./admin/allUser");

router.use("/user", allUserRouter);

module.exports = router;
