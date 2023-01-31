const foundController=require("../controllers/foundController")
const lostController=require("../controllers/lostController")

const port=3000;

module.exports = (app) => {
    app.all("/found", foundController);
    app.all("/lost", lostController);

    app.listen(port, ()=>console.log(`Server is listening on port ${port}...`))

}