const Month = require('../models/monthModel.js')

// Retrieve all months of the user from the database
exports.findAll = (req, res) => {
    Month.getAll(req.params.userId, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || 'Some error ocurred while getting the user months.'
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

exports.findMonth = (req, res) => {

    Month.getMonth(req.params.id, (err, data) => {

        if (err) {
            res.status(500).send({
                message: err.message || 'Some error ocurred while getting the user month by id.'
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

exports.newMonth = (req, res) => {
    //validate request
    const request = req.body
    if (!request.userId ||
        (!request.balance && request.balance !== 0) ||
        (!request.incomesTotal && request.incomesTotal !== 0) ||
        (!request.outcomesTotal && request.outcomesTotal !== 0) ||
        !request.number ||
        !request.year) {
        res.status(400).send({
            message: 'Invalid request, check your data and try again.'
        })
        return
    }

    //create new Expense object
    const newMonth = new Month(req.body)

    Month.addMonth(newMonth, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || 'Some error ocurred while creating the new user month.'
            })
        } else {
            res.send(data)
        }
    })
}

exports.editMonth = (req, res) => {
    //validate request
    const request = req.body
    if (!request.userId ||
        (!request.balance && request.balance !== 0) ||
        (!request.incomesTotal && request.incomesTotal !== 0) ||
        (!request.outcomesTotal && request.outcomesTotal !== 0)) {
        res.status(400).send({
            message: 'Invalid request, check your data and try again.'
        })
        return
    }

    Month.updateMonth(request.userId, parseInt(req.params.id), request.balance, request.incomesTotal, request.outcomesTotal, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || 'Some error ocurred while updating the user month.'
            })
        } else {
            res.send(data)
        }
    })
}