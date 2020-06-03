module.exports = app => {
    const userController = require('../controllers/authController.js')
    const verifyToken = require('../utils/verifyToken')


    // Auth Routes
    app.post('/api/v1/auth/signup', userController.newUser)
    app.post('/api/v1/auth/login', userController.loginUser)
    app.post('/api/v1/auth/tokenData', verifyToken, userController.getUserDataWithToken)

};