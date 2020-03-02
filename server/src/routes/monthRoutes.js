
module.exports = app => {
    const monthController = require('../controllers/monthController.js')

    // Month Routes
    app.get('/api/v1/month', monthController.findAll)
    app.get('/api/v1/month/:id', monthController.findMonth)

};