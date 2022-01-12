exports.validate = (req) => {

    //For now we only return a boolean. 
    //When more time we should return a specific validation error
    let isValid = true;

    if (!req.body.startDate || !req.body.endDate || !req.body.minCount || !req.body.maxCount) {
        isValid = false;
        console.log('here1');
    }

    //Because of lack of time only checking if it is a string
    //It should validate if Date formate is correct
    if (typeof req.body.startDate  !== 'string' || req.body.startDate instanceof String ) {
        isValid = false;
    }

    if (typeof req.body.endDate  !== 'string' || req.body.endDate instanceof String ) {
        isValid = false;
        console.log('here3');

    }

    if (typeof req.body.minCount  !== 'number' || typeof req.body.maxCount !== 'number' ) {
        isValid = false;
        console.log('here4');

    }

    return isValid;
  };
