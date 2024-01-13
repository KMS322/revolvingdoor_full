const express = require("express");
const router = express.Router();
const allUserRouter = require("./admin/allUser");
const individualRouter = require("./admin/individual");

router.use("/user", allUserRouter);
router.use("/individual", individualRouter);

module.exports = router;
