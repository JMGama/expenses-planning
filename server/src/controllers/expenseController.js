const Expense = require('../models/expenseModel.js')

// Retrieve all the expenses for the given month from the database.
exports.findByMonth = (req, res) => {

    Expense.getByMonth(req.params.monthId, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || 'Some error ocurred while getting the month expenses.'
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

exports.newExpense = (req, res) => {
    //validate request
    const request = req.body
    if (!request.amount || !request.type || !request.description || !request.date || !request.userId) {
        res.status(500).send({
            message: 'Invalid request, check your data and try again.'
        })
        return
    }

    //create new Expense object
    const newExpense = new Expense(req.body)

    //get the monthId from the date
    const date = new Date(req.body.date)
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    newExpense.date = date

    Expense.addExpense(newExpense, month, year, request.userId, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || 'Some error ocurred while creating the new Expense.'
            })
        } else {
            res.send(data)
        }
    })

}