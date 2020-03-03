
module.exports = app => {
    const monthController = require('../controllers/monthController.js')

    // Month Routes
    app.get('/api/v1/month', monthController.findAll)
    app.post('/api/v1/month', monthController.newMonth)

    app.get('/api/v1/month/:id', monthController.findMonth)
    app.put('/api/v1/month/:id', monthController.editMonth)

};