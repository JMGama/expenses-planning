const Expense = require('../models/expenseModel.js')
const Month = require('../models/monthModel.js')

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

    //get the monthId from the date
    const date = new Date(req.body.date)
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    //get the month data to be used and modified
    Expense.getMonthIdByNumberAndYear(month, year, request.userId, (err, data) => {

        if (err) {
            res.status(500).send({
                message: err.message || 'Some error ocurred while creating the new Expense.'
            })
        }
        else if (data.length < 1) {
            // Create the month since its not created yet.
            const monthData = {
                number: month,
                year: year,
                balance: 0,
                incomesTotal: 0,
                outcomesTotal: 0,
                userId: request.userId
            }
            const newMonth = new Month(monthData)
            Month.addMonth(newMonth, (monthErr, resMonthData) => {
                if (monthErr) {
                    res.status(500).send({
                        message: month_err.message || 'Some error ocurred while creating the month.'
                    })
                } else {
                    monthData.id = resMonthData.insertId
                    request.monthId = monthData.id
                    request.date = date
                    const newExpense = new Expense(request)
                    // add the new expense
                    Expense.addExpense(newExpense, (add_err, add_data) => {
                        if (add_err) {
                            res.status(500).send({
                                message: add_err.message || 'Some error ocurred while creating the new Expense.'
                            })
                        } else {

                            // change the month data with the new expense info
                            if (newExpense.type === 'income') {
                                monthData.incomesTotal += newExpense.amount
                                monthData.balance += newExpense.amount
                            } else {
                                monthData.outcomesTotal += newExpense.amount
                                monthData.balance -= newExpense.amount
                            }

                            //update the month information.
                            Expense.updateMonthInfo(monthData, (month_err, month_res) => {
                                if (month_err) {
                                    res.status(500).send({
                                        message: month_err.message || 'Some error ocurred while updating the month expenses.'
                                    })
                                } else {
                                    res.send(month_res)
                                }
                            })
                        }
                    })
                }
            })
        } else {

            //create new Expense object
            const monthData = data[0]
            request.monthId = monthData.id
            request.date = date
            const newExpense = new Expense(request)

            // add the new expense
            Expense.addExpense(newExpense, (add_err, add_data) => {
                if (add_err) {
                    res.status(500).send({
                        message: add_err.message || 'Some error ocurred while creating the new Expense.'
                    })
                } else {

                    // change the month data with the new expense info
                    if (newExpense.type === 'income') {
                        monthData.incomesTotal += newExpense.amount
                        monthData.balance += newExpense.amount
                    } else {
                        monthData.outcomesTotal += newExpense.amount
                        monthData.balance -= newExpense.amount
                    }

                    //update the month information.
                    Expense.updateMonthInfo(monthData, (month_err, month_res) => {
                        if (month_err) {
                            res.status(500).send({
                                message: month_err.message || 'Some error ocurred while updating the month expenses.'
                            })
                        } else {
                            res.send(month_res)
                        }
                    })
                }
            })
        }
    })
}