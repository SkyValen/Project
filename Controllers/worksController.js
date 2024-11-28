const works = {
    seeWorks: async (req, res) => {
        try {
            console.log("Welcome to the works page!")
            res.render("works.njk")
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error getting works page!" })
        }
    }
}

module.exports = works;