const foundController = require("../controllers/foundController")
const lostController = require("../controllers/lostController")

const port = 3000;

module.exports = (app) => {

    app.get("/", (req, res) => res.render("home", { title: "Home" }));
    app.get("/lost", lostController);
    app.all("/found", foundController);
    

    

    app.listen(port, () => console.log(`Server is listening on port ${port}...`))

}