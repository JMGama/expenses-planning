const sql = require('./db.js')

const Expense = function (expense) {
    this.amount = expense.amount
    this.type = expense.type.toLowerCase()
    this.description = expense.description
    this.date = expense.date
    this.fkMonth = expense.monthId
}
Expense.getByMonth = (monthId, result) => {
    sql.query(`SELECT * FROM expense WHERE fkMonth = ${monthId}`, (err, res) => {
        if (err) {
            console.log('ERROR: ' + err)
            result(err, null)
        } else {
            console.log('Expenses: ' + res)
            result(null, res)
        }
    })
}

Expense.addExpense = (newExpense, result) => {
    sql.query('INSERT INTO expense SET ?', newExpense, (err, res) => {
        if (err) {
            console.log('ERROR: ' + err)
            result(err, null)
        } else {
            console.log('NEW Expense: ' + res)
            result(null, res)
        }
    })
}


Expense.getMonthIdByNumberAndYear = (month, year, userId, result) => {
    sql.query(`SELECT * FROM month WHERE monthNumber=${month} AND year=${year} AND fkUser =${userId}`, (err, res) => {
        if (err) {
            console.log('ERROR: ' + err)
            result(err, null)
        } else {
            console.log('Month id: ' + res)
            result(null, res)
        }
    })
}

Expense.updateMonthInfo = (month, result) => {
    console.log(month)
    sql.query(`UPDATE month SET balance=${month.balance}, incomesTotal=${month.incomesTotal}, outcomesTotal=${month.outcomesTotal}
    WHERE id=${month.id}`, (err, res) => {
        if (err) {
            console.log('ERROR:' + err)
            result(err, null)
        } else {
            console.log('UPDATED Month: ' + res)
            result(null, res)
        }
    })
}

module.exports = Expense