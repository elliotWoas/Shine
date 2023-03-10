const express = require('express');
const router = express.Router();
const {login, signup , logout , userlist} = require("../controller/auth.controller")

//login router
router.post("/login",login);


//signup router
router.post("/signup",signup);

//logout router
router.get("/logout", logout);

//getting user list router
router.get("/", userlist);


module.exports = router;