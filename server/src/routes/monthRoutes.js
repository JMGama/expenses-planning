const verifyToken = require('../utils/verifyToken')

module.exports = app => {
    const monthController = require('../controllers/monthController.js')

    // Month Routes
    app.get('/api/v1/month/user/:userId', verifyToken, monthController.findAll)
    app.post('/api/v1/month/', verifyToken, monthController.newMonth)

    app.get('/api/v1/month/:id', verifyToken, monthController.findMonth)
    app.put('/api/v1/month/:id', verifyToken, monthController.editMonth)

};