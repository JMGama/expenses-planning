const verifyToken = require('../utils/verifyToken')

module.exports = app => {
    const ExpenseController = require('../controllers/expenseController.js')

    // Expense Routes
    app.get('/api/v1/expense/month/:monthId', verifyToken, ExpenseController.findByMonth)
    app.post('/api/v1/expense', verifyToken, ExpenseController.newExpense)

};