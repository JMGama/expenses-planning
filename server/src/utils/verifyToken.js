const jwt = require('jsonwebtoken');

// FORMAT OF TOKEN
// Authorization: Bearer <access_token>

// Verify the Token
module.exports = function (req, res, next) {
    const bearerHeader = req.headers['Authorization']

    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ')
        const bearerToken = bearer[1]

        jwt.verify(bearerToken, process.env.JWT_SECRET, (err, authData) => {
            if (err) {
                res.sendStatus(403)
            } else {
                req.authData = authData
                next()
            }
        })

    } else {
        res.sendStatus(401);
    }
}