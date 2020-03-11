const sql = require('./db.js')

const User = function (user) {
    this.firstName = user.firstName
    this.lastName = user.lastName
    this.birthday = user.birthday
    this.country = user.country
    this.region = user.region
    this.email = user.email
    this.password = user.password

}
User.addUser = (newUser, result) => {
    sql.query('INSERT INTO user SET ?', newUser, (err, res) => {
        if (err) {
            console.log('ERROR:' + err)
            result(err, null)
        } else {
            console.log('NEW User: ' + res)
            result(null, res)
        }
    })
}

User.getUser = (userId, result) => {
    sql.query(`SELECT * FROM user WHERE id = ${userId}`, (err, res) => {
        if (err) {
            console.log('ERROR:' + err)
            result(err, null)
        } else {
            console.log('User: ' + res)
            result(null, res)
        }


    })
}

User.updateUser = (userId, newUser, result) => {
    sql.query(`UPDATE month SET ? WHERE id=${userId}`, newUser, (err, res) => {
        if (err) {
            console.log('ERROR:' + err)
            result(err, null)
        } else {
            console.log('NEW Month: ' + res)
            result(null, res)
        }
    })
}

User.getUserByEmail = (email, result) => {
    sql.query('SELECT * FROM user WHERE email = ? ', email, (err, res) => {
        if (err) {
            console.log('ERROR:' + err)
            result(err, null)
        } else {
            console.log('User: ' + res)
            result(null, res[0])
        }
    })
}

module.exports = User