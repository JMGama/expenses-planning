const express = require('express')
const morgan = require('morgan')
const app = express();

// settings
app.set('port', 8080)
app.set('json spaces', 2)

// middleware
app.use(morgan('dev'));
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

//routes
app.use(require('./routes/index'));
app.use('/api/months', require('./routes/months'));

// starting server
app.listen(app.get('port'), function () {
    console.log(`Server running on port 8080`);
});