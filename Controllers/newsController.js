const news = {
    seeNews: async (req, res) => {
        try {
            console.log("Welcome to the news channel!")
            res.render("news.njk");
        } catch (error) {
            res.status(500).json({ message: "Error getting the news page!"})
        }
    }
}

module.exports = news;