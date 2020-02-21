const {
    Router
} = require('express');
const fs = require('fs');

const router = Router();

router.get('/test', (req, res) => {

    const data = {
        "test": "Some test"
    }
    res.json(data);
});

module.exports = router;