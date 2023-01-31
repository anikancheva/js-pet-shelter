const db = require("./config/animals-db");
const routes = require("./config/router");
const app = require('express')();

const Person = require("./models/Person")
const PetLost = require("./models/PetLost");


init();

async function init() {
    await db();
    routes(app);

    seedData();
}

function seedData() {
    let rachel = new Person({
        firstName: "Rachel",
        lastName: "Green",
        phoneNo: "203-399-8374",
    });

    rachel.save(() => console.log(`Saved ${rachel.firstName} in databse`));

    let lostDog = new PetLost({
        name: "Maxi",
        breed: "Samoyed",
        age: 4,
        color: "snow",
        imageUrl: "https://topdogresource.com/wp-content/uploads/2021/11/Samoyed-Smiling-Outside-scaled.jpg",
        lostBy: rachel
    });

    lostDog.save(() => console.log(`Saved ${lostDog.name} in databse`));
}