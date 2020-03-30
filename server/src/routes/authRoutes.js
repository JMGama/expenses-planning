module.exports = app => {
    const userController = require('../controllers/authController.js')

    // Auth Routes
    app.post('/api/v1/auth/signup', userController.newUser)
    app.post('/api/v1/auth/login', userController.loginUser)

};