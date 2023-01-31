module.exports = (req, res) => {
    if (req.method == 'GET') {
        console.log('lost controller registerd GET method')
    } else if (req.method == 'POST') {
        console.log('lost controller registerd POST method')
    }
}