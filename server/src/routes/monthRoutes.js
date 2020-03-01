
module.exports = app => {
    const monthController = require('../controllers/monthController.js')

    // Month Routes
    app.get('/month', monthController.findAll)
    app.get('/month/:id', monthController.findMonth)

};