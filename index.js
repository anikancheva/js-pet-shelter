const db = require("./config/animals-db");
const routes = require("./config/router");
const express = require('express');
const handlebars = require("express-handlebars");

const app=express();

const Person = require("./models/Person")
const PetLost = require("./models/PetLost");
const PetFound = require("./models/PetFound")


init();

async function init() {
    
    await db();
    

    //seedData();

    app.engine('.hbs', handlebars.create({ extname: '.hbs' }).engine);
    app.set('view engine', '.hbs');

    app.use('/static', express.static('./static'));
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json({ extended: false }));
    routes(app);

}

function seedData() {
    let rachel = new Person({
        firstName: "Rachel",
        lastName: "Green",
        phoneNo: "203-399-8374"
    });

    rachel.save(() => console.log(`Saved ${rachel.firstName} in databse`));

    let phoebe = new Person({
        firstName: "Phoebe",
        phoneNo: "203-500-6294"
    });

    phoebe.save(() => console.log(`Saved ${phoebe.firstName} in databse`));

    let lostDog = new PetLost({
        kind: "Dog",
        name: "Maxi",
        breed: "Samoyed",
        age: 4,
        color: "snow",
        imageUrl: "https://topdogresource.com/wp-content/uploads/2021/11/Samoyed-Smiling-Outside-scaled.jpg",
        lostBy: rachel
    });

    
    let lostDog2 = new PetLost({
        kind: "Dog",
        name: "Roni",
        breed: "Bolognese",
        age: 7,
        color: "white",
        imageUrl: "static/images/bolognese-dog.jpg",
        lostBy: rachel
    });

    let lostCat = new PetLost({
        kind: "Cat",
        name: "Jane",
        breed: "Ragdoll",
        age: 2,
        color: "latte",
        imageUrl: "static/images/ragdoll.jpg",
        lostBy: phoebe
    });

    lostDog.save(() => console.log(`Saved ${lostDog.name} in databse`));
    lostDog2.save(() => console.log(`Saved ${lostDog2.name} in databse`));
    lostCat.save(() => console.log(`Saved ${lostCat.name} in databse`));

    let foundChinchilla = new PetFound({
        kind: "Chinchilla",
        color: "gray",
        location: "Phoebe's apartment",
        imageUrl: "https://i.pinimg.com/originals/2d/60/df/2d60df43e06b1735adbe5c234f69cde3.jpg",
        foundBy: phoebe
    });

    foundChinchilla.save(() => console.log(`Saved ${foundChinchilla.kind} in databse`));
}