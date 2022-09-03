let users = require("../../users.json")

module.exports.getAllUser = (req, res) => {
    const { limit } = req.query;
    res.send(users.slice(0, limit))
}