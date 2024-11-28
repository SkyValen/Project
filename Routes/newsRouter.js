const express = require("express");
const router = express.Router();
const renderNews = require("../Controllers/newsController");

router.get("/", renderNews.seeNews)

module.exports = router