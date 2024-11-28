const mainPage = {
    seeMainPage: async (req, res) => {
        try {
            console.log("Welcome to the server!")
            res.render("index.njk", {})
        } catch (error) {
            res.status(500).json({message: "Error getting main page!"})
        }
    },
}

module.exports = mainPage