const express = require("express");
const router = express.Router();
const renderAboutUs = require("../Controllers/aboutUsController");

router.get("/", renderAboutUs.seeAboutUs);

module.exports = router;