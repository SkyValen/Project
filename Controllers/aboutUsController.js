const aboutUs = {
    seeAboutUs: async (req, res) => {
        try {
            console.log("welcome to the about us page!");
            res.render("aboutUs.njk");
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error getting about us page!"})
        }
    }
}

module.exports = aboutUs;