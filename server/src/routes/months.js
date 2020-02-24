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

    const response = months.find(item => item.id === req.params.id);
    res.send(response);
});

router.get('/:month/:year', (req, res) => {
    let months = JSON.parse(fs.readFileSync(__dirname + '/../db/months.json', 'utf8'))

    const response = months.find(item => item.month === req.params.month && item.year === req.params.year);
    res.send(response);
});

router.post('/', (req, res) => {
    let months = JSON.parse(fs.readFileSync(__dirname + '/../example.json', 'utf8'))

    //get the month
    let date = new Date(req.body.date)
    let monthToChange = String(date.getMonth() + 1)
    let yearOfMonth = String(date.getFullYear())
    let month = months.find(item => item.month === monthToChange && item.year === yearOfMonth)
    console.log(req.body)
    res.send('success')
    //change month total and add the new one.
    // month[req.body.type].expenses.push(req.body)
    // month[req.body.type].total += req.body.value

    // ///save data to file
    // fs.writeFileSync(__dirname + '/../example.json', JSON.stringify(months))
})

module.exports = router;