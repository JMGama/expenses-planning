
module.exports = app => {
    const userController = require('../controllers/userController.js')

    // User Routes

    app.get('/api/v1/user/:id', userController.findUser)
    app.put('/api/v1/user/:id', userController.editUser)

};