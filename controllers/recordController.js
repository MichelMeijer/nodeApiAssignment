const router = require('express').Router();
const recordService = require('../services/recordService');
const bodyParser = require('body-parser')
const { success, error, validation } = require("./../responseApi");

// create application/json parser
const jsonParser = bodyParser.json()

router.post('/', jsonParser, async (req, res, next) => {
    
    try {
        let records = await recordService.getAll(req.body.startDate, req.body.endDate);
        let filteredRecords = records.filter( element => element.countsTotal > req.body.minCount && element.countsTotal < req.body.maxCount); 
        res.json(success(filteredRecords));
    } catch(e) {
        res.json(error("Could not retrieve the records"));
    }

});



module.exports = router;