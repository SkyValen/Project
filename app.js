const express = require('express');
const nunjucks = require("nunjucks");
const path = require("path")
const app = express();
const mainPage = require("./Routes/mainPageRouter");
const news = require("./Routes/newsRouter");
const aboutUs = require("./Routes/aboutUsRouter");
const contact = require("./Routes/contactRouter");
const event = require("./Routes/eventsRouter");
const exhibition = require("./Routes/exhibitionRouter");
const work = require("./Routes/worksRouter")

nunjucks.configure('Components', {
    autoescape: true,
    express: app,
    watch: true
});

app.use('/img', express.static(path.join(__dirname, 'Components/img')));

app.use("/", mainPage);
app.use("/news", news);
app.use("/aboutUs", aboutUs);
app.use("/contacts", contact);
app.use("/events", event);
app.use("/exhibitions", exhibition);
app.use("/works", work)

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});