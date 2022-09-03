const e = require("express");
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
        res.send('You may be missed to put ID.')
    }
    else if (!gender) {
        res.send('You may be missed to put gender.')
    }
    else if (!name) {
        res.send('You may be missed to put name.')
    }
    else if (!contact) {
        res.send('You may be missed to put contact.')
    }
    else if (!address) {
        res.send('You may be missed to put address.')
    }
    else if (!photoUrl) {
        res.send('You may be missed to put photoUrl.')
    }

    else {
        users.push(req.body);
        res.send(users)
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

        res.send(newData)
    }

    else {
    }
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

    else {
        res.send('Your provided Id is not valid')
    }
}