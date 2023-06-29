let inputs = document.getElementsByTagName('input');
let typeField = inputs.type
let breedField = inputs.breed
let colorField = inputs.color
let imageField = inputs.image

let firstNameField = inputs.firstName
let lastNameField = inputs.lastName
let phoneNoField = inputs.phoneNo


function onSubmitLost(e) {
    e.preventDefault();
    let nameField = inputs.name
    let ageField = inputs.age

    let type = typeField.value
    let breed = breedField.value
    let name = nameField.value
    let age = ageField.value
    let color = colorField.value
    let image = imageField.value
    let firstName = firstNameField.value
    let lastName = lastNameField.value
    let phoneNo = phoneNoField.value

    let validName = true;
    let validAge = true;
    
    if (name.trim().length < 1) {
        errorBorder(nameField, true);
        validName = false;
    } else {
        errorBorder(nameField, false);

    }
    if (String(age) == '') {
        errorBorder(ageField, true);
        validAge = false;
    } else {
        errorBorder(ageField, false);
    }

    let otherFields = checkFields(type, breed, color, firstName, lastName, phoneNo, image);
    if (validName && validAge && otherFields) {
        fetch('/lost', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ type, breed, name, age, color, image, firstName, lastName, phoneNo })
        }).then(resp => {
            if (resp.status == 401) {
                alert('Couldn\'t submit your request. Please try again!')
            }
        })
    }else {
        alert('Make sure all input fields are filled!')
    }


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

    let validLocation = false;
    let locationField = inputs.location
    if (location.trim().length < 3) {

    }

    if (validLocation && checkFields(type, breed, color, firstName, lastName, phoneNo, image)) {
        fetch('/found', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ type, breed, color, location, image, firstName, lastName, phoneNo })
        }).then(resp => {
            if (resp.status == 401) {
                alert('Couldn\'t submit your request. Please try again!')
            }
        })
    }


}

function checkFields(type, breed, color, firstName, lastName, phoneNo, image) {
    let areValid = true;
    if (type.trim().length < 2) {
        errorBorder(typeField, true);
        areValid = false;
    } else {
        errorBorder(typeField, false);
    }

    if (breed.trim().length < 2) {
        errorBorder(breedField, true);
        areValid = false;
    } else {
        errorBorder(breedField, false);
    }

    if (color.trim().length < 3) {
        errorBorder(colorField, true);
        areValid = false;
    } else {
        errorBorder(colorField, false);
    }

    if (firstName.trim().length < 2) {
        errorBorder(firstNameField, true);
        areValid = false;
    } else {
        errorBorder(firstNameField, false);
    }

    if (lastName.trim().length < 2) {
        errorBorder(lastNameField, true);
        areValid = false;
    } else {
        errorBorder(lastNameField, false);
    }

    if (phoneNo.trim().length != 10) {
        errorBorder(phoneNoField, true);
        areValid = false;
    } else {
        errorBorder(phoneNoField, false);
    }

    if (image.length < 5) {
        errorBorder(imageField.parentElement, true);
        areValid = false;
    } else {
        errorBorder(imageField.parentElement, false);
    }

    return areValid;
}

function errorBorder(htlmElement, invalid) {
    if (invalid) {
        htlmElement.style.border = '2px solid red';
    } else {
        htlmElement.style.border = 'none'
    }

}
