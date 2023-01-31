const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

module.exports = () => {
    return new Promise((resolve, reject) => {
        mongoose.connect("mongodb://127.0.0.1:27017/animals", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
            .then(() => {
                console.log("Database connected!");
                resolve();
            })
            .catch(() => {
                console.log("Error connecting to database!");
                reject();
            });
    })
}

