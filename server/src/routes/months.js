const {
    Router
} = require('express');

const router = Router();

const months = require('../example.json')

router.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:3001');
    const data = months
    res.json(data);
});

module.exports = router;