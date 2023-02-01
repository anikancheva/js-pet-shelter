const db = require("./config/animals-db");
const routes = require("./config/router");
const express = require('express');
const handlebars = require("express-handlebars");

const app=express();

// const Person = require("./models/Person")
// const PetLost = require("./models/PetLost");
// const PetFound = require("./models/PetFound")


init();

async function init() {
    
    await db();
    routes(app);

    //seedData();

    app.engine('.hbs', handlebars.create({ extname: '.hbs' }).engine);
    app.set('view engine', '.hbs');

    app.use('/static', express.static('./static'));
    app.use(express.urlencoded({ extended: false }));

}

function seedData() {
    let rachel = new Person({
        firstName: "Rachel",
        lastName: "Green",
        phoneNo: "203-399-8374"
    });

    rachel.save(() => console.log(`Saved ${rachel.firstName} in databse`));

    let lostDog = new PetLost({
        kind: "Dog",
        name: "Maxi",
        breed: "Samoyed",
        age: 4,
        color: "snow",
        imageUrl: "https://topdogresource.com/wp-content/uploads/2021/11/Samoyed-Smiling-Outside-scaled.jpg",
        lostBy: rachel
    });

    lostDog.save(() => console.log(`Saved ${lostDog.name} in databse`));

    let phoebe = new Person({
        firstName: "Phoebe",
        phoneNo: "203-500-6294"
    });

    phoebe.save(() => console.log(`Saved ${phoebe.firstName} in databse`));

    let foundChinchilla = new PetFound({
        kind: "Chinchilla",
        color: "gray",
        location: "Phoebe's apartment",
        imageUrl: "https://i.pinimg.com/originals/2d/60/df/2d60df43e06b1735adbe5c234f69cde3.jpg",
        foundBy: phoebe
    });

    foundChinchilla.save(() => console.log(`Saved ${foundChinchilla.kind} in databse`));
}