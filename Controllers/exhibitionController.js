const exhibition = {
    seeExhibitions: async (req, res) => {
        try {
            console.log('Welcome to exhibitions page!')
            res.render('exhibition.njk')
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error getting exhibition page!" })
        }
    }
}

module.exports = exhibition;