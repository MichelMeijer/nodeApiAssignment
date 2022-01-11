const expect = require("chai").expect;
const { success, error, validation } = require("../responseApi");

describe("Response Api", function() {
    describe("Success Response", function() {

      it('Should return succes message', function(done) {
        let expectedResult = {
        code: 0,
        msg: 'Success',
        records: [{'testRecord' : 1}]
      };
        
        let result = success([{'testRecord' : 1}])

        // expect(result).to.be.a('object');
        expect(result).to.equal(expectedResult);
      });
    });
  
    describe("Error Response", function() {

    });

    describe("Validation Response", function() {

    });
});