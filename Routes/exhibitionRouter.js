const express = require("express");
const router = express.Router();
const renderExhibition = require("../Controllers/exhibitionController");

router.get("/", renderExhibition.seeExhibitions);

module.exports = router;