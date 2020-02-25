const {
    Router
} = require('express');
const fs = require('fs')
const router = Router();


router.get('/', (req, res) => {
    let months = JSON.parse(fs.readFileSync(__dirname + '/../db/months.json', 'utf8'))

    const data = months.map(item => item.id);
    res.json(data);
});

router.get('/:id', (req, res) => {
    let months = JSON.parse(fs.readFileSync(__dirname + '/../db/months.json', 'utf8'))

    const response = months.find(item => item.id === parseInt(req.params.id)
    );
    res.send(response);
});

router.get('/:month/:year', (req, res) => {
    let months = JSON.parse(fs.readFileSync(__dirname + '/../db/months.json', 'utf8'))

    const response = months.find(item => item.month === req.params.month && item.year === req.params.year);
    res.send(response);
});

module.exports = router;