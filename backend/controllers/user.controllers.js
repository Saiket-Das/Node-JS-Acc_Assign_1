let users = require("../../users.json")


// --------- Get a random user 
module.exports.randomUser = (req, res) => {
    const randomNum = Math.floor(Math.random() * (users.length - 1 + 1) + 1)
    const user = users.find(user => user.Id === randomNum);
    res.status(200).send({
        success: true,
        data: user
    })
}


// --------- Get all users
module.exports.getAllUser = (req, res) => {
    const { limit } = req.query;

    res.status(200).send({
        success: true,
        data: users.slice(0, limit)
    })
}


// --------- Save a user 
module.exports.saveUser = (req, res) => {
    const { Id, gender, name, contact, address, photoUrl } = req.body

    if (!Id) {
        res.status(400).send({
            success: false,
            Message: 'You may be missed to put ID.'
        })
    }
    else if (!gender) {
        res.status(400).send({
            success: false,
            Message: 'You may be missed to put gender.'
        })
    }
    else if (!name) {
        res.status(400).send({
            success: false,
            Message: 'You may be missed to put name.'
        })
    }
    else if (!contact) {
        res.status(400).send({
            success: false,
            Message: 'You may be missed to put contact.'
        })
    }
    else if (!address) {
        res.status(400).send({
            success: false,
            Message: 'You may be missed to put address.'
        })
    }
    else if (!photoUrl) {
        res.status(400).send({
            success: false,
            Message: 'You may be missed to put photoUrl.'
        })
    }

    else {
        users.push(req.body);
        res.status(200).send({
            success: true,
            data: users
        })
    }
}


// --------- Update a user's information
module.exports.updateUser = (req, res) => {
    const { Id, gender, name, contact, address, photoUrl } = req.body;

    const newData = users.find(user => user.Id === Id);

    if (newData) {
        if (gender) {
            newData.gender = gender
        }

        if (name) {
            newData.name = name
        }

        if (contact) {
            newData.contact = contact
        }

        if (address) {
            newData.address = address
        }
        if (photoUrl) {
            newData.photoUrl = photoUrl
        }

        res.status(200).send({
            success: true,
            data: newData
        })
    }

    else {
        res.status(400).send({
            success: false,
            Message: 'Your provided Id is not valid'
        })
    }
}


// --------- Update multiple user's information
module.exports.updateMulitpleUser = (req, res) => {
    req.body.filter(data => {
        const validUser = users.find(user => user.Id === data.Id)

        const { Id, gender, name, contact, address, photoUrl } = data
        console.log({ Id, gender, name, contact, address, photoUrl });

        if (validUser) {
            if (gender) {
                validUser.gender = gender
            }

            if (name) {
                validUser.name = name
            }

            if (contact) {
                validUser.contact = contact
            }

            if (address) {
                validUser.address = address
            }
            if (photoUrl) {
                validUser.photoUrl = photoUrl
            }

        }

        else {
            res.status(400).send({
                success: false,
                Message: 'Your provided Id is not valid'
            })
        }
    })

    res.status(200).send({
        success: true,
        data: users
    })
}


// --------- Delete a user
module.exports.deleteUser = (req, res) => {
    const { Id } = req.body;
    const validUser = users.find(user => user.Id === Id);

    if (validUser) {
        users = users.filter(user => user.Id !== Id)
        res.status(200).send({
            success: true,
            data: users
        })
    }

    res.status(400).send({
        success: false,
        Message: 'Your provided Id is not valid'
    })
}