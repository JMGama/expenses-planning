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

Expense.addExpense = (newExpense, month, year, userId, result) => {
    sql.query(`SELECT id FROM month WHERE monthNumber=${month} AND year=${year} AND fkUser =${userId}`, (err, res) => {
        if (err) {
            console.log('ERROR: ' + err)
            result(err, null)
        }
        newExpense.fkMonth = res[0].id
        sql.query('INSERT INTO expense SET ?', newExpense, (ins_err, ins_res) => {
            if (ins_err) {
                console.log('ERROR: ' + ins_err)
                result(ins_err, null)
            } else {
                console.log('NEW Expense: ' + ins_res)
                result(null, ins_res)
            }
        })
    })

}

module.exports = Expense