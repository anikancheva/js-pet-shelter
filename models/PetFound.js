const { Schema, model } = require('mongoose');

const petSchema = new Schema({
    kind: {type: String, required: true},
    breed: { type: String, requied: false  },
    color: { type: String , requied: false },
    location: {type: String, requied: true },
    imageUrl: { type: String, requied: true },
    foundBy: {type: Schema.Types.ObjectId, ref: "Person", requied: true }
})

module.exports = model("PetFound", petSchema, "found");