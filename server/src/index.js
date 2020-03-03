const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express().use('*', cors());

// settings
app.set('port', 3001)
app.set('json spaces', 2)

// middleware
app.use(morgan('dev'));
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

//routes
require('./routes/monthRoutes')(app)
require('./routes/expenseRoutes')(app)

// starting server
app.listen(app.get('port'), function () {
    console.log(`Server running on port 3001`);
});