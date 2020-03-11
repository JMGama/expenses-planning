
module.exports = app => {
    const userController = require('../controllers/userController.js')

    // User Routes

    app.post('/api/v1/user', userController.newUser)
    app.post('/api/v1/user/login', userController.loginUser)
    app.get('/api/v1/user/:id', userController.findUser)
    app.put('/api/v1/user/:id', userController.editUser)

};