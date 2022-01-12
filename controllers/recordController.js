const router = require('express').Router();
const recordService = require('../services/recordService');
const bodyParser = require('body-parser')
const { success, error, validation } = require("../utils/responseApi");
const { validate } = require("./../validators/requestValidator");


// create application/json parser
const jsonParser = bodyParser.json()

router.post('/', jsonParser, async (req, res, next) => {
    if (!validate(req)) {
        return res.json(error('Request is not correct'));
    }
    
    try {
        let records = await recordService.getAll(req.body.startDate, req.body.endDate);
        let filteredRecords = records.filter( element => element.countsTotal > req.body.minCount && element.countsTotal < req.body.maxCount); 
        return res.json(success(filteredRecords));
    } catch(e) {
        return res.json(error("Could not retrieve the records"));
    }

});



module.exports = router;