const foundPetsDb = require("../models/PetFound");

module.exports = async (req, res) => {
    if (req.method == 'GET') {
        let animals = await foundPetsDb.find({}).populate("foundBy").lean();
        res.render("animals-found", {title: "Found Animals", animals})
    } else if (req.method == 'POST') {
        console.log(req.body)
    }
}