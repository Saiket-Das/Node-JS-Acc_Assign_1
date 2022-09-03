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
    // res.send()
}