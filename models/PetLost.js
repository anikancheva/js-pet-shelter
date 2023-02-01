const { Schema, model } = require('mongoose');

const petSchema = new Schema({
    kind: {type: String, required: true},
    breed: { type: String , requied: true },
    name: { type: String , requied: false },
    age: { type: Number , requied: false, min:0 },
    color: { type: String , requied: false },
    imageUrl: { type: String , requied: true },
    lostBy: {type: Schema.Types.ObjectId, ref: "Person", requied: true }
})

module.exports = model("PetLost", petSchema, "lost");