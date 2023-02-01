module.exports = (req, res) => {
    if (req.method == 'GET') {
        res.render("upload", {title: "Found Animal"})
    } else if (req.method == 'POST') {
        //get animal data from form
    }
}