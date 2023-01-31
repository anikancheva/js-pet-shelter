const { Schema, model } = require('mongoose');

const personSchema = new Schema({
    firstName: { type: String, requied: true },
    lastName: { type: String , requied: false },
    phoneNo: {type: String, requied: true },
})

module.exports = model("Person", personSchema);