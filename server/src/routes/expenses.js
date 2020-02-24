const {
    Router
} = require('express');
const fs = require('fs')
const router = Router();


router.get('/', (req, res) => {
    let expensesIds = JSON.parse(fs.readFileSync(__dirname + '/../db/expenses.json', 'utf8'))

    const data = expensesIds.map(item => item.id);
    res.json(data);
});

router.get('/:id', (req, res) => {
    let expenses = JSON.parse(fs.readFileSync(__dirname + '/../db/expenses.json', 'utf8'))

    const response = expenses.find(item => item.id === req.params.id);
    res.send(response);
});

router.get('/month/:monthId', (req, res) => {
    let expenses = JSON.parse(fs.readFileSync(__dirname + '/../db/expenses.json', 'utf8'))

    const response = expenses.filter(item => item.fkMonth === req.params.monthId);
    res.send(response);
});
module.exports = router;