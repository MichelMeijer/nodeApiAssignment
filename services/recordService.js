const Records = require('../models/Record');

exports.getAll = (startDate, endDate) => Records.aggregate([
    {   
        $match: {createdAt: {$gt: new Date(startDate),$lt: new Date(endDate) }}
    },
    {   $project: {
        _id: 0,
        key: "$key", 
        createdAt: "$createdAt",
        countsTotal: { $sum: "$counts"}
        } 
    }
]);