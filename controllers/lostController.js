const lostPetsDb = require("../models/PetLost");
const personDb = require("../models/Person");

module.exports = async (req, res) => {

    if (req.method == 'GET') {
        let animals = await lostPetsDb.find({}).populate("lostBy").lean();
        res.render("animals-lost", { title: "Lost Animals", animals })
    } else if (req.method == 'POST') {
       
      console.log( req.body)
        // if (saveToDb) {
            
            
        //     res.redirect('/lost')
        // } else {
        //     res.status(401).send()
        // }



    }
}
