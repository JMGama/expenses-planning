const User = require('../models/userModel.js')


exports.findUser = (req, res) => {
    User.getUser(req.params.id, (err, data) => {

        if (err) {
            res.status(500).send({
                message: err.message || 'Some error ocurred while getting the user by id.'
            })
        } else if (data.length === 0) {
            res.status(404).send({
                message: 'There is no information for that request.'
            })
        } else {
            res.send(data)
        }
    })
}

exports.editUser = (req, res) => {
    const request = req.body
    if (!request.firstName ||
        !request.lastName ||
        !request.birthday ||
        !request.country ||
        !request.region ||
        !request.email ||
        !request.password) {
        res.status(400).send({
            message: 'Invalid request, check your data and try again.'
        })
        return
    }
    const newUser = new User(req.body)
    User.updateUser(request.userId, newUser, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || 'Some error ocurred while updating the new user.'
            })
        } else {
            res.send(data)
        }
    })
}