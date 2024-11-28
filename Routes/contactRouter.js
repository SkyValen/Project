const express = require("express");
const router = express.Router();
const renderContact = require("../Controllers/contactController");

router.get("/", renderContact.seeContacts);

module.exports = router