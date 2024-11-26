const express = require("express")
const router = express.Router();
const renderMainPage = require('../Controllers/mainPageController')

router.get("/", renderMainPage.seeMainPage)

module.exports = router