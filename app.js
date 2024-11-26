const express = require('express');
const nunjucks = require("nunjucks");
const app = express();
const mainPage = require("./Routes/mainPageRouter");

nunjucks.configure('Components', {
    autoescape: true,
    express: app
});

app.use("/", mainPage);

app.listen(3000, () => {
    console.log("Server is running on port 3000")
});