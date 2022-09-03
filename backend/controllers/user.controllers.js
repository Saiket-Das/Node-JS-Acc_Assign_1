let users = require("../../users.json")

module.exports.getAllUser = (req, res, next) => {
    res.send(users)
}