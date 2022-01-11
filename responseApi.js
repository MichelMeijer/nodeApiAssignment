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
    msg : message,
  };
};

exports.validation = (errors) => {
    return {
      error: true,
      message: "Validation errors",
      code: 422,
      errors
    };
  };

  