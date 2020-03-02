const Month = require('../models/monthModel.js')

// Retrieve all months of the user from the database
exports.findAll = (req, res) => {
    //validate request
    if (!req.body.userId) {
        res.status(500).send({
            message: 'Content can not be empty!'
        })
        return
    }

    Month.getAll(req.body.userId, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || 'Some error ocurred while getting the user months.'
            })
        } else {
            res.send(data)
        }
    })
}

exports.findMonth = (req, res) => {
    if (!req.body.userId) {
        res.status(500).send({
            message: 'Content can not be empty!'
        })
        return
    }

    Month.getMonth(req.body.userId, req.params.id, (err, data) => {
        //validate request

        if (err) {
            res.status(500).send({
                message: err.message || 'Some error ocurred while getting the user month by id.'
            })
        } else {
            res.send(data)
        }
    })
}

