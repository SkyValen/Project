const express = require("express");
const router = express.Router();
const renderEvents = require("../Controllers/eventsController");

router.get("/", renderEvents.seeEvents);

module.exports = router