const expect = require("chai").expect;
const { success, error, validation } = require("../utils/responseApi");

describe("Response Api", function() {
    describe("Success Response", function() {

      it('Should return succes object', () => {
        let result = success([{'testRecord':1}])

        expect(result.code).to.equal(0);
        expect(result.msg).to.equal('Success');
        expect(result.records).to.eql([{'testRecord':1}]);
      });
    });
  
    describe("Error Response", function() {
      it('Should return an error object', () => {
        let result = error("Could not retrieve the records");
        expect(result.code).to.equal(1);
        expect(result.msg).to.equal("Could not retrieve the records");
      });



    });

    describe("Validation Response", function() {

    });
});