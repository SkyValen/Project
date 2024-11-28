const contact = {
    seeContacts: async (req, res) => {
        try {
            console.log("Welcome to the contact page!");
            res.render("contact.njk")
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error getting contact page!" })
        }
    }
}

module.exports = contact;