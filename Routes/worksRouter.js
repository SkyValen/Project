const express = require("express");
const router = express.Router();
const renderWork = require("../Controllers/worksController")

router.get("/", renderWork.seeWorks);

module.exports = router