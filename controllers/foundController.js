module.exports = (req, res) => {
    if (req.method == 'GET') {
        console.log('found controller registerd GET method')
    } else if (req.method == 'POST') {
        console.log('found controller registerd POST method')
    }
}