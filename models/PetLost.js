const { Schema, model } = require('mongoose');

const petSchema = new Schema({
    name: { type: String , requied: false },
    breed: { type: String , requied: true },
    age: { type: Number , requied: false, min:0 },
    color: { type: String , requied: false },
    imageUrl: { type: String , requied: true },
    lostBy: {type: Schema.Types.ObjectId, ref: "Person", requied: true }
})

module.exports = model("PetLost", petSchema, "lost");