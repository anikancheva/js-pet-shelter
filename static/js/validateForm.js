function onSubmitLost(e) {
    e.preventDefault();
    let data = new FormData(e.target);
    // check all fields
    let type = data.get('type')
    let breed = data.get('breed')
    let name = data.get('name')
    let age = data.get('age')
    let color = data.get('color')
    let image = data.get('image')
    let firstName = data.get('first')
    let lastName = data.get('last')
    let phoneNo = data.get('phoneNo')

    
    fetch('/lost', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({type, breed, name, age, color, image, firstName, lastName, phoneNo})
    }).then(resp => {
        if (resp.status==401) {
            alert('Couldn\'t submit your request. Please try again!')
        }
    })
}

function onSubmitFound(e) {
    e.preventDefault();
    let data = new FormData(e.target);
    // check all fields

    let type = data.get('type')
    let breed = data.get('breed')
    let color = data.get('color')
    let location = data.get('location')
    let image = data.get('image')
    let firstName = data.get('first')
    let lastName = data.get('last')
    let phoneNo = data.get('phoneNo')

    fetch('/found', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({type, breed, color, location, image, firstName, lastName, phoneNo})
    }).then(resp => {
        if (resp.status==401) {
            alert('Couldn\'t submit your request. Please try again!')
        }
    })
    
}
