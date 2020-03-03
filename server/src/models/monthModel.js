const sql = require('./db.js')

const Month = function (month) {
    this.monthNumber = month.number
    this.year = month.year
    this.balance = month.balance
    this.incomesTotal = month.incomesTotal
    this.outcomesTotal = month.outcomesTotal
    this.fkUser = month.userId

}
Month.getAll = (userId, result) => {
    sql.query(`SELECT * FROM month WHERE fkUser = ${userId}`, (err, res) => {
        if (err) {
            console.log('ERROR:' + err)
            result(err, null)
        } else {
            console.log('Months: ' + res)
            result(null, res)
        }


    })
}

Month.getMonth = (monthId, result) => {
    sql.query(`SELECT * FROM month WHERE id = ${monthId}`, (err, res) => {
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
    sql.query(`UPDATE month SET balance=${balance}, incomesTotal=${incomesTotal}, 
    outcomesTotal=${outcomesTotal} WHERE fkUser=${userId} AND id=${monthId}`, (err, res) => {
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