const User = require('../models/userModel.js')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.loginUser = (req, res) => {
    User.getUserByEmail(req.body.email, (err, data) => {

        const request = req.body
        if ((request.remember !== true && request.remember !== false) ||
            !request.email ||
            !request.password) {
            res.status(400).send({
                message: 'Invalid request, check your data and try again.'
            })
            return
        }


        if (err) {
            res.status(500).send({
                message: err.message || 'Some error ocurred while getting the login user.'
            })
        } else if (data.length === 0) {
            res.status(404).send({
                message: 'There is no information for that request.'
            })
        } else {
            bcrypt.compare(request.password, data.password, function (hash_err, hash_res) {
                if (hash_res) {
                    const payload = {
                        id: data.id,
                        email: data.email,
                        firstName: data.firstName,
                        lastName: data.lastName
                    }
                    console.log(process.env.JWT_SECRET)
                    const token = jwt.sign(payload, process.env.JWT_SECRET, {
                        expiresIn: '24h'
                    });

                    const response = {
                        message: 'Successfully authenticated',
                        token
                    }
                    res.send(response)
                } else {
                    res.status(404).send({
                        message: 'Invalid email or password.'
                    })
                }
            });
        }
    })
}

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

    // Validate that the email doesn't exists already.
    User.getUserByEmail(request.email, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || 'Some error ocurred while creating the new user.'
            })
        } else {
            console.log(data)
            if (data) {
                res.status(400).send({
                    message: 'The given email is already used.'
                })
            } else {
                // Create the new user with the request data if the email is available.
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

        }
    })


}