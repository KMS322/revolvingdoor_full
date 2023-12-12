const express = require("express");
const passport = require("passport");
const { isLoggedIn, isNotLoggedIn } = require("../middlewares");
const { join, checkEmail, login, logout } = require("../controllers/auth");
const router = express.Router();
// POST /auth/join
router.post("/join", isNotLoggedIn, join);
// POST /auth/checkEmail
router.post("/checkEmail", isNotLoggedIn, checkEmail);
// POST /auth/jlogin
router.post("/login", isNotLoggedIn, login);
// GET /auth/logout
router.get("/logout", isLoggedIn, logout);

module.exports = router;
