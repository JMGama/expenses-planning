const sql = require('./db.js')

const Month = function (month) {
    this.monthNumber = month.monthNumber
    this.monthYear = month.monthYear
    this.monthBalance = month.monthBalance
    this.monthIncomesTotal = month.monthIncomesTotal
    this.monthOutcomesTotal = month.monthOutcomesTotal
    this.monthFkUser = month.monthFkUser

}
Month.getAll = (userId, result) => {
    sql.query('SELECT * FROM month WHERE fk_user = ?', userId, (err, res) => {
        if (err) {
            console.log('ERROR:' + err)
            result(err, null)
            return
        }

        console.log('Months: ' + res)
        result(null, res)
    })
}

Month.getMonth = (userId, monthId, result) => {
    sql.query(`SELECT * FROM month WHERE fk_user = ${userId} AND id = ${monthId}`, (err, res) => {
        if (err) {
            console.log('ERROR:' + err)
            result(err, null)
            return
        }

        console.log('Month: ' + res)
        result(null, res)
    })
}

module.exports = Month