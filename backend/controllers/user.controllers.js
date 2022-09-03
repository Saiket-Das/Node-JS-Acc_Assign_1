let users = require("../../users.json")

module.exports.randomUser = (req, res) => {
    const randomNum = Math.floor(Math.random() * (users.length - 1 + 1) + 1)
    const user = users.find(user => user.Id === randomNum);
    res.status(200).send({
        success: true,
        data: user
    })
}

module.exports.getAllUser = (req, res) => {
    const { limit } = req.query;

    res.status(200).send({
        success: true,
        data: users.slice(0, limit)
    })
}


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