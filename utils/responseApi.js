exports.success = (results) => {
  return {
    code: 0,
    msg: 'Success',
    records: results
  };
};

exports.error = (message) => {
return {
  code: 1,
  msg : message
  };
};

exports.validation = (message) => {
  return {
    code: 1,
    msg : message
  };
};

