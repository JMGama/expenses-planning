const User = require('../models/userModel.js')
const bcrypt = require('bcrypt');

exports.newUser = (req, res) => {

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
    request.password = bcrypt.hashSync(request.password, 10)

    const newUser = new User(req.body)
    User.addUser(newUser, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || 'Some error ocurred while creating the new user.'
            })
        } else {
            res.send(data)
        }
    })
}

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

exports.loginUser = (req, res) => {
    User.getUserByEmail(req.body.email, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || 'Some error ocurred while getting the login user.'
            })
        } else if (data.length === 0) {
            res.status(404).send({
                message: 'There is no information for that request.'
            })
        } else {
            bcrypt.compare(req.body.password, data.password, function (hash_err, hash_res) {
                if (hash_res) {
                    delete data.password
                    res.send(data)
                } else {
                    res.status(404).send({
                        message: 'Invalid email or password.'
                    })
                }
            });
        }
    })
}