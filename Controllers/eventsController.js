const events = {
    seeEvents: async (req, res) => {
        try {
            console.log("Welcome to the events page!")
            res.render("events.njk")
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error getting events page!" })
        }
    }
}

module.exports = events;