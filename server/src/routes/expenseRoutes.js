
module.exports = app => {
    const ExpenseController = require('../controllers/ExpenseController.js')

    // Expense Routes
    app.get('/api/v1/expense', ExpenseController.findAll)
    app.post('/api/v1/expense', ExpenseController.newExpense)

    app.get('/api/v1/expense/:id', ExpenseController.findExpense)
    app.put('/api/v1/expense/:id', ExpenseController.changeExpense)
    app.delete('/api/v1/expense/:id', ExpenseController.removeExpense)

    app.get('/api/v1/expense/month/:id', ExpenseController.findExpenseByMonth)

};