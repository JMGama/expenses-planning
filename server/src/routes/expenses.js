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

    const response = expenses.find(item => item.id === parseInt(req.params.id));
    res.send(response);
});

router.get('/month/:monthId', (req, res) => {
    let expenses = JSON.parse(fs.readFileSync(__dirname + '/../db/expenses.json', 'utf8'))

    const response = expenses.filter(item => item.fkMonth === parseInt(req.params.monthId));
    res.send(response);
});

router.post('/', (req, res) => {
    let months = JSON.parse(fs.readFileSync(__dirname + '/../db/months.json', 'utf8'))
    let expenses = JSON.parse(fs.readFileSync(__dirname + '/../db/expenses.json', 'utf8'))

    // get the month
    const date = new Date(req.body.date)
    const monthToChange = String(date.getMonth() + 1)
    const yearOfMonth = String(date.getFullYear())
    let month = months.find(item => item.month === monthToChange && item.year === yearOfMonth)

    // add the expense
    req.body.type = req.body.type.toLowerCase()
    const ids = Object.values(expenses.map(expense => expense.id))
    const id = Math.max(...ids) + 1
    const newExpense = { id, ...req.body, fkMonth: parseInt(month.id) }
    expenses.push(newExpense)

    // edit month balance
    if (req.body.type === "income") {
        month.balance += req.body.value
        month.incomesTotal += req.body.value
    } else {
        month.balance -= req.body.value
        month.outcomesTotal += req.body.value
    }

    let error = false
    fs.writeFile(__dirname + '/../db/expenses.json', JSON.stringify(expenses, null, 4), (err) => {
        if (err) { error = 'Error writing expenses data: ' + err }
    })
    fs.writeFile(__dirname + '/../db/months.json', JSON.stringify(months, null, 4), (err) => {
        if (err) { error = 'Error writing months data: ' + err }
    })

    if (error === false) {
        res.send('success')
    } else {
        res.send(error)
    }

})
module.exports = router;