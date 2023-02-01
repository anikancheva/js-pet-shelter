const lostPetsDb = require("../models/PetLost");
const personDb = require("../models/Person");

module.exports = async (req, res) => {

    let animals=await lostPetsDb.find({}).populate("lostBy").lean();
    console.log(animals);
    res.render("animals", { title: "Animals",  animals })

}