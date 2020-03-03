const sql = require('./db.js')

const Month = function (month) {
    this.month_number = month.number
    this.year = month.year
    this.balance = month.balance
    this.incomes_total = month.incomesTotal
    this.outcomes_total = month.outcomesTotal
    this.fk_user = month.userId

}
Month.getAll = (userId, result) => {
    sql.query(`SELECT * FROM month WHERE fk_user = ${userId}`, (err, res) => {
        if (err) {
            console.log('ERROR:' + err)
            result(err, null)
        } else {
            console.log('Months: ' + res)
            result(null, res)
        }


    })
}

Month.getMonth = (userId, monthId, result) => {
    sql.query(`SELECT * FROM month WHERE fk_user = ${userId} AND id = ${monthId}`, (err, res) => {
        if (err) {
            console.log('ERROR:' + err)
            result(err, null)
        } else {
            console.log('Month: ' + res)
            result(null, res)
        }


    })
}

Month.addMonth = (newMonth, result) => {
    sql.query('INSERT INTO month SET ?', newMonth, (err, res) => {
        if (err) {
            console.log('ERROR:' + err)
            result(err, null)
        } else {
            console.log('NEW Month: ' + res)
            result(null, res)
        }
    })
}

Month.updateMonth = (userId, monthId, balance, incomesTotal, outcomesTotal, result) => {
    sql.query(`UPDATE month SET balance=${balance}, incomes_total=${incomesTotal}, 
    outcomes_total=${outcomesTotal} WHERE fk_user=${userId} AND id=${monthId}`, (err, res) => {
        if (err) {
            console.log('ERROR:' + err)
            result(err, null)
        } else {
            console.log('NEW Month: ' + res)
            result(null, res)
        }
    })
}
module.exports = Month